import React, {useContext} from "react";
import { GlobalContext } from "../GlobalState/GlobalContext";

export default function Product(){

    const {products} = useContext(GlobalContext);

    console.log(products);

    return(
        <div>
            Product
        </div>
    );
}