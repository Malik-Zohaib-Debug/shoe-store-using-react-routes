import React, {useContext} from "react";
import { GlobalContext } from "../GlobalState/GlobalContext";
import { Link } from "react-router-dom";
import '../css/Products.css';

export default function Product(){

    const {products} = useContext(GlobalContext);

    return(
        <div id="product">
            {
                products.map(product => (
                    <div className="card" key={product._id}>
                        <Link to={`/product/${product._id}`}>
                            <img src={product.src} alt="" />
                        </Link>
                        <div className="content">
                            <h3>
                                <Link to={`/product/${product._id}`}>{product.title}</Link>
                            </h3>
                            <span>${product.price}</span>
                            <p>{product.description}</p>
                            <button >Add to cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}