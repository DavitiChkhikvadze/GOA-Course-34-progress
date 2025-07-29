import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  return (
    <div style={{
      padding: '4rem',
      textAlign: 'center',
      backgroundColor: '#f8d7da',
      color: '#721c24',
      borderRadius: '12px',
      maxWidth: '500px',
      margin: '4rem auto',
      boxShadow: '0 0 12px rgba(0, 0, 0, 0.1)'
    }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <button 
        onClick={goBack}
        style={{
          marginTop: '1rem',
          padding: '0.6rem 1.2rem',
          backgroundColor: '#721c24',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        Go Home
      </button>
    </div>
  );
}

export default NotFound;
