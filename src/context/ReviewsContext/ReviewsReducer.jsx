const reviews =(state,action)=>{
    switch (action.type) {
        
        case 'GET_REVIEW_BY_ID':
            return{
                ...state,
                reviews:action.payload,
                id:action.payload2
            }
        case 'CREATE_REVIEW':
            return{
                ...state,
                reviews:[action.payload,...state.reviews]
            }
        case 'MODIFY_REVIEW':
            return{
                ...state,
                review:action.payload
            }
        default:
            return state;
    }
}

export default reviews