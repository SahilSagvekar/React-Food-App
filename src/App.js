import './App.css';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import HeadlineCards from './components/HeadlineCards.jsx';
import Food from './components/Food.jsx';
import Category from './components/Category.jsx';

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <HeadlineCards />
    <Food />
    <Category />
    </>
  );
}

export default App;
