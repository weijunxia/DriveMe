import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { GetCars, PostNewCar } from './services/CarServices'
import ProtectedRoute from './components/ProtectedRoute'
import { GetProfile } from './services/UserServices'
import React, { useState, useEffect } from 'react'
import SearchPage from './components/SearchPage'
import { CheckSession } from './services/Auth'
import { withRouter } from 'react-router-dom'
import LearnMore from './pages/LearnMore'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Register from './pages/Register'
import PostCar from './pages/PostCar'
import EditCar from './pages/EditCar'
import AboutUs from './pages/AboutUs'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import Car from './pages/Car'
import './App.css'

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
            {...props}
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
              component={(props) => <SearchPage {...props} cars={cars} />}
            />
            <Route
              exact
              path="/cars/:id"
              component={(props) => <Car {...props} userInfo={userInfo} />}
            />

            <Route
              exact
              path="/profile/cars/:id"
              component={(props) => <EditCar {...props} userInfo={userInfo} />}
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
