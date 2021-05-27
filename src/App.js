import './App.css';
import logo from './images/blossom-collection-logo.png'
function App() {
  return (
    <div className="grid-container">
        <header>
          <img  width ="50px"src={logo}/>
        </header>
        <main>
          product list
        </main>
        <footer>
          this is footer
        </footer>
    </div>
  );
}

export default App;
