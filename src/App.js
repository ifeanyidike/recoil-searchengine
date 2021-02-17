
import './App.css';
import Home from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Switch>
        <Route component={SearchPage} path='/search' />
        <Route component={Home} path='/' exact />
      </Switch>
    </div>
  );
}

export default App;
