import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Cards from './components/Cards'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavBar />
          <Cards />
          <Switch></Switch>
          <Footer />
        </Router>
      </header>
    </div>
  )
}

export default App
