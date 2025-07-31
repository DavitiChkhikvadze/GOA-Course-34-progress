import Sedans from './components/Sedans';
import SUVs from './components/SUVs';
import Luxury from './components/Luxury';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-4xl shadow-lg rounded-xl overflow-hidden">
        <Sedans />
        <SUVs />
        <Luxury />
      </div>
    </div>
  );
};

export default App;
