import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Cards from './components/Cards'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SearchResults from './components/SearchResults'
import Cards from './components/Cards'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavBar />

          <Cards />

          <div className="test">
            <Cards
              car_pic="https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/1_rangerover_tracking.jpg"
              make="Range Rover"
              model="L405"
              year="2021"
            />
            <Cards
              car_pic="https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/1_rangerover_tracking.jpg"
              make="Range Rover"
              model="L405"
              year="2021"
            />
            <Cards
              car_pic="https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/1_rangerover_tracking.jpg"
              make="Range Rover"
              model="L405"
              year="2021"
            />
          </div>
          <SearchResults
            car_pic="https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/1_rangerover_tracking.jpg"
            make="Range Rover"
            model="L405"
            year="2021"
            description="This great car ..."
            star={4.55}
            price="$150/night"
            total="$357 total"
          />
          <SearchResults
            car_pic="https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/1_rangerover_tracking.jpg"
            make="Range Rover"
            model="L405"
            year="2021"
            description="This great car ..."
            star={4.55}
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
