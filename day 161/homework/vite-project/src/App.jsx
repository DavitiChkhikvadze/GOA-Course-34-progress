import Card from './components/Card';
import cardData from './data/cardData';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">React Cards</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {cardData.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default App;
