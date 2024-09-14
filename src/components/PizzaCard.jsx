import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';


const PizzaCard = ({ pizza }) => {
    const { addToCart } = useContext(CartContext);

    return (
      <div className="card h-100">
        {/* Imagen de la pizza */}
        <img src={pizza.img} className="card-img-top" alt={pizza.name} />
  
        {/* Contenido de la card */}
        <div className="card-body">
          <h5 className="card-title">{pizza.name}</h5>
                  
          {/* Ingredientes */}
          <h6>Ingredientes:</h6>
          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
  
          {/* Precio y botón para añadir al carrito */}
          <p className="card-text">Precio: ${pizza.price}</p>
          <button className="btn btn-primary" onClick={() => addToCart(pizza)}>Añadir al carrito</button>
          
        </div>
      </div>
    );
  };
  
  export default PizzaCard;