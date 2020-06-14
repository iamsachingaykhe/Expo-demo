import React from 'react';  
import ReactDOM from 'react-dom';  
import { Route, BrowserRouter as Router } from 'react-router-dom'  
import './index.css';  
import App from './App';  
import About from './component/About'; 
import CreateDashboard from './component/CreateDashboard';
import ManageDashboard from './component/ManageDashboard';
import CreateTemplate from './component/CreateTemplate';
import ManageTemplate from './component/ManageTemplate';
import CreateCampagins from './component/CreateCampagins';
import ManageCampagins from './component/ManageCampagins';
import * as serviceWorker from './serviceWorker'; 
const routing = (  
  <Router>  
    <div> 
      <Route path="/" component={App} />  
      <Route path="/about" component={About} />  
      <Route path="/create-dashboard" component={CreateDashboard}/>
      <Route path="/manage-dashboard" component={ManageDashboard}/>
      <Route path="/create-template" component={CreateTemplate}/>
      <Route path="/manage-template" component={ManageTemplate}/>
      <Route path="/create-campagins" component={CreateCampagins}/>  
      <Route path="/manage-campagins" component={ManageCampagins}/>  
    </div>  
  </Router>  
)  

//***************** By Using routing....********************
ReactDOM.render(routing, document.getElementById('root'));  

//***************** Basic rendering ....********************
//ReactDOM.render(<App/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
