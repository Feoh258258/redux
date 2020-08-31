export function createStore(rootReducer, initialState) {
  let mystate = rootReducer(initialState, {type: '_INIT_'})
  const subscribers = []

  return {
    //action === {type: ' INCREMENT'}
dispatch(action){
  mystate = rootReducer(mystate, action)
  subscribers.forEach(sub => sub())
},

subscribe(callback) {
  subscribers.push(callback)
},

getState() {
  return mystate
}

  }
}