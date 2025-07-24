import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const productId in cartItems) {
        for (const size in cartItems[productId]) {
          if (cartItems[productId][size] > 0) {
            tempData.push({
              _id: productId,
              size,
              quantity: cartItems[productId][size],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="border-t pt-14 px-4 sm:px-8 md:px-10 lg:px-20">
      <div className="text-2xl mb-8 font-semibold">
        <Title text1="YOUR" text2="CART" />
      </div>

      <div className="space-y-6">
        {cartData.map((item, index) => {
          const product = products.find((p) => p._id === item._id);
          if (!product) return null;

          return (
            <div
              key={index}
              className="flex justify-between items-center border-t border-b py-4"
            >
              {/* Left Section - Image + Info */}
              <div className="flex items-center gap-4 sm:gap-6">
                <img
                  src={product.image[0]}
                  alt={product.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md"
                />
                <div className="text-sm sm:text-base text-gray-800">
                  <p className="font-medium">{product.name}</p>
                  <div className="flex items-center gap-3 mt-1 text-gray-600">
                    <span>
                      {currency}
                      {product.price}
                    </span>
                    <span className="border px-2 py-1 text-xs rounded bg-gray-100">
                      {item.size}
                    </span>
                  </div>
                </div>
              </div>

              {/* Middle - Quantity */}
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
                type="number"
                min={1}
                defaultValue={item.quantity}
                className="w-12 sm:w-16 border rounded px-2 py-1 text-center text-sm"
              />

              {/* Right - Delete */}
              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                src={assets.bin_icon}
                alt="Delete"
                className="w-5 sm:w-6 cursor-pointer ml-4"
              />
            </div>
          );
        })}
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />

          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-black text-white text-sm my-8 px-8 py-3"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
