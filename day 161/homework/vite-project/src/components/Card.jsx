const Card = ({ title, description }) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-md w-full sm:w-80">
      <h2 className="text-xl font-bold mb-2 text-blue-600">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Card;
