"use client"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Cart from "@/components/Cart";
import { useState, useEffect } from 'react';

import React from 'react'

function page() {

  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== 'undefined') {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  const [showButton, setShowButton] = useState(false);
  const [showCart, setShowCart] = useState(false);

  //save cartItems to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
  localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Show button after 300px scroll
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };


  const addToCart = (item) => {
    setCartItems(prevItems => {
      const updatedCart = [...prevItems, item];
      if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
      }
    });
  };
  return (
    <>
    <Header/>
    <Navbar cartCount={cartItems.length} onCartClick={() => setShowCart(true)}/>
    {showCart ? (
        // Render Cart component and pass cart items
        <Cart cartItems={cartItems} />
      ) : (

    <main>  
            <section id="soups" className="bg-alt1">

            <div className="flex items-center justify-center gap-4 my-8">
      <div className="h-px bg-gray-900 flex-1"></div>
      <h2 className=" text-center">Soups</h2>
      <div className="h-px bg-gray-900 flex-1"></div>
    </div>
   
          <div className=" flex items-start py-4">
            <div  className="flex-1">
            <h3>Tomato Basil Soup</h3>
            <p className="desc">Fresh tomatoes blended with basil and cream.</p>
            </div>
            <div className="text-center">
            <img src="./toma-soup.jpg" width={170} height={150} className="item-image rounded" />
            <p className="price">Price: $12.00</p>
            <button  onClick={() => addToCart({ name: "Tomato Basil Soup", price: 12 })}>Add to Cart</button>
            </div>
          </div>

          <div className="flex items-start py-4">
          <div  className="flex-1">
            <h3>Chicken Corn Soup</h3>
            <p className="desc">Fresh tomatoes blended with basil and cream.</p>
            </div>
            <div className="text-center">
            <img src="./chick-corn-soup.jpeg" width={190} height={190} className="item-image rounded" />
            <p className="price">Price: $15.00</p>
            <button onClick={() => addToCart({ name: "Chicken Corn Soup", price: 15 })}>Add to Cart</button>
            </div>
          </div>
          <div className="flex items-start py-4">
          <div  className="flex-1">
            <h3>Chicken Noodle Soup</h3>
            <p className="desc">Fresh tomatoes blended with basil and cream.</p>
            </div>
            <div className="text-center">
            <img src="./chicken-noodle-soup.jpg" width={190} height={190} className="item-image rounded" />
            <p className="price">Price: $15.00</p>
            <button onClick={() => addToCart({ name: "Chicken Noodle Soup", price: 15 })}>Add to Cart</button>
            </div>
          </div>
        </section>
            
                <section id="salads" className="bg-alt2">

            <div className="flex items-center justify-center gap-4 my-8">
      <div className="h-px bg-gray-900 flex-1"></div>
      <h2 className=" text-center">Salads</h2>
      <div className="h-px bg-gray-900 flex-1"></div>
    </div>
          <div className="flex items-start py-4">
          <div  className="flex-1">
            <h3>Caeser Salad</h3>
            <p className="desc">Served with seasonal vegetables and mashed potatoes.</p>
            </div>
            <div className="text-center">
            <img src="./caeser-sal.webp" width={190} height={190} className="item-image rounded" />
            <p className="price">Price: $7.00</p>
            <button onClick={() => addToCart({ name: "Caeser Salad", price: 7 })}>Add to Cart</button></div>
          </div> 
          <div className="flex items-start py-4">
          <div  className="flex-1">
            <h3>Cobb Salad</h3>
            <p className="desc">Served with seasonal vegetables and mashed potatoes.</p></div>
            <div className="text-center">
            <img src="./cobb-sal.jpg" width={190} height={190} className="item-image rounded" />
            <p className="price">Price: $5.00</p>
            <button onClick={() => addToCart({ name: "Cobb Salad", price: 5 })}>Add to Cart</button></div>
          </div> 
          <div className="flex items-start py-4">
          <div  className="flex-1">
            <h3>Russian Salad</h3>
            <p className="desc">Served with seasonal vegetables and mashed potatoes.</p></div>
            <div className="text-center">
            <img src="./russain-sal.jpg" width={200} height={200} className="item-image rounded" />
            <p className="price">Price: $7.00</p>
            <button onClick={() => addToCart({ name: "Russian Salad", price: 7 })}>Add to Cart</button></div>
          </div> 


        </section>

        <section id="appetiser" className="bg-alt1">

            <div className="flex items-center justify-center gap-4 my-8">
      <div className="h-px bg-gray-900 flex-1"></div>
      <h2 className=" text-center">Appetisers</h2>
      <div className="h-px bg-gray-900 flex-1"></div>
    </div>
          <div  className="flex items-start py-4">
          <div  className="flex-1">
            <h3>Garlic Bread</h3>
            <p className="desc">Grilled bread with tomatoes, basil, and mozzarella.</p></div>
            <div className="text-center">
            <img src="./Garlic-Bread.webp" width={160} height={150} className="item-image  rounded" />
            <p className="price">Price: $6.00</p>
            <button onClick={() => addToCart({ name: "Garlic Bread", price: 6 })}>Add to Cart</button></div>
          </div>
          <div className="flex items-start py-4">
          <div  className="flex-1">
            <h3>Fruit Charcuterie board</h3>
            <p className="desc">Served with seasonal vegetables and mashed potatoes.</p></div>
            <div className="text-center">
            <img src="./Fruit-Charcuterie-board.jpeg" width={160} height={150} className="item-image  rounded" />
            <p className="price">Price: $12.00</p>
            <button onClick={() => addToCart({ name: "Fruit Charcuterie board", price: 12 })}>Add to Cart</button></div>
          </div> 
          <div className="flex items-start py-4">
          <div  className="flex-1">
            <h3>Sausage Cream Cheese Dip</h3>
            <p className="desc">Served with seasonal vegetables and mashed potatoes.</p></div>
            <div className="text-center">
            <img src="./sausage-dip.webp" width={170} height={170} className="item-image rounded" />
            <p className="price">Price: $12.00</p>
            <button onClick={() => addToCart({ name: "Sausage Cream Cheese Dip", price: 12 })}>Add to Cart</button></div>
          </div> 
          <div className="flex items-start py-4">
          <div  className="flex-1">
            <h3>Spring Rolls</h3>
            <p className="desc">Served with seasonal vegetables and mashed potatoes.</p></div>
            <div className="text-center">
            <img src="./spring-rolls.jpg" width={170} height={170} className="item-image  rounded" />
            <p className="price">Price: $15.00</p>
            <button onClick={() => addToCart({ name: "Spring Rolls", price: 15 })}>Add to Cart</button></div>
          </div> 
        </section>

        <section id="mains" className="bg-alt2">

            <div className="flex items-center justify-center gap-4 my-8">
      <div className="h-px bg-gray-900 flex-1"></div>
      <h2 className=" text-center">Mains</h2>
      <div className="h-px bg-gray-900 flex-1"></div>
    </div>
          <div  className="flex items-start py-4">
          <div  className="flex-1">
            <h3>Chicken Steak</h3>
            <p className="desc">Grilled steak with crispy fries and herb butter.</p></div>
            <div className="text-center">
            <img src="./chick-steak.webp" width={150} height={150} className="item-image" />
            <p className="price">Price: $25.00</p>
            <button onClick={() => addToCart({ name: "Chicken Steak", price: 25 })}>Add to Cart</button></div>
          </div>
          <div  className="flex items-start py-4">
          <div  className="flex-1">
            <h3>Lamb Chops</h3>
            <p className="desc">Grilled steak with crispy fries and herb butter.</p></div>
            <div className="text-center">
            <img src="./lamb.jpg" width={150} height={150} className="item-image" />
            <p className="price">Price: $55.00</p>
            <button onClick={() => addToCart({ name: "Lamb Chops", price: 55 })}>Add to Cart</button></div>
          </div>
          <div  className="flex items-start py-4">
          <div  className="flex-1">
            <h3>Chicken Parmesan</h3>
            <p className="desc">Grilled steak with crispy fries and herb butter.</p></div>
            <div className="text-center">
            <img src="./chi-par.jpg" width={150} height={150} className="item-image" />
            <p className="price">Price: $45.00</p>
            <button onClick={() => addToCart({ name: "Chicken Parmesan", price: 45 })}>Add to Cart</button></div>
          </div>
          <div  className="flex items-start py-4">
          <div  className="flex-1">
            <h3>Garlic Butter & Shrimp Pasta</h3>
            <p className="desc">Grilled steak with crispy fries and herb butter.</p></div>
            <div className="text-center">
            <img src="./garli-but.jpg" width={150} height={150} className="item-image" />
            <p className="price">Price: $32.00</p>
            <button onClick={() => addToCart({ name: "Garlic Butter & Shrimp Pasta", price: 32 })}>Add to Cart</button></div>
          </div>
          <div  className="flex items-start py-4">
          <div  className="flex-1">
            <h3>Vegetable Risotto</h3>
            <p className="desc">Grilled steak with crispy fries and herb butter.</p></div>
            <div className="text-center">
            <img src="./veg-ri.webp" width={150} height={150} className="item-image" />
            <p className="price">Price: $32.00</p>
            <button onClick={() => addToCart({ name: "Vegetable Risotto", price: 32 })}>Add to Cart</button></div>
          </div>

        </section>

        <section id="desserts" className="bg-alt1">

            <div className="flex items-center justify-center gap-4 my-8">
      <div className="h-px bg-gray-900 flex-1"></div>
      <h2 className=" text-center">Desserts</h2>
      <div className="h-px bg-gray-900 flex-1"></div>
    </div>
          <div className="flex items-start py-4">
          <div  className="flex-1">
            <h3>Chocolate Lava Cake</h3>
            <p className="desc">Warm chocolate cake with a gooey center.</p></div>
            <div className="text-center">
            <img src="./lavacake.jpg" width={150} height={150} className="item-image" />
            <p className="price">Price: $12.00</p>
            <button onClick={() => addToCart({ name: "Chocolate Lava Cake", price: 12 })}>Add to Cart</button></div>
          </div>
          <div  className="flex items-start py-4">
          <div  className="flex-1">
            <h3>Creme Brulee</h3>
            <p className="desc">Grilled steak with crispy fries and herb butter.</p></div>
            <div className="text-center">
            <img src="./cremebrulee.jpg" width={150} height={150} className="item-image" />
            <p className="price">Price: $18.00</p>
            <button onClick={() => addToCart({ name: "Creme Brulee", price: 18 })}>Add to Cart</button></div>
          </div>
          <div  className="flex items-start py-4">
          <div  className="flex-1">
            <h3>Tiramisu Cake</h3>
            <p className="desc">Grilled steak with crispy fries and herb butter.</p></div>
            <div className="text-center">
            <img src="./tiramisu.jpg" width={150} height={150} className="item-image" />
            <p className="price">Price: $23.00</p>
            <button onClick={() => addToCart({ name: "Tiramisu Cake", price: 23 })}>Add to Cart</button></div>
          </div>

        </section>

        <section id="refreshments" className="bg-alt2">

            <div className="flex items-center justify-center gap-4 my-8">
      <div className="h-px bg-gray-900 flex-1"></div>
      <h2 className=" text-center">Refreshments</h2>
      <div className="h-px bg-gray-900 flex-1"></div>
    </div>
          <div className="flex items-start py-4">
          <div  className="flex-1">
            <h3>Fresh Lemonade</h3>
            <p className="desc">Refreshing lemonade made with fresh lemons.</p></div>
            <div className="text-center">
            <img src="./lemonade.jpg" width={150} height={150} className="item-image" />
            <p className="price">Price: $5.00</p>
            <button onClick={() => addToCart({ name: "Fresh Lemonade", price: 5 })}>Add to Cart</button></div>
          </div>
          <div  className="flex items-start py-4">
          <div  className="flex-1">
            <h3>Berry Blast Lemonade</h3>
            <p className="desc">Grilled steak with crispy fries and herb butter.</p></div>
            <div className="text-center">
            <img src="./berrylem.jpg" width={150} height={150} className="item-image" />
            <p className="price">Price: $5.00</p>
            <button onClick={() => addToCart({ name: "Berry Blast Lemonade", price: 5 })}>Add to Cart</button></div>
          </div>
          <div  className="flex items-start py-4">
          <div  className="flex-1">
            <h3>Hibiscus Iced tea</h3>
            <p className="desc">Grilled steak with crispy fries and herb butter.</p></div>
            <div className="text-center">
            <img src="./hibiscusicedtea.jpg" width={150} height={150} className="item-image" />
            <p className="price">Price: $5.00</p>
            <button onClick={() => addToCart({ name: "Hibiscus Iced tea", price: 5 })}>Add to Cart</button></div>
          </div>
          <div  className="flex items-start py-4">
          <div  className="flex-1">
            <h3>Mint Mojito Mocktail</h3>
            <p className="desc">Grilled steak with crispy fries and herb butter.</p></div>
            <div className="text-center">
            <img src="./mojitomockt.jpg" width={150} height={150} className="item-image" />
            <p className="price">Price: $5.00</p>
            <button onClick={() => addToCart({ name: "Mint Mojito Mocktail", price: 5 })}>Add to Cart</button></div>
          </div>
          <div  className="flex items-start py-4">
          <div  className="flex-1">
            <h3>Mango Iced Tea</h3>
            <p className="desc">Grilled steak with crispy fries and herb butter.</p></div>
            <div className="text-center">
            <img src="./mangoice.jpg" width={150} height={150} className="item-image" />
            <p className="price">Price: $5.00</p>
            <button onClick={() => addToCart({ name: "Mango Iced Tea", price: 5 })}>Add to Cart</button></div>
          </div>
        </section>
      </main>

  )}
     { /*button*/}
      {showButton && (
      <button onClick={scrollToTop} className='fixed bottom-0 mb-2 mx-2 right-0 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-300'>↑
      </button>
      )}
    <Footer/>    

    </>
  )
}

export default page