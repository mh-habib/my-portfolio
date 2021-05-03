import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import ProjectPage from './components/ProjectPage/ProjectPage/ProjectPage';
import ContactPage from './components/ContacePage/ContactPage';
import ResumePage from './components/ResumePage/ResumePage';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/contact">
            <ContactPage></ContactPage>
          </Route>
          <Route path="/projects">
            <ProjectPage></ProjectPage>
          </Route>
          <Route path="/resume">
            <ResumePage></ResumePage>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
