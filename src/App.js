import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Projects from './Projects';
import ProjectDetails from './ProjectDetails';
import About from './About';
import NoPage from './NoPage';

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
