import './App.css';
import Hero from './Components/Hero/Hero';
import Plans from './Components/Plans/Plans';
import Programs from './Components/Programs/Programs';
import Reasons from './Components/Reassons/Reasons';
function App() {
  return (
    <div className="App">
          <Hero />
          <Programs />
          <Reasons /> 
          <Plans />
    </div>
  );
}

export default App;
