function ReducerFunc(state, action) {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return [action.payload, ...state];
    case "DELETE_TRANSACTION":
      return state.filter((t) => action.payload !== t.id);
    default:
  }
}

export default ReducerFunc;
