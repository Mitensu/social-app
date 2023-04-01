import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

import AppNav from './components/AppNav';
import AppRoutes from './routes/AppRoutes';

const App = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  axios.defaults.headers.common["Authorization"] = "Bearer " + (user ? user.jwt_token : "");
  axios.defaults.headers.post["Content-Type"] = "application/json"

  const handleLogout = () => {
    if(user) {
    axios.post('https://akademia108.pl/api/social-app/user/logout')
      .then(() => {
        localStorage.clear();
        setUser(null);
      })
  }};

  return (
    <div className="App">
      <AppNav user={user} logout={handleLogout} />
      <AppRoutes setUser={setUser} />
    </div>
  );
}

export default App;
