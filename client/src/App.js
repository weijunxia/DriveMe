import './App.css'
import React from 'react'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SearchResults from './components/SearchResults'
import Home from './pages/Home'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={SearchResults} />
          </Switch>
          <Footer />
        </Router>
      </header>
    </div>
  )
}

export default App
