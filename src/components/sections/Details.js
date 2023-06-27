import React, {useState, useContext, useEffect} from "react";
import { GlobalContext } from "../GlobalState/GlobalContext";
import { Link, useParams } from "react-router-dom";
import Colors from '../sections/Colors';
import '../css/Details.css';

export default function Details(){
    const {products} = useContext(GlobalContext);
    const {addCart} = useContext(GlobalContext);
    const [product, setProduct] = useState([]);

    const productID = useParams();
    
    useEffect(()=>{
        getProduct();
    }, [])


    const getProduct = () => {
        const getProd = products.filter((product) => product._id === productID.id);
        setProduct(getProd);
    }


    return(
        <>
                {
                    product.map(item =>(
                        <div className="details" key={item._id}>
                            <img src={item.src} alt=""/>
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>${item.price}</span>
                                </div>
                                <Colors colors={item.colors}/>
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <Link to="/cart" className="cart" onClick={() => addCart(item._id)}>
                                    Add to cart
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </>
    );
}