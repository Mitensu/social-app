import logo from './logo.svg';
import './App.css';

import AppNav from './components/AppNav';
import AppRoutes from './routes/AppRoutes';

const App = (props) => {
  return (
    <div className="App">
      <AppNav />
      <AppRoutes />
    </div>
  );
}

export default App;
