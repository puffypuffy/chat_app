import {createStore} from 'redux'

//Reducer
function counter (state = 0, action) {
  switch (action.type) {
    case 'addOne':
      return state + 1
    case 'minusOne':
      return state - 1
    default:
      return 10
  }
}


//1. Create Store through Reducer

const store = createStore(counter)

const init = store.getState()
console.log(`Initial Number: ${init}`)


//3. Listern state change through subscribe(), has to sit before 2. Dispacth action
function listener() {
  const current = store.getState()
  console.log(`Current Number: ${current}`)
}
store.subscribe(listener)


//2. Dispatch action, to change state

store.dispatch({type : 'addOne'})
store.dispatch({ type: 'addOne' })
store.dispatch({ type: 'addOne' })
store.dispatch({ type: 'minusOne' })


