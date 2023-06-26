const AppReducer = (state, action) => {
    switch(action.type){
        case 'ADD_CART':
            const {products, cart} = state;
            const productID = action.payload;
            const check = cart.every(item => item._id !== productID);
            
            if(check){
                const data = products.filter(product => product._id === productID);
                return{
                    ...state,
                    cart: [...cart, ...data]
                };
            } 
            else {
                alert("The product has been added to cart");
                return state;
            }
        
        case 'REMOVE_PRODUCT':
            const removeID = action.payload;
            const updatedCartRemove = state.cart.filer(item => item._id !== removeID); 
            return{
                ...state,
                cart: updatedCartRemove
            };

        case 'REDUCTION':
            return{

            }
        case 'INCREASE':
            return{

            }
        case 'GET_TOTAL':
            return{

            }
        default:
            return state;
    }
}

export default AppReducer;