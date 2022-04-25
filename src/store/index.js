import {createStore} from 'redux';


const reducerFn = (state = {logged: 0}, action) => {
    return state;

}



const store = createStore(reducerFn);
export default store;