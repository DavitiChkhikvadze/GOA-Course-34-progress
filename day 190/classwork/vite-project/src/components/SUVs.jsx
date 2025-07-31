import suvIcon from '../assets/images/icon-suvs.svg';

const SUVs = () => {
  return (
    <div className="bg-teal-700 text-white p-8 flex flex-col justify-between">
      <div>
        <img src={suvIcon} alt="SUV Icon" className="mb-4 w-10 h-10" />
        <h2 className="text-2xl font-bold mb-4 uppercase">SUVs</h2>
        <p className="text-white text-sm leading-relaxed">
          Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.
        </p>
      </div>
      <button className="mt-6 border-2 border-white py-2 px-6 rounded-full hover:bg-white hover:text-teal-700 transition">
        Learn More
      </button>
    </div>
  );
};

export default SUVs;
