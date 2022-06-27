const reviews =(state,action)=>{
    switch (action.type) {
        
        case 'GET_REVIEW_BY_ID':
            return{
                ...state,
                reviews:action.payload
            }
        case 'CREATE_REVIEW':
            return{
                ...state,
                reviews:[action.payload,...state.reviews]
            }
        default:
            return state;
    }
}

export default reviews