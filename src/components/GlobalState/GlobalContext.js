import React, {createContext, useReducer} from "react";
import AppReducer from "./GlobalReducer";

const initialState = {
    products: [
        {
            "_id": "1",
            "title": "Nike Shoes 01",
            "src": "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/b5167f52-cfdf-44a5-89ea-5c53557e5f3f/chaussure-air-jordan-1-low-pour-m6nkFh.png",
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 23,
            "colors": ["red", "black", "crimson", "teal"],
            "count": 1
        },
        {
            "_id": "2",
            "title": "Nike Shoes 02",
            "src": "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/9d43eaf2-4aca-4be2-9b5b-0033d8508d54/chaussure-court-vision-low-pour-2jDTs7.png",
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 19,
            "colors": ["red", "crimson", "teal"],
            "count": 1
        },
        {
            "_id": "3",
            "title": "Nike Shoes 03",
            "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4a793797-a7e0-4214-9ae6-a1235113be86/chaussure-air-max-pulse-pour-xx9t2d.png",
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 50,
            "colors": ["lightblue", "white", "crimson", "teal"],
            "count": 1
        },
        {
            "_id": "4",
            "title": "Nike Shoes 04",
            "src": "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/60d2e87c-9eaa-46a0-b9aa-0f730291262b/chaussure-air-force-1-07-pour-SqKG2H.png",
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 15,
            "colors": ["orange", "black", "crimson", "teal"],
            "count": 1
        },
        {
            "_id": "5",
            "title": "Nike Shoes 05",
            "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/90b6bf99-a9d8-4e39-bf98-f0fda1412427/chaussure-cortez-clot-pour.png",
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 10,
            "colors": ["orange", "black", "crimson", "teal"],
            "count": 1
        },
        {
            "_id": "6",
            "title": "Nike Shoes 06",
            "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f2cb3e8e-5609-4eb9-9ad3-e2e4dfb8abdd/chaussure-de-trail-pegasus-trail-4-pour-SX0z3P.png",
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 17,
            "colors": ["orange", "black", "crimson", "teal"],
            "count": 1
        }
    ],
    cart: [], 
    total: 0
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ( {children} ) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    function addCart(id){
        dispatch({
            type: "ADD_CART",
            payload: id
        })
    };

    function reduceItem(id){
        dispatch({
            type: 'REDUCTION',
            payload: id
        })
    };

    function increaseItem(id){
        dispatch({
            type: "INCREASE",
            payload: id
        })
    };

    function removeProduct(id){
        dispatch({
            type: "REMOVE_PRODUCT",
            payload: id
        })
    };

    function calculateTotal(id){
        dispatch({
            type: "GET_TOTAL",
            payload: id
        })
    };

    return(<GlobalContext.Provider value={{
        products: state.products,
        cart: state.cart,
        total:state.total,
        addCart,
        reduceItem,
        increaseItem,
        removeProduct,
        calculateTotal
    }}>
        { children }
    </GlobalContext.Provider>)
}