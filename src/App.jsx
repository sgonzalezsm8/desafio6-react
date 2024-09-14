import { PizzaProvider } from './contexts/PizzaContext';
import { CartProvider } from './contexts/CartContext';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import Cart from './views/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <PizzaProvider>
      <CartProvider>
        <Router>
          <Header />
          <Navbar />
          <main className="py-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </CartProvider>
    </PizzaProvider>
  );
}

export default App;