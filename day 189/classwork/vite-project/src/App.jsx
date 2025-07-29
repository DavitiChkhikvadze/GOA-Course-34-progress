import { Link, Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';

function App() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome</h1>
      <Link to="/thispagedoesnotexist" style={{ color: '#007bff', textDecoration: 'underline' }}>
        Go to broken link
      </Link>

      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
