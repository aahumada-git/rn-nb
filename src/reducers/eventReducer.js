// DUCK STYLE REDUCER

// CONSTANTS
const GET_EVENTS = "GET_EVENTS";
const ADD_EVENT = "ADD_EVENT";
const DEL_EVENT = "DEL_EVENT";

// ACTIONS
export function getEvents(payload) {
    return { type: GET_EVENTS, payload };
}

export function addEvent(payload) {
    return { type: ADD_EVENT, payload };
}

export function delEvent(payload) {
    return { type: DEL_EVENT, payload };
}

// INITIAL STATE
const initialState = {
    data: [
        { _id: 1, text: 'CARGA DIESEL', amount: -54000 },
        { _id: 2, text: 'PEAJE LAMPA', amount: -3400 },
        { _id: 3, text: 'ALMUERZO DON PEYO', amount: -5600 },
        { _id: 4, text: 'ADELANTO', amount: 100000 },
    ],
    loading: true,
    error: null,
}

// REDUCER 
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_EVENTS:
            console.log(action.type, action.payload);
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case ADD_EVENT: {
            console.log(action.type, action.payload);
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        }
        case DEL_EVENT: {
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