import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import cartContext from "../contexts/cartcontext";

const Navbar = () => {
  const navigate = useNavigate();
  const { cartLength } = useContext(cartContext);
  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="flex flex-row justify-between items-center bg-[#a9b6ff] py-2 px-5 font-bold">
          <p className="font-extrabold text-2xl">FastMart🛒</p>
          <div className="bg-[#8e9fff] p-4">
            <button onClick={() => navigate("/")}>Home</button>
            &nbsp; &nbsp;
            <button onClick={() => navigate("/cart")}>Checkout</button>
          </div>
          <div
            onClick={() => navigate("/cart")}
            className="flex flex-row space-x-1"
          >
            <span className="material-symbols-outlined text-3xl font-bold cursor-pointer">
              shopping_cart
            </span>
            <p className="cursor-pointer">{cartLength}</p>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
