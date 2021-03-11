import React from 'react';
import "./App.css";
import Doctorinfo from "./components/DoctorInfo/Doctorinfo";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import Nav from "./components/NavBar/Nav";
import Footer  from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Layout from 'antd/lib/layout/layout';

function App() {
  return (
    <div className="App">
      <Layout>
     
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
      </Layout>
    </div>
  );
}

export default App;
