import React from 'react';

const Cart = ({ cart, setCart, setShowCart }) => {
  // Функція для видалення одного товару
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Функція для очищення кошика
  const clearCart = () => {
    if (window.confirm('Are you sure you want to clear the cart?')) {
      setCart([]);
    }
  };

  // Підрахунок загальної кількості товарів
  const totalItems = cart.length;

  // Підрахунок загальної суми
  const totalPrice = cart.reduce((total, item) => {
    const price = parseFloat(item.price.replace('€', '').replace(',', ''));
    return total + price;
  }, 0);

  const formattedTotalPrice = totalPrice.toLocaleString('en-US') + '€';

  // Закриття попапу при кліку поза вікном
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
            {/* Список товарів */}
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt="Product" />
                <p>{item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
            {/* Загальна інформація */}
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