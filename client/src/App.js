import './App.css'
import React, { useState, useEffect } from 'react'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SearchResults from './components/SearchResults'
import Home from './pages/Home'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import PostCar from './pages/PostCar'
import Profile from './pages/Profile'
import AboutUs from './pages/AboutUs'
import { CheckSession } from './services/Auth'
import ProtectedRoute from './components/ProtectedRoute'
import axios from 'axios'
import { BASE_URL } from './services/api'
import { GetCars, PostNewCar } from './services/CarServices'

function App(props) {
  const [authenticated, toggleAuthenticated] = useState(
    false || localStorage.getItem('authenticated')
  )
  const [user, setUser] = useState(null)
  const [cars, setCars] = useState([])

  const getCars = async () => {
    const data = await GetCars()
    console.log(data)
    setCars(data)
  }

  const handleSubmit = async (e, formData) => {
    e.preventDefault()
    const res = await PostNewCar(formData)
    setCars(...cars, res.data)
    // props.history.push('/post-car')
  }

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const session = await CheckSession()
    setUser(session)
    toggleAuthenticated(true)
    localStorage.setItem('authenticated', '1')
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
    getCars()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavBar
            authenticated={authenticated}
            user={user}
            handleLogOut={handleLogOut}
          />
          <Switch>
            <Route
              exact
              path="/"
              component={(props) => <Home {...props} cars={cars} />}
            />
            <Route
              exact
              path="/search"
              component={(props) => <SearchResults {...props} cars={cars} />}
            />
            <Route
              exact
              path="/post-car"
              component={(props) => (
                <PostCar
                  handleSubmit={handleSubmit}
                  {...props}
                  cars={cars}
                  setCars={setCars}
                />
              )}
            />
            <Route
              exact
              path="/profile"
              component={(props) => (
                <Profile {...props} user={user} cars={cars} />
              )}
            ></Route>
            <Route
              exact
              path="/login"
              component={(props) => (
                <SignIn
                  {...props}
                  setUser={setUser}
                  toggleAuthenticated={toggleAuthenticated}
                />
              )}
            />
            <Route
              exact
              path="/register"
              component={(props) => <Register {...props} />}
            />
            {user && authenticated && (
              <ProtectedRoute
                authenticated={authenticated}
                user={user}
                path={'/login'}
                component={SignIn}
              />
            )}
            <Route exact path="/about" component={AboutUs}></Route>
          </Switch>
          <Footer />
        </Router>
      </header>
    </div>
  )
}

export default App
