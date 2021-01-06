import ActionType from './globalActionType';

const globalState = {
    totalDuration: 1,
}

// Reducer
const rootReducer = (state = globalState, action) => {
  if(action.type === ActionType.PLUS){
    let totalDuration = 30;
    if(state.totalDuration < 30){
      totalDuration = state.totalDuration + 1;
    }
    return{
      ...state,
      totalDuration: totalDuration
    }
  }

  if(action.type === ActionType.MINUS){
    let totalDuration = 1;
    if(state.totalDuration > 1){
      totalDuration = state.totalDuration - 1
    }
    return{
      ...state,
      totalDuration: totalDuration
    }
  }
  return state;
}

export default rootReducer;