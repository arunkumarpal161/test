const initialState = {
    feeType: '',
    feeGroups: '',
    test: ''
}
export default function reducer(state = initialState, action) {

    switch (action.type) {
        case 'GET_FEE_TYPE_DATA_SUCCEEDED':
            return {
                ...state,
                feeType: action.payload.response
            };
        default:
            return state;
    }
}