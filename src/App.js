import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Projects from './containers/Projects';
import ProjectDetails from './containers/ProjectDetails';
import About from './containers/About';
import NoPage from './containers/NoPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route  exact path="/projects/:name">
              <ProjectDetails />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="*">
              <NoPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
