import React from 'react';

function App() {
  // JSX სტრუქტურა
  const jsxTree = (
    <div>
      <h1>My Website</h1>
      <p>Welcome to my site!</p>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );

  // React.createElement სტრუქტურა
  const createElementTree = React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'My Website'),
    React.createElement('p', null, 'Welcome to my site!'),
    React.createElement(
      'ul',
      null,
      React.createElement('li', null, 'Home'),
      React.createElement('li', null, 'About'),
      React.createElement('li', null, 'Contact')
    )
  );

  // ვირტუალური დომის გამოტანა კონსოლში
  console.log('JSX Virtual DOM:', jsxTree);
  console.log('React.createElement Virtual DOM:', createElementTree);

  return (
    <div>
      <h2>JSX Example:</h2>
      {jsxTree}

      <h2>React.createElement Example:</h2>
      {createElementTree}
    </div>
  );
}

export default App;
