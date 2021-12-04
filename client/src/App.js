
import React from 'react';
import NavBar from './components/NavBar';
import UsersCard from './components/UsersCard';

import "./index.css"


function App() {
  let usersData = require('./users.json')


  return (
    <>
      <NavBar />
      <UsersCard users={usersData}/>
    </>
  );
}

export default App;
