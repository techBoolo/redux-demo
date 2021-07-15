const { createStore } = require('redux');

// define initial state
const initialState = { count: 0, more: 'can have more properties' }

// actions are objects with 'type' field
const inc = { type: 'inc' }
const dec = { type: 'dec' }
// actions can also be created with action creator function
const reset = () => { 
  return {type: 'reset' }
}
const incByN = (N) => {
  return { type: 'incByN', value: N }
}

// define a reducer which has two arguments 'state' and 'action'
const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'inc':
      return { ...state, count: state.count + 1 }
    case 'dec':
      return { ...state, count: state.count - 1 }
    case 'reset':
      return { ...state, count: 0 }
    case 'incByN':
      return { ...state, count: state.count + action.value }
    default:
      return state
  }
}

// create a store that contains our global state
const store = createStore(reducer);

// get the state of our initial state of the store
console.log(store.getState());

// run every subscriber functions when any state changes, can be used to update the ui
const unsubscribe = store.subscribe(() => {
  console.log(`count is : ${ store.getState().count }`)
})

// dispatch the action to the store
store.dispatch(inc);
store.dispatch(inc);
store.dispatch(inc);
store.dispatch(dec);
store.dispatch(reset());
store.dispatch(dec);
store.dispatch(incByN(8));
console.log(store.getState());
unsubscribe()
// after unsubscribing subsequent changes are not logged
// to log we have to subscribe or use getState()
store.dispatch(dec);
store.dispatch(incByN(8));
console.log(store.getState());
