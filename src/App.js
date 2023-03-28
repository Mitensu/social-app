import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

import AppNav from './components/AppNav';
import AppRoutes from './routes/AppRoutes';

const App = () => {

  const [user, setUser] = useState();

  axios.defaults.headers.common["Authorization"] =
    "Bearer " + (user ? user.jwt_token : "")
  axios.defaults.headers.post["Content-Type"] = "application/json"

  return (
    <div className="App">
      <AppNav />
      <AppRoutes setUser={setUser} />
    </div>
  );
}

export default App;
