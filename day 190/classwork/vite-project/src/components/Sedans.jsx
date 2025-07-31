import sedanIcon from '../assets/images/icon-sedans.svg';

const Sedans = () => {
  return (
    <div className="bg-orange-500 text-white p-8 rounded-tl-xl rounded-bl-xl flex flex-col justify-between">
      <div>
        <img src={sedanIcon} alt="Sedan Icon" className="mb-4 w-10 h-10" />
        <h2 className="text-2xl font-bold mb-4 uppercase">Sedans</h2>
        <p className="text-white text-sm leading-relaxed">
          Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.
        </p>
      </div>
      <button className="mt-6 border-2 border-white py-2 px-6 rounded-full hover:bg-white hover:text-orange-500 transition">
        Learn More
      </button>
    </div>
  );
};

export default Sedans;
