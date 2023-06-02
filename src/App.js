import './App.css';
import Hero from './Components/Hero/Hero';
import Join from './Components/Join/Join';
import Plans from './Components/Plans/Plans';
import Programs from './Components/Programs/Programs';
import Reasons from './Components/Reassons/Reasons';
import Testimonials from './assets/Testmonials/Testimonials';
function App() {
  return (
    <div className="App">
          <Hero />
          <Programs />
          <Reasons /> 
          <Plans />
          <Testimonials />
          <Join />
    </div>
  );
}

export default App;
