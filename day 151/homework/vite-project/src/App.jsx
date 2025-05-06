import { useState } from 'react';
import ProfileCard from './components/ProfileCard';
import ProductList from './components/ProductList';
import UserStatus from './components/UserStatus';
import Task from './components/Task';
import StudentList from './components/StudentList';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const products = [
    { id: 1, name: 'Phone', price: 499, inStock: true },
    { id: 2, name: 'Laptop', price: 899, inStock: false },
    { id: 3, name: 'Headphones', price: 199, inStock: true },
  ];

  const students = [
    { id: 1, name: 'Sophie', age: 17, image: 'https://via.placeholder.com/100' },
    { id: 2, name: 'Luka', age: 16, image: 'https://via.placeholder.com/100' },
    { id: 3, name: 'Nino', age: 18, image: 'https://via.placeholder.com/100' },
  ];

  return (
    <div className="p-6 space-y-10 max-w-5xl mx-auto">
      {/* 1) ProfileCard */}
      <section className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">1. Profile Card</h2>
        <ProfileCard
          fullName="Daviti Chxikvadze"
          description="Frontend Developer & React Enthusiast"
          imageUrl="./src/assets/image1.png"
        />
      </section>

      {/* 2) Product List */}
      <section className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">2. Product List</h2>
        <ProductList products={products} />
      </section>

      {/* 3) User Status */}
      <section className="bg-gray-100 p-4 rounded-lg space-y-4">
        <h2 className="text-2xl font-bold">3. User Status</h2>
        <UserStatus loggedIn={loggedIn} />
        <button
          onClick={() => setLoggedIn(!loggedIn)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Toggle Login
        </button>
      </section>

      {/* 4) Task */}
      <section className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">4. Task</h2>
        <Task title="Learn React" time="2:00 PM" />
      </section>

      {/* 5) Student List */}
      <section className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">5. Student List</h2>
        <StudentList students={students} />
      </section>
    </div>
  );
}

export default App;
