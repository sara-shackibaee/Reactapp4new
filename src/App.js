import './App.css';
import Maincomp from './Components/Maincomp'
import H from '../src/ChildComponents/H'
import A from '../src/ChildComponents/A'
import F from '../src/ChildComponents/F'
import K from '../src/ChildComponents/K'
import L  from '../src/ChildComponents/L'
import P from '../src/ChildComponents/P'
import { useHistory } from "react-router-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
function App() {
  const history = useHistory();

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Maincomp}></Route>
          <Route  exact path='/H' component={H}></Route>
          <Route  exact path='/A' component={A}></Route>
          <Route  exact path='/F' component={F}></Route>
          <Route  exact path='/K' component={K}></Route>
          <Route  exact path='/L' component={L}></Route>
          <Route  exact path='/P' component={P}></Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
