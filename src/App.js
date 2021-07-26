import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={Home}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
