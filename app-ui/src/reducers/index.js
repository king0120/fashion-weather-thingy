function setState(state, newState) {
  return state.merge(newState);
}

export default function(state = 'SHOW_STATE', action){
  switch (action.type){
    case 'SET_STATE':
      return setState(state, action.state);
    default:
      return state;
  }
}