import {useContext} from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { getTotalPrice } = useContext(CartContext);
  
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Mamma Mía Pizzas</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              Carrito - Total: ${getTotalPrice().toFixed(2)}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;