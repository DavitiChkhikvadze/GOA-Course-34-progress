const StudentCard = ({ name, age, image }) => (
    <div className="p-4 border rounded-lg shadow-md text-center">
      <img src={image} alt={name} className="w-24 h-24 rounded-full mx-auto mb-2" />
      <h3 className="text-lg font-bold">{name}</h3>
      <p>Age: {age}</p>
    </div>
  );
  export default StudentCard;
  