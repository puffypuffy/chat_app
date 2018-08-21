const ADD_ONE = 'addONe'
const MINUS_ONE = 'minusOne'



//Reducer
export function counter(state = 0, action) {
  switch (action.type) {
    case ADD_ONE:
      return state + 1
    case MINUS_ONE:
      return state - 1
    default:
      return 10
  }
}


//Action Creater
export function addOne (){
  return {type:ADD_ONE}
}

export function minusOne (){
  return {type:MINUS_ONE}
}

export function addOneAsync (){
  return dispatch => {
    setTimeout(() => {
      dispatch(addOne())
    }, 2000)
  }
}