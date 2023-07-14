import './App.css';
import GridPage from './pages/GridPage';
import { MyText } from './pages/Home';
import Grid from './pages/Grid';
import { Home } from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  useHistory,
  Route
} from 'react-router-dom'

function App() {
  return (
<>
      <Router>
        <Switch>
          <Route exact path='/' >
            <Home />
          </Route>
          <Route exact path='/grid' >
            <Grid />
          </Route>
          <Route exact path='/gridpage' >
            <GridPage />
          </Route>

        </Switch>
      </Router>

</>
  );
}

export default App;
