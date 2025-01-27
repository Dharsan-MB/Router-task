import { useContext } from "react";
import cartContext from "../contexts/cartcontext";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useContext(cartContext);

  const totalPrice = cartItems.reduce(
    (value, index) => value + index.price * index.quantity,
    0
  );

  const discountPercentage = 10;
  const discountAmount = (totalPrice * discountPercentage) / 100;
  const amountPayable = (totalPrice - discountAmount).toFixed(2);

  return (
    <div className="py-16 my-5 mx-10">
      <div className="bg-[#F7F7F2] py-3 px-2">
        <div className="bg-[#1168eb] text-white text-2xl py-2 px-2 rounded-lg">
          <h1>Items in Cart</h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-5 text-xl text-blue-600">
            Your FastMart Cart is empty.
          </div>
        ) : (
          <>
            <div className="hidden sm:flex flex-row justify-evenly px-5 py-3 items-center">
              <div className="flex items-center sm:w-[42%]">
                <h1>Product</h1>
              </div>
              <div className="flex items-center sm:w-[25%]">
                <p>Price</p>
              </div>
              <div className="flex items-center sm:w-[25%]">
                <p>Quantity</p>
              </div>
              <div className="flex items-center sm:w-[25%] ">
                <p>Billing Amount</p>
              </div>
              <div className="flex items-center sm:w-[15%]">
                <p>Action</p>
              </div>
            </div>
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white mb-2 rounded-lg">
                <div className="flex flex-col sm:flex-row justify-between px-3 py-3 items-center sm:items-start">
                  <div className="flex flex-row items-center mb-2 sm:mb-0 sm:w-[35%]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 mr-3"
                    />
                    <h6 className="text-base sm:text-lg">{item.title}</h6>
                  </div>

                  <p className="mb-2 sm:mb-0 sm:w-[20%] text-base sm:text-lg">
                    ₹ {item.price}
                  </p>

                  <div className="flex flex-row items-center mb-2 sm:mb-0 sm:w-[25%]">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="border border-gray-400 px-2 text-2xl rounded-md"
                    >
                      +
                    </button>
                    <p className="mx-2">{item.quantity}</p>
                    <button
                      onClick={() =>
                        item.quantity > 1
                          ? updateQuantity(item.id, item.quantity - 1)
                          : removeFromCart(item.id)
                      }
                      className="border border-gray-400 px-2 text-2xl rounded-md"
                    >
                      -
                    </button>
                  </div>

                  <h1 className="sm:w-[20%] text-base sm:text-lg">
                    ₹ {item.price * item.quantity}
                  </h1>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md text-sm sm:w-[10%]"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {cartItems.length > 0 && (
              <div className="flex flex-col justify-center px-4 sm:px-16 py-5">
                <div className="py-5">
                  <hr className="border-t-2 border-black w-[90%] mx-auto"></hr>
                </div>

                <div className="flex flex-col sm:flex-row justify-end items-center mb-4">
                  <h1 className="font-bold text-lg text-center sm:text-left">
                    Total Value:
                  </h1>
                  <span className="text-lg font-bold text-center sm:text-right">
                    &nbsp; ₹ {totalPrice}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row justify-end items-center mb-4">
                  <h1 className="font-bold text-lg text-center sm:text-left">
                    Added Discount:
                  </h1>
                  <span className="text-lg font-bold text-center sm:text-right">
                    &nbsp; -10%
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row justify-end items-center">
                  <h1 className="font-bold text-lg sm:text-xl text-center sm:text-left">
                    Billed Amount:
                  </h1>
                  <span className="text-[#27e227] text-2xl sm:text-4xl font-bold text-center sm:text-right">
                    &nbsp; ₹ {amountPayable}
                  </span>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
