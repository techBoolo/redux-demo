// define initial state
const initialState = { count: 0, more: 'can have more states' }

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
const reset = { type: 'reset' }
const incBy5 = { type: 'incBy5', value: 5 }



