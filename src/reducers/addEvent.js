export default function (state = {}, action) {
    switch (action.type) {
        case "ADD_EVENT": {
            console.log(action.type, action.payload);
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        }
        default:
            return state;
    }
}