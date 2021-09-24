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
import LearnMore from './pages/LearnMore'
import { CheckSession } from './services/Auth'
import ProtectedRoute from './components/ProtectedRoute'

import {
  GetCars,
  PostNewCar,
  GetCarsById,
  UpdateCar
} from './services/CarServices'
import { GetProfile } from './services/UserServices'
import { withRouter } from 'react-router-dom'
import Car from './pages/Car'
import EditCar from './pages/EditCar'
import PostReview from './pages/PostReview'

function App(props) {
  const [authenticated, toggleAuthenticated] = useState(
    false || localStorage.getItem('authenticated')
  )
  const [user, setUser] = useState(null)
  const [userInfo, setUserInfo] = useState([])
  const [cars, setCars] = useState([])

  const getCars = async () => {
    const data = await GetCars()
    setCars(data)
  }

  const getUserProfile = async () => {
    if (!user) return
    const data = await GetProfile(user.id)
    setUserInfo(data)
  }

  useEffect(() => {
    getCars()
    getUserProfile()
  }, [user])

  const handleSubmit = async (e, formData) => {
    e.preventDefault()
    const res = await PostNewCar(formData)
    setCars(...cars, res.data)
    props.history.push('/profile')
    props.history.go('/profile')
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
              path="/cars/:id"
              component={(props) => <Car {...props} />}
            />

            <Route
              exact
              path="/profile/cars/:id"
              component={(props) => <EditCar {...props} cars={cars} />}
            />

            <Route
              exact
              path="/post-car"
              component={(props) => (
                <PostCar
                  handleSubmit={handleSubmit}
                  {...props}
                  cars={cars}
                  userInfo={userInfo}
                  setCars={setCars}
                />
              )}
            />
            <Route
              exact
              path="/profile"
              component={(props) => (
                <Profile
                  {...props}
                  userInfo={userInfo}
                  getUserProfile={getUserProfile}
                  cars={cars}
                />
              )}
            />
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
            <Route exact path="/learn" component={LearnMore}></Route>
          </Switch>
          <Footer />
        </Router>
      </header>
    </div>
  )
}

export default withRouter(App)
