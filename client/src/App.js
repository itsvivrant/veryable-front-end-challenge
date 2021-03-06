
import React from 'react';
import NavBar from './components/NavBar';
import UsersCard from './components/UsersCard';

import "./index.css"


function App() {
  let users = require('./users.json')

  return (
    <div className='whole-page'>
      <NavBar />

      <div className='profile-list-container'>
        {users?.map((user, index) => (
            <UsersCard user={user} index={index}/>
        ))}
      </div>

    </div>
  );
}

export default App;
