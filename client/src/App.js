import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import NavBar from './Components/NavBar.jsx';
import Coffee from './Components/Coffee.jsx';
import Form from './Components/Form.jsx';
import Rank from './Components/Rank';
import PageNotFound from './Components/PageNotFound';
// import Footer from './Components/Footer';

function App() {
  return (
		<div className='App'>
			<Helmet>
				<title>Cafe Loco | Home</title>
			</Helmet>
			<NavBar />

			<Switch>
				<Route exact path='/'>
					{/* <CoverImg /> */}
					<Coffee />
				</Route>
				<Route exact path='/rank'>
					<Rank />
				</Route>
				<Route exact path='/add'>
					<Form />
				</Route>
				<Route component={PageNotFound} />
			</Switch>
			{/* <Footer /> */}
		</div>
	);
}

export default App;
