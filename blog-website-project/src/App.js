// package imports
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// stylesheet imports
import './App.css';


// pages imports
import Home from './components/Pages/Home/Home'
import Create from './components/Pages/create/Create'
import BlogDetail from './components/Pages/Home/blog-detail/BlogDetail'
import NotFound from './components/Pages/not-found/NotFound'
import Navbar from './components/Component/Navbar/Navbar';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path='/'><Home /></Route>
            <Route exact path='/create'><Create /></Route>
            <Route exact path='/blogs/:id'><BlogDetail /></Route>
            <Route exact path='*'><NotFound /></Route>
          </Switch>
        </div>
      </div>

    </Router>
  );
}

export default App;
