import React from 'react';
import logo from './logo.svg';
import './App.css';
import {getCases} from './data/covidapi'
import InputUser from './components/InputUser'
import axios from 'axios';
import CasesView from './components/CasesView'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Router from './router/Router';

class App extends React.Component {
  

  render(){

    return (
      <div className="App">
        <img src={require('./assets/img/stayhome-logo.png')} alt=""/>
        <Navbar/>

        <Router/>

        <div style={{backgroundColor:"#da3150"}} className="container-fluid text-white py-3">
          
      
        <h5>Made with <i class="fas fa-heart"></i> by mahasiswa qomsibe</h5>
        <span>
          {/* <a href="https://www.instagram.com/hananhnfi"><p className="px-1 text-white" style={{display:"inline"}}>Instagram <i class="fab fa-instagram"></i></p></a>
          <a href="https://www.linkedin.com/in/hanan-hanafi-702897174"><p className="px-1 text-white" style={{display:"inline"}}>Linkedin <i class="fab fa-linkedin"></i></p></a>
          <a href="https://twitter.com/han2afi"><p className="px-1 text-white" style={{display:"inline"}}>Twitter <i class="fab fa-twitter"></i></p></a> */}
        </span>
        </div>
    </div>
  );
}
}

export default App;
