import './App.css'
import { useState, useEffect } from 'react'
import React from 'react'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SearchResults from './components/SearchResults'
import Home from './pages/Home'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import { CheckSession } from './services/Auth'
import ProtectedRoute from './components/ProtectedRoute'
function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

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
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={SearchResults} />
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
                path={'/'}
                component={Home}
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
