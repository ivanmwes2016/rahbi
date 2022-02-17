import logo from './logo.svg';
import './App.css';
import Home from './pages/homapage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Home />


    </div>
  );
}

export default App;
