import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';

import NavBar from './Components/NavBar.jsx';
import CoverImg from './Components/CoverImg.jsx'
import AllCoffee from './Components/AllCoffee.jsx';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path='/'>
        <CoverImg />
        <AllCoffee />
      </Route>

    </div>
  );
}

export default App;
