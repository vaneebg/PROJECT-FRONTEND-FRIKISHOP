const categories = (state, action) => {
    switch (action.type) {
        case "GET_ALL_CAT":
            return {
                ...state,
                categories: action.payload,
            };
       
     
        default:
            return state;
    }
};
export default categories;