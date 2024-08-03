import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import MensCollection from './components/MensCollection';
import NewArrival from './components/NewArrival';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main className='main'>
        <Carousel/>
        <NewArrival/>
        {<MensCollection/>}
      </main>
    </div>
  );
}

export default App;
