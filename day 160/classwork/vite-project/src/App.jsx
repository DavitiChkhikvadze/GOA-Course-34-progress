import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const divs = Array.from({ length: 100 }, (_, i) => (
    <div
      key={i}
      style={{
        width: 30,
        height: 30,
        backgroundColor: i % 2 === 1 ? 'blue' : 'gray',
        margin: 2,
      }}
    />
  ));

  const buttons = Array.from({ length: 20 }, (_, i) => {
    const num = i + 1;
    return (
      <button
        key={num}
        onClick={() => setCount(count + num)}
        style={{
          margin: 4,
          padding: '6px 10px',
          fontSize: 14
        }}
      >
        Add {num}
      </button>
    );
  });

  return (
    <div style={{ padding: 20 }}>
      <h1>Count: {count}</h1>

      <div style={{ marginBottom: 20 }}>{buttons}</div>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>{divs}</div>
    </div>
  );
}

export default App;
