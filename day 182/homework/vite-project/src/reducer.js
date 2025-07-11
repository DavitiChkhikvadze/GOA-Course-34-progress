export const initialState = {
  past: [],
  present: [],
  future: [],        
};

export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TEXT': {
      const newPresent = [...state.present, action.payload];
      return {
        past: [...state.past, state.present],
        present: newPresent,
        future: [], // ახალი მოქმედება → redo წყდება
      };
    }
    case 'UNDO': {
      if (state.past.length === 0) return state;
      const previous = state.past[state.past.length - 1];
      const newPast = state.past.slice(0, -1);
      return {
        past: newPast,
        present: previous,
        future: [state.present, ...state.future],
      };
    }
    case 'REDO': {
      if (state.future.length === 0) return state;
      const next = state.future[0];
      const newFuture = state.future.slice(1);
      return {
        past: [...state.past, state.present],
        present: next,
        future: newFuture,
      };
    }
    default:
      return state;
  }
}
