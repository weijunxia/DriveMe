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
          <SearchResults
            car_pic="https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/1_rangerover_tracking.jpg"
            make="Range Rover"
            model="L405"
            year="2021"
            description="This great car ..."
            star={4.0}
            price="$150/night"
            total="$357 total"
          />
          <SearchResults
            car_pic="https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/1_rangerover_tracking.jpg"
            make="Range Rover"
            model="L405"
            year="2021"
            description="This great car ..."
            star={4.0}
            price="$150/night"
            total="$357 total"
          />
          <SearchResults
            car_pic="https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/1_rangerover_tracking.jpg"
            make="Range Rover"
            model="L405"
            year="2021"
            description="This great car ..."
            star={4.0}
            price="$150/night"
            total="$357 total"
          />
          <Switch></Switch>
          <Footer />
        </Router>
      </header>
    </div>
  )
}

export default App
