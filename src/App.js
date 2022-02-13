import logo from './logo.svg';
import './App.css';
import Courasel from './components/carousel/courasel'
import TopNavigation from './components/top_nav/TopNavigation'


function App() {
  return (
    <div className="App">
    <TopNavigation />
      <Courasel />
    </div>
  );
}

export default App;
