import { useEffect, useState, useContext } from "react";
import cartContext from "../contexts/cartcontext";

const LandingPage = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, cartItems, removeFromCart } = useContext(cartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        // console.log(response, ".then1");
        return response.json();
      })
      .then((data) => {
        console.log(data, ".then2");
        setProducts(data);
      })
      .catch((error) => console.log("error in fetching", error));
  }, []);

  function handleCart(product) {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  }

  return (
    <div className="py-16 ">
      <div className="bg-[#a9b6ff] px- py-10">
        <div className="flex flex-wrap  bg-[#a9b6ff]  justify-center">
          {products.map((product) => {
            const isInCart = cartItems.some((item) => item.id === product.id);
            return (
              <div
                key={product.id}
                className="w-full sm:w-[45%] md:w-[30%] lg:w-[23%] border-2 bg-white p-4 flex flex-col min-h-[100px]"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover"
                />
                <div className="flex flex-col justify-between flex-grow text-center space-y-3 mt-3">
                  <h1 className="font-bold text-2xl overflow-auto">
                    {product.title}
                  </h1>
                  <p className="text-justify overflow-auto">
                    {product.description} 
                  </p>
                  <p className="text-lg font-medium">₹ {product.price}</p>
                  <button
                    onClick={() => handleCart(product)}
                    className={`border-2 p-2 rounded-xl cursor-pointer hover:bg-[#00a2ff] ${
                      isInCart
                        ? "bg-[#ff4c4c] text-white"
                        : "bg-[#40cc40] text-white"
                    }`}
                  >
                    {isInCart ? "Remove" : "Add to cart"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
