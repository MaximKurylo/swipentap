import React from 'react';

const Cart = ({ cart, setCart, setShowCart }) => {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart
    .reduce((total, item) => {
      const price = parseFloat(item.product.price.replace(',', '.')); // Перетворюємо ціну в число
      return total + price * item.quantity;
    }, 0)
    .toFixed(2);

  const handleQuantityChange = (itemId, delta) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) =>
          item.product.id === itemId
            ? { ...item, quantity: item.quantity + delta } // Зменшуємо або збільшуємо кількість
            : item
        )
        .filter((item) => item.quantity > 0); // Видаляємо товар, якщо кількість <= 0
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="cart-popup">
      <div className="cart-header">
        <h2>Cart ({totalItems})</h2>
        <button onClick={() => setShowCart(false)} className="cart-close-button">
          ✕
        </button>
      </div>
      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.product.id} className="cart-item">
                <img src={item.product.image} alt={item.product.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.product.name}</h3>
                  <p className="cart-item-price">{item.product.price}</p>
                  <div className="cart-item-quantity">
                    <button onClick={() => handleQuantityChange(item.product.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.product.id, 1)}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <div className="cart-summary-details">
              <p>Total Items: <span>{totalItems}</span></p>
              <p>Total Price: <span>{totalPrice}€</span></p>
            </div>
            <div className="cart-actions">
              <button onClick={clearCart} className="cart-clear-button">Clear Cart</button>
              <button onClick={() => setShowCart(false)} className="cart-close-button">Close</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;