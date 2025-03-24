import React, { useEffect } from 'react';

const Cart = ({ cart, setCart, setShowCart }) => {
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) => {
      const item = prevCart.find((item) => item.product.id === id);
      if (item.quantity > 1) {
        return prevCart.map((item) =>
          item.product.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevCart.filter((item) => item.product.id !== id);
      }
    });
  };

  const clearCart = () => {
    if (window.confirm('Are you sure you want to clear the cart?')) {
      setCart([]);
    }
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cart.reduce((total, item) => {
    const price = parseFloat(item.product.price.replace('€', '').replace(',', ''));
    return total + price * item.quantity;
  }, 0);

  const formattedTotalPrice = totalPrice.toLocaleString('en-US') + '€';

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setShowCart(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [setShowCart]);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('cart-popup-overlay')) {
      setShowCart(false);
    }
  };

  return (
    <div className="cart-popup-overlay" onClick={handleOverlayClick}>
      <div className="cart-popup">
        <h2>Cart ({totalItems})</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.product.id} className="cart-item">
                <img src={item.product.image} alt={item.product.name} />
                <div className="cart-item-details">
                  <h3>{item.product.name}</h3>
                  <p>{item.product.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.product.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.product.id)}>+</button>
                  </div>
                </div>
              </div>
            ))}
            <div className="cart-summary">
              <p>Total Items: {totalItems}</p>
              <p>Total Price: {formattedTotalPrice}</p>
              <button className="clear-cart-button" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </>
        )}
        <button onClick={() => setShowCart(false)}>Close</button>
      </div>
    </div>
  );
};

export default Cart;