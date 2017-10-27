const zeroOnTenAbs = middlewareAPI => next => action => {
  next(action)
  const state = middlewareAPI.getState().counter
  if(Math.abs(state.count) === 10) {
    middlewareAPI.dispatch({type: 'ZERO_COUNTER'})
  }
}

const setRedOnNegative = middlewareAPI => next => action => {
  next(action)
  const state = middlewareAPI.getState().counter
  if(state.count < 0 && state.color !== 'red') {
    middlewareAPI.dispatch({type: 'SET_RED'})
  }
}

const setGreenOnPositive = middlewareAPI => next => action => {
  next(action)
  const state = middlewareAPI.getState().counter
  if(state.count > 0 && state.color !== 'green') {
    middlewareAPI.dispatch({type: 'SET_GREEN'})
  }
}

const setBlackOnZero = middlewareAPI => next => action => {
  next(action)
  const state = middlewareAPI.getState().counter
  if(state.count === 0 && state.color !== 'black') {
    middlewareAPI.dispatch({type: 'SET_BLACK'})
  }
}

const middlewares = [
  zeroOnTenAbs,
  setRedOnNegative,
  setGreenOnPositive,
  setBlackOnZero,
]

export default middlewares
