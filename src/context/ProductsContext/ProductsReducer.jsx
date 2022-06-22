const products = (state, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                products: action.payload,
            };
        case "ADD_PRODUCT":
            return {
                  ...state,
                  products: [action.payload, ...state.products],
            };
        case 'ADD_CART':
            return{
                ...state,
                cart:[action.payload, ...state.cart],
            };
            case 'ADD_FAVS':
                return{
                    ...state,
                    favs:[action.payload, ...state.favs],
                };
        case 'CLEAR_CART':
            return{
                ...state,
                cart:[]
            };
            case 'CLEAR_FAVS':
            return{
                ...state,
                favs:[]
            }
        case 'CLEAR_ONE':
            return{
                ...state,
                cart:state.cart.filter((produ)=>produ !== action.payload)
            }
        case 'CLEAR_ONE_FAV':
            return{
                 ...state,
                favs:state.favs.filter((fav)=>fav !== action.payload)
                }
        default:
            return state;
    }
};
export default products;