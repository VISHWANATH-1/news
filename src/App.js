import './App.css';
import Header from './Component/Header';
import {BrowserRouter as Router} from "react-router-dom"
function App() {
  return (
    <div className="App">
  <Router>
        <Header />
  </Router>
    </div>
  );
}

export default App;
