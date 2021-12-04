
import React from 'react';
import NavBar from './components/NavBar';
import UsersCard from './components/UsersCard';

import "./index.css"


function App() {
  let users = require('./users.json')


  return (
    <>
    <NavBar />

    <div className='profile-list-container'>
      {users?.map((user, index) => (
        <div key={index}>
          <UsersCard user={user}/>
        </div>
      ))}
    </div>

    </>
  );
}

export default App;
