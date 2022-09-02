export const depositMoney = (depositAmount) => {
    return (dispatch) => {
        dispatch({
            type: 'DEPOSIT',
            payload: depositAmount
        })
    }
}

export const withdrawMoney = (withdrawAmount) => {
    return (dispatch) => {
        dispatch({
            type: 'WITHDRAW',
            payload: withdrawAmount
        })
    }
}