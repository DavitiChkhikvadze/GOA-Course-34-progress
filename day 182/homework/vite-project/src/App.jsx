import { useReducer } from 'react';
import { reducer, initialState } from './reducer';
import TextForm from './components/TextForm';
import TextList from './components/TextList';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addText = text => dispatch({ type: 'ADD_TEXT', payload: text });
  const undo = () => dispatch({ type: 'UNDO' });
  const redo = () => dispatch({ type: 'REDO' });

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Undo / Redo Demo</h1>

      <TextForm onSubmit={addText} />

      <div className="flex gap-4 mt-4">
        <button
          onClick={undo}
          disabled={state.past.length === 0}
          className="flex-1 px-4 py-2 bg-yellow-400 text-white rounded-lg disabled:opacity-40"
        >
          Undo
        </button>
        <button
          onClick={redo}
          disabled={state.future.length === 0}
          className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg disabled:opacity-40"
        >
          Redo
        </button>
      </div>

      <TextList items={state.present} />
    </div>
  );
}
