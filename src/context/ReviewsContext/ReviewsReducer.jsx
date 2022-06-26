const reviews =(state,action)=>{
    switch (action.type) {
        case 'GET_ALL_REVIEWS':
            return{
                ...state,
                reviews:action.payload
            }
        default:
            return state;
    }
}

export default reviews