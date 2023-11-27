import logo from './logo.svg';
import newBackground from './newBackground.jpg'; // Asegúrate de tener esta imagen en tu directorio
import newImage from './newImage.jpg'; // Asegúrate de tener esta imagen en tu directorio
import './App.css';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${newBackground})` }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={newImage} alt="new" /> {/* Aquí se agrega la nueva imagen */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.puce.edu.ec"
          target="_blank"
          rel="noopener noreferrer"
        >
          puce Mario
        </a>
      </header>
    </div>
  );
}

export default App;
