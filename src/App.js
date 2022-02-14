import logo from './logo.svg';
import './App.css';
import Courasel from './components/carousel/courasel'
import TopNavigation from './components/top_nav/TopNavigation'
import SectionOne from './components/section_one/section_one'


function App() {
  return (
    <div className="App">
    <TopNavigation />
      <Courasel />
      <SectionOne />
    </div>
  );
}

export default App;
