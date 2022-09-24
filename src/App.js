import React from "react";
import Header from "./components/Header";
import "./App.css"
import {BrowserRouter ,Route ,Routes} from "react-router-dom"
import Home from "./components/Home";
import Cart from "./components/Cart";






function App() {
  
  return (
   <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/cart"  element={<Cart/>}/>
    </Routes>
   
   </BrowserRouter>
  
   
  );
}

export default App;
