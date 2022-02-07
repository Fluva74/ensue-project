import View1 from "./components/View1";
import View2 from "./components/View2";
import View3 from "./components/View3";
import View4 from "./components/View4";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
   <Router>
      <div className="App">
          <Switch>
            <Route exact path="/">
            <View1 />
            </Route>
            <Route path="/View2">
            <View2 />
            </Route>
            <Route path="/View3">
            <View3 />
            </Route>
            <Route path="/View4">
            <View4 />
            </Route>
          </Switch>
    </div>
   </Router>
  )}

export default App;
