import StudentCard from './StudentCard';

const StudentList = ({ students }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {students.map(student => (
      <StudentCard
        key={student.id}
        name={student.name}
        age={student.age}
        image={student.image}
      />
    ))}
  </div>
);

export default StudentList;
