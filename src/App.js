import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/ServicesCSS';


function App() {
  return (
    <div className='lg:px-32 bg-black'>
      <main className='bg-white overflow-hidden'>
        <Navbar />
        <Home />
        <About />
        <Services />
        <Contact />
      </main>
    </div>
  );
}

export default App;