import React, { useEffect } from 'react';

const Cart = ({ cart, setCart, setShowCart }) => {
  // Функція для видалення товару або зменшення кількості
  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const item = prevCart.find((item) => item.product.id === id);
      if (item.quantity > 1) {
        // Якщо кількість більше 1, зменшуємо її
        return prevCart.map((item) =>
          item.product.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        // Якщо кількість 1, видаляємо товар
        return prevCart.filter((item) => item.product.id !== id);
      }
    });
  };

  // Функція для очищення кошика
  const clearCart = () => {
    if (window.confirm('Are you sure you want to clear the cart?')) {
      setCart([]);
    }
  };

  // Підрахунок загальної кількості товарів (з урахуванням quantity)
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Підрахунок загальної суми (з урахуванням quantity)
  const totalPrice = cart.reduce((total, item) => {
    const price = parseFloat(item.product.price.replace('€', '').replace(',', ''));
    return total + price * item.quantity;
  }, 0);

  const formattedTotalPrice = totalPrice.toLocaleString('en-US') + '€';

  // Закриття на Esc
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setShowCart(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [setShowCart]);

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
              <div key={item.product.id} className="cart-item">
                <img src={item.product.image} alt="Product" />
                <div className="cart-item-details">
                  <p>{item.product.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <button onClick={() => removeFromCart(item.product.id)}>Remove</button>
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