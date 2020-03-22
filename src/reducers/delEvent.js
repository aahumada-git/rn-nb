export default function (state = {}, action) {
    switch (action.type) {
        case "DEL_EVENT": {
            console.log(action.type, action.payload);
            return {
                ...state,
                data: state.data.filter(data => data._id !== action.payload)
            }
        }
        default:
            return state;
    }
}