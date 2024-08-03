import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main className='main'>
        <Carousel/>
      </main>
    </div>
  );
}

export default App;
