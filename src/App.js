import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import List from './components/List';
import Recipes from './components/Recipes';
import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/list" component={List} />
          <Route path="/recipes" component={Recipes} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          {/* <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/createtodo" component={CreateTodo} /> */}
        </Switch>
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
