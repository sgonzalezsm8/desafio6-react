import  {useContext} from 'react';
import {CartContext} from '../contexts/CartContext';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cart, getTotalPrice } = useContext(CartContext);

  return (
    <div className="container">
      <h2 className="my-4">Tu Carrito</h2>
      {cart.length > 0 ? (
        <>
          <ul className="list-group mb-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
          <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
        </>
      ) : (
        <p>Tu carrito está vacío</p>
      )}
    </div>
  );
};

export default Cart;