import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code> src / App.js </code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
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
