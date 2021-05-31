import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Rainbow shop!
          Dive into the ocean of Colors and Music NFTs
        </p>
        <a
          className="App-link"
          href="https://github.com/kavithashanmugan/rainbow/tree/master/src"
          target="_blank"
          rel="noopener noreferrer"
        >
         <Header/>
        </a>
        <a
          className="App-link"
          href="https://openkoi.com/framework/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about KOI
        </a>
      </header>
    </div>
  );
}

export default App;
