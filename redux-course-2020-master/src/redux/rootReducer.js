export function rootReducer(mystate, action) {
  if (action.type === 'INCREMENT'){
    return mystate + 1
  }else if (action.type === 'DECREMENT'){
    return mystate - 1
  }

  return mystate
}