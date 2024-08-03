import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import CardsList from './components/CardsList';
import NewArrival from './components/NewArrival';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main className='main'>
        <Carousel/>
        <NewArrival/>
        <CardsList/>
      </main>
    </div>
  );
}

export default App;
