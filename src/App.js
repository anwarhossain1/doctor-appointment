import React from 'react';
import "./App.css";
import Doctorinfo from "./components/DoctorInfo/Doctorinfo";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import Nav from "./components/NavBar/Nav";
import Footer  from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     
      <Router>
      <Route path='/'  component={Nav}/>
        <Switch>
       
        
          <Route path='/' exact component={Home}/>
          <Route path='/doctorinfo' exact component={Doctorinfo}/>
        </Switch>
      

      </Router>
      
      {/* 
       */}
      {/* <Form /> */}
      <Footer/>
    </div>
  );
}

export default App;
