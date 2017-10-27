const initialState = {
  count: 0,
  color: 'black'
}

const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TO_COUNTER':
      return {...state, count: state.count + 1}
    case 'SUBTRACT_TO_COUNTER':
      return {...state, count: state.count - 1}
    case 'DOUBLE_COUNTER':
      return {...state, count: state.count * 2}
    case 'ZERO_COUNTER':
      return {...state, count: 0}
    case 'SET_RED':
      return {...state, color: 'red'}
    case 'SET_GREEN':
      return {...state, color: 'green'}
    case 'SET_BLACK':
      return {...state, color: 'black'}
    default:
      return state
  }
}

export default counterReducer
