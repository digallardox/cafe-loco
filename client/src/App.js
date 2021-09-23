import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import NavBar from './Components/NavBar.jsx';
import CoverImg from './Components/CoverImg.jsx'
import AllCoffee from './Components/AllCoffee.jsx';
import Add from './Components/Add.jsx';
import Rank from './Components/Rank';
import PageNotFound from './Components/PageNotFound';
import Footer from './Components/Footer';
import Home from './Components/Home';

function App() {
  return (
		<div className='App'>
			<Helmet>
				<title>Cafe Loco | Home</title>
			</Helmet>
			<NavBar />

			<Switch>
				<Route exact path='/'>
					<CoverImg />
					<AllCoffee />
				</Route>
				<Route exact path='/coffee'>
					<AllCoffee />
				</Route>
				<Route exact path='/rank'>
					<Rank />
				</Route>
				<Route exact path='/add'>
					<Add />
				</Route>
				<Route component={PageNotFound} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
