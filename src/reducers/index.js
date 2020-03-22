import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import eventReducer from './eventReducer';
// import getEvent from './getEvent';
// import addEvent from './addEvent';
// import delEvent from './delEvent';

export default combineReducers({
    eventReducer: eventReducer,
    // getEvents: getEvents,
    // addEvent:  addEvent,
    // delEvent:  delEvent,
    form: formReducer
})
