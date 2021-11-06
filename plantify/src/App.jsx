import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import React from "react";
import Checkoutform from "./pages/Checkoutform";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/item/:id" children={<Product />} />
          <Route path="/checkout">
            <Checkoutform />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
