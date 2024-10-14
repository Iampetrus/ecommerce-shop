// src/components/Checkout.js
import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext"; // Import CartContext
import CartItem from "./CartItem"; // Import the CartItem component
import { Link } from "react-router-dom";
const Checkout = () => {
  const { cart, total, clearCart } = useContext(CartContext); // Access cart data

  return (
    <section className="pt-32 pb-12 h-screen">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">Checkout</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div>
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <h2 className="text-lg font-semibold">Total: $ {total.toFixed(2)}</h2>
              <button onClick={clearCart} className="bg-red-500 text-white py-2 px-4">
                Clear Cart
              </button>
            </div>
            <Link
              to="/payment" // Replace with the actual payment page when ready
              className="bg-primary text-white py-2 px-4 mt-4 inline-block"
            >
              Pay
            </Link>
          </>
        )}
      </div>
    </section>
  );
};

export default Checkout;
