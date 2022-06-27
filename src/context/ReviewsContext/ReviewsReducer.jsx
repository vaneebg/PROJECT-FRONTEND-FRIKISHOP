const reviews =(state,action)=>{
    switch (action.type) {
        
        case 'GET_REVIEW_BY_ID':
            return{
                ...state,
                reviews:action.payload
            }
        default:
            return state;
    }
}

export default reviews