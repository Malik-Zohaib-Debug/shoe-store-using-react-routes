import React, { useContext, useEffect } from 'react';
import {GlobalContext} from '../GlobalState/GlobalContext';
import { Link } from 'react-router-dom';
import Colors from './Colors';
import '../css/Details.css';
import '../css/Cart.css';

const Cart = () => {
  const { cart, increaseItem, reduceItem, removeProduct, total, calculateTotal } = useContext(GlobalContext);

    console.log(total);

  useEffect(() => {
    calculateTotal();
  }, []);

  if (cart.length === 0) {
    return <h2 style={{ textAlign: 'center' }}>No products</h2>;
  } else {
    return (
      <>
        {cart.map((item) => (
          <div className="details cart" key={item._id}>
            <img src={item.src} alt="" />
            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span>${item.price * item.count}</span>
              </div>
              <Colors colors={item.colors} />
              <p>{item.description}</p>
              <p>{item.content}</p>
              <div className="amount">
                <button className="count" onClick={() => reduceItem(item._id)}>
                  -
                </button>
                <span>{item.count}</span>
                <button className="count" onClick={() => increaseItem(item._id)}>
                  +
                </button>
              </div>
            </div>
            <div className="delete" onClick={() => removeProduct(item._id)}>
              X
            </div>
          </div>
        ))}
        <div className="total">
          <Link to="/payment">Payment</Link>
          <h3>Total: ${total}</h3>
        </div>
      </>
    );
  }
};

export default Cart;