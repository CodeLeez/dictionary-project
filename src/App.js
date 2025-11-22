import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        LeezWordNet
        <main>
          <Dictionary defaultKeyword="fast" />
        </main>
        <small>
          <footer className="App-footer">Coded by Elizabeth</footer>
        </small>
      </div>
    </div>
  );
}

export default App;
