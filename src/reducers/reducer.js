import { createStore } from 'redux';

const initialState = {
  number: 0
}

const reducerCounter = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        number: state.number + 1
      }
     default:
       return state; 
  }
}

const store = createStore(reducerCounter);

export default store;