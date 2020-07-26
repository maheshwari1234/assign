
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Home from './components/home'
import Indpost from './components/Indpost'
import Login from './components/Login'
import Register from './components/Register'
import Newpost from './components/newPost'
import Search from './components/search'

const App=()=>{
  return(
<React.Fragment>
<BrowserRouter>
<Switch>
<Route exact path="/" component={Home}/>
<Route exact path="/t/:tag" component={Search}/>
<Route  exact path="/:id/:Title" component={Indpost}/>
<Route exact path="/login" component={Login}/>
<Route exact path="/register" component={Register}/>
<Route exact path="/new" component={Newpost}/>




</Switch>
</BrowserRouter>
</React.Fragment>
  )
}
export default App;
