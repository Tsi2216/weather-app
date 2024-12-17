import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Weather App Logo" />
        <h1>Weather App</h1>
        <p>
          Get real-time weather updates and forecasts for your favorite cities.
        </p>
        <p>
          Enter a city name to get the current weather information.
        </p>
        <input type="text" placeholder="Enter city name" />
        <button>Get Weather</button>
        <div className="weather-info">
          <h2>Weather Details</h2>
          <p id="location">Location: </p>
          <p id="temperature">Temperature: </p>
          <p id="description">Description: </p>
        </div>
      </header>
    </div>
  );
}

export default App;