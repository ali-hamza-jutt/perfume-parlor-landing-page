import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import NewArrival from './components/NewArrival';
import ProductShowcase from './components/ProjectShowcase';
import MensCollection from './components/MensCollection';
import WomensCollection from './components/WomensCollection';
import CategoryProducts from './components/CategoryProducts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <main className='main'>
        <Carousel/>
        <NewArrival/>
        <ProductShowcase/>
        <CategoryProducts/>
        {<MensCollection/>}
        {<WomensCollection/>}

      </main>
      <Footer/>
    </div>
  );
}

export default App;
