const { createStore } = require('redux');

// define initial state
const initialState = { count: 0, more: 'can have more properties' }

// define a reducer which has two arguments 'state' and 'action'
const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'inc':
      return { ...state, count: state.count + 1 }
    case 'dec':
      return { ...state, count: state.count - 1 }
    case 'reset':
      return { ...state, count: 0 }
    case 'incBy5':
      return { ...state, count: state.count + action.value }
    default:
      return state
  }
}

// actions are objects with 'type' field
const inc = { type: 'inc' }
const dec = { type: 'dec' }

// actions can also be created with action creator function
const reset = () => { 
  return {type: 'reset' }
}
const incBy5 = () => {
  return { type: 'incBy5', value: 5 }
}

// create a store that contains our global state
const store = createStore(reducer);

// run every subscriber functions when any state changes, can be used to update the ui
store.subscribe(() => {
  console.log(`count is : ${ store.getState().count }`)
})

// get the state of our store
console.log(store.getState());
// dispatch the action to the store
store.dispatch(inc);
store.dispatch(inc);
store.dispatch(inc);
store.dispatch(dec);
store.dispatch(reset());
store.dispatch(dec);
store.dispatch(incBy5());
console.log(store.getState());

