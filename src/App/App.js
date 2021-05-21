import './App.css';
import {
  HashRouter as Router,
  Route,
  // Redirect,
  // Switch,
} from 'react-router-dom';
import home from '../components/home/home';
import earthImagery from '../components/earthImagery/earthImagery';
import Navbar from '../components/navbar/navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={home} />
        <Route path="/earthImg" component={earthImagery} />
      </div>
    </Router>
  );
}

export default App;
