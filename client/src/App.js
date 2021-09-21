import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SearchResults from './components/SearchResults'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavBar />
          <Switch></Switch>
          <Footer />
        </Router>
      </header>
    </div>
  )
}

export default App
