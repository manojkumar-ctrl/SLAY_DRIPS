import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  const subtotal = getCartAmount();
  const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

  return (
    <div className="w-full max-w-md p-4 rounded-md shadow-sm border text-sm text-gray-700 bg-white">
      <div className="text-xl mb-4 font-semibold">
        <Title text1="CART" text2="TOTALS" />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>{currency}{subtotal}.00</p>
        </div>

        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>{currency}{delivery_fee}.00</p>
        </div>

        <hr />

        <div className="flex justify-between font-semibold">
          <p>Total</p>
          <p>{currency}{total}.00</p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
