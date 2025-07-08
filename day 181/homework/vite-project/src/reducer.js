export const initialState = [];

export function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
        },
      ];
    case 'TOGGLE':
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}
