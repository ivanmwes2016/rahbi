import Courasel from '../components/carousel/courasel'
import TopNavigation from '../components/top_nav/TopNavigation'
import SectionOne from '../components/section_one/section_one'
import '../App.css'

function Home() {
  return (
    <div className="App">
    <TopNavigation />
      <Courasel />
      <SectionOne />
    </div> 
  );
}

export default Home;
