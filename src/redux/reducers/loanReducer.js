const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'TAKE':
            return state + action.payload;

        case 'REPAY':
            return state - action.payload;
    
        default:
            return state;
    }
}

export default reducer;