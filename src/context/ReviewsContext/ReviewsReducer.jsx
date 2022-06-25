const reviews =(state,action)=>{
    switch (action.type) {
        case 'GET_ALL_REVIEWS':
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