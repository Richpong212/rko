import React,{useContext, useState} from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Notfound from "./pages/notFound/Notfound";
import './style/dark.css';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { productInput, userInput } from "./formSource";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode? 'app dark': 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            {/* User Routes */}
            <Route path='users'>
              <Route index element={<List />} />
              <Route path=':userId' element={<Single />} />
              <Route path='new' element={<New inputs={userInput} title='Add New User' />} />
            </Route>
            {/* End User Routes */}
            {/* Product Routes */}
            <Route path='products'>
              <Route index element={<List />} />
              <Route path=':productId' element={<Single />} />
              <Route path='new' element={<New inputs={productInput} title='Add New Product'/>} />
            </Route>
            {/* End Product Routes */}
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
