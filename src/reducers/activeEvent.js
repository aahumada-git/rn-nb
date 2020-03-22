export default function (state = null, action) {
    switch (action.type) {
        case "Event_Selected": return action.payload;
            break;
    }
    return state;
}