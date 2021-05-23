import React, { useState } from 'react';
import Nav from './components/Nav';
import ItemListContainer from './pages/ItemListContainer';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ShoppingCart from './pages/ShoppingCart';
import { initialState } from './assets/state';

function App() {

  const [items, setItems] = useState(initialState.items);
  const [cartItems, setCartItems] = useState(initialState.cartItems);

  const removeFromCart = (itemId) => { // 장바구니 제거
    setCartItems(cartItems.filter((el) => el.itemId !== itemId))
  }


  const addToCart = (itemId) => { // 장바구니 추가
    const found = cartItems.filter((el) => el.itemId === itemId)[0]
    if(found) {
      console.log('found')
      setQuantity(itemId, found.quantity + 1)
    } else {
      console.log('add new')
      setCartItems([...cartItems, {
        itemId,
        quantity: 1
      }])
    }
  }

  const setQuantity = (itemId, quantity) => { // 수량
    const found = cartItems.filter((el) => el.itemId === itemId)[0]
    const idx = cartItems.indexOf(found)
    const cartItem = {
      itemId,
      quantity
    }

    setCartItems([
      ...cartItems.slice(0, idx),
      cartItem,
      ...cartItems.slice(idx + 1)
    ])
  }

  return (
    <Router>
      <Nav cartItems={cartItems} />
      <Switch>
        <Route exact={true} path="/">
          <ItemListContainer items={items} handleAdd={addToCart} />
        </Route>
        <Route path="/shoppingcart">
          <ShoppingCart 
          cartItems={cartItems} 
          items={items}
          handleDelete={removeFromCart}
          handleQuantityChange={setQuantity}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
