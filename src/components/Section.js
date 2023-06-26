import React from "react";
import Cart from './sections/Cart';
import Product from './sections/Products'
import Payment from './sections/Payment';
import Detail from './sections/Details';
import { Routes, Route } from "react-router-dom";

const Section = () => {
    return(
            <Routes>
                <Route path="/" Component={Product}/>
                <Route path="/product" Component={Product}/>
                <Route path="/product/:id" Component={Detail}/>
                <Route path="/cart" Component={Cart}/>
                <Route path="/payment" Component={Payment}/>
            </Routes>
    );
}

export default Section;