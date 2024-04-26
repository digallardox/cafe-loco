import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';

import { Layout } from './components/Layout/Layout.jsx';
import Coffees from './pages/Coffees/Coffees.jsx';
import SingleCoffee from './pages/SingleCoffee.jsx';
import Form from './components/Form/Form.jsx';
import CoffeeRank from './pages/CoffeeRank.jsx';
import is404 from './components/is404.jsx';

function App() {
  return (
		<div className='App'>
			<Layout>
			<Switch>
				<Route exact path='/'>
				< Coffees/>
				</Route>
				{/* <Route exact path='/coffee'>
					< Coffees/>
				</Route> */}
				<Route exact path='/coffee/:id'>
					<SingleCoffee />
				</Route>
				<Route exact path='/rank'>
					<CoffeeRank />
				</Route>
				<Route exact path='/add'>
					<Form />
				</Route>
				<Route component={is404} />
			</Switch>
			</Layout>
		</div>
	);
}

export default App;
