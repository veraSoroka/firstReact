// import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import {createBrowserRouter,RouterProvider, Route, Routes} from "react-router-dom";
import data from "./Components/Data/data"
import BookProduct from "./Components/Main/Books/ProductPage/BookProduct";
import MagazineProduct from "./Components/Main/Magazines/ProductPage/MagazineProduct";
import About from "./Components/Main/About us/About";
import Slider from "./Components/Slider/Slider";
import main from "./Components/Main/Main";
import React, {useEffect, useState} from "react";
import {Provider} from "react-redux"
import {store} from "./Components/Redux";
import CartPage from "./Components/CartPage/CartPage";


function App() {
  return (
      <Provider store={store}>
          <div>
            <Header data={data.header}/>
              <Routes>
                <Route path="/book-product/:productId" element={<BookProduct data={data.main.Books}/>}/>
                <Route path="/magazine-product/:productId" element={<MagazineProduct data={data.main.Magazines}/>}/>
                 <Route path="/stuff-product/:productId" element={<MagazineProduct data={data.main.Stuff}/>}/>
                <Route path="/home" element={<Main data={data.main}/>}/>
                <Route path="/about" element={<About data={data.about}/>}/>
                <Route path="/cart" element={<CartPage/>}/>
             </Routes>
             <Footer data={data.footer}/>
            </div>
      </Provider>
  );
}

export default App;




// {/*<RouterProvider router={router} />*/}
