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

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_EVENTS":
      console.log(action.type, action.payload);
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    default:
      return state;
  }
}