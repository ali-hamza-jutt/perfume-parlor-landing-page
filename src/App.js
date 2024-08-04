import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import NewArrival from './components/NewArrival';
import ProductShowcase from './components/ProjectShowcase';
import MensCollection from './components/MensCollection';
import WomensCollection from './components/WomensCollection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main className='main'>
        <Carousel/>
        <ProductShowcase/>
        <NewArrival/>
        {<MensCollection/>}
        {<WomensCollection/>}

      </main>
    </div>
  );
}

export default App;
