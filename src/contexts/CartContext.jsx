import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (pizza) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.id === pizza.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...pizza, quantity: 1 }];
        });
    }

    const removeFromCart = (pizzaId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== pizzaId));
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    );

}