import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddUser from './Components/Layout/AddUser';
import Navbar from './Components/Layout/Navbar';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import PageNotFound from './Components/Pages/PageNotFound';
import UserDetail from './Components/Pages/UserDetail';
import UserEdit from './Components/Pages/UserEdit';
function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container mt-2">
        <Switch>
          <Route exact path="/" component= {Home} />
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={ Contact }/>
          <Route exact path="/adduser" component={AddUser}/>
          <Route exact path="/:id" component={ UserDetail }/>
          <Route exact path="/edit/:id" component={ UserEdit }/>
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
