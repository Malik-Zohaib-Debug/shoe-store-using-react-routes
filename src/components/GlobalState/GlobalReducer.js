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
            const updatedCartRemove = state.cart.filter(item => item._id !== removeID); 
            return{
                ...state,
                cart: updatedCartRemove
            };

        case 'REDUCTION': 
            const reductionID = action.payload;
            const updatedCartReduction = state.cart.map(item => {
                if(item._id === reductionID){
                    return{
                        ...item,
                        count: item.count === 1 ? 1 : item.count - 1
                    };
                }
                return item;
            })
            return{
                ...state,
                cart: updatedCartReduction
            }
        case 'INCREASE':
            const increaseId = action.payload.id;
            const updatedCartIncrease = state.cart.map(item => {
                if (item._id === increaseId) {
                return {
                    ...item,
                    count: item.count + 1
                    };
                }
                return item;
            });
            return {
                ...state,
                cart: updatedCartIncrease
            };
        case 'GET_TOTAL':
            const total = state.cart.reduce((prev, item) => {
                return prev + item.price * item.count;
            }, 0);
            return {
                ...state,
                total: total
            };

        default:
            return state;
    }
}

export default AppReducer;