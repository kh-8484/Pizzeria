import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Product from "./components/Products";
import { productData, productDataTwo } from "./components/Products/data";
import { productData1, productData2 } from "./components/Dessert/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Dessert from "./components/Dessert";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
      <Switch>
        <Route exact path="/">
          <GlobalStyle />
          <Hero />
          <Product heading="Choose your favorite" data={productData} />
          <Feature />
          <Product heading="Sweet Treats for You" data={productDataTwo} />
          <Footer />
        </Route>
        <Route path="/pizza">
          <GlobalStyle />
          <Navbar toggle={toggle} />
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Dessert heading="Choose your favorite" data={productData1} />
          <Footer />
        </Route>
        <Route path="/dessert">
          <GlobalStyle />
          <Navbar toggle={toggle} />
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Dessert heading="Sweet Treats for You" data={productData2} />
          <Footer />
        </Route>
        <Route path="/checkout">
          <GlobalStyle />
          <Navbar toggle={toggle} />
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Checkout />
          <Footer />
        </Route>
        <Route path="/signin">
          <GlobalStyle />
          <Login />
        </Route>
        {/* <Route path="/order">
          alert(basket.length + "Item has been ordered sucessfullly");
          <Redirect to="/" />
        </Route> */}
      </Switch>
    </>
  );
}

export default App;
