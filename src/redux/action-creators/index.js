export const depositMoney = (depositAmount) => {
    return (dispatch) => {
        dispatch({
            type: 'DEPOSIT',
            payload: depositAmount
        })
    }
}