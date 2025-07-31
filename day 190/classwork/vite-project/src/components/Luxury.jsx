import luxuryIcon from '../assets/images/icon-luxury.svg';

const Luxury = () => {
  return (
    <div className="bg-emerald-900 text-white p-8 rounded-tr-xl rounded-br-xl flex flex-col justify-between">
      <div>
        <img src={luxuryIcon} alt="Luxury Icon" className="mb-4 w-10 h-10" />
        <h2 className="text-2xl font-bold mb-4 uppercase">Luxury</h2>
        <p className="text-white text-sm leading-relaxed">
          Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.
        </p>
      </div>
      <button className="mt-6 border-2 border-white py-2 px-6 rounded-full hover:bg-white hover:text-emerald-900 transition">
        Learn More
      </button>
    </div>
  );
};

export default Luxury;
