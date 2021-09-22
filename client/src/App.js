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
import { CheckSession } from './services/Auth'
import ProtectedRoute from './components/ProtectedRoute'
import axios from 'axios'
import { BASE_URL } from './services/api'
import { GetCars } from './services/CarServices'

function App(props) {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [cars, setCars] = useState([])

  const getCars = async () => {
    const data = await GetCars()
    console.log(data)
    setCars(data)
  }

  useEffect(() => {
    getCars()
  }, [])

  const handleSubmit = async (e, formData) => {
    e.preventDefault()
    const res = await axios.post(`${BASE_URL}/cars`, formData)
    setCars(...cars, res.data.results)
    props.history.push('/post-car')
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
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
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
              path="/api/auth/login"
              component={(props) => (
                <SignIn
                  {...props}
                  setUser={setUser}
                  toggleAuthenticated={toggleAuthenticated}
                />
              )}
            />
            <Route exact path="/api/auth/register" component={Register} />
            {user && authenticated && (
              <ProtectedRoute
                authenticated={authenticated}
                user={user}
                path={'/api/auth/login'}
                component={SignIn}
              />
            )}
          </Switch>
          <Footer />
        </Router>
      </header>
    </div>
  )
}

export default App
