import React from 'react';
import logo from './logo.svg';
import './App.css';
import {getCases} from './data/covidapi'
import InputUser from './components/InputUser'
import axios from 'axios';
import CasesView from './components/CasesView'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dataCases:[],
      confirmedCases:0,
      deathsCases:0,
      recoveredCases:0,
      countryConfirmedCases:0,
      countryDeathsCases:0,
      countryRecoveredCases:0,
      region:"",
      falseKeyword:false,
      rightKeyword:false,
      updated:"",
      countryUpdated:"",
      userInput:"",
      isEmpty:false,
      
    }
  }
  // state = {
  //   dataCases:[],
  //   confirmedCases:0,
  //   deathsCases:0,
  //   recoveredCases:0,

  // }

  componentDidMount(){
    axios.get('https://pomber.github.io/covid19/timeseries.json')
  .then(response => {
    return response.data;

  })
  .then(data=>{
    this.setState({
      dataCases:data,
    })
    this.countCases();
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });

  }

  countCases(){
    const {dataCases} = this.state;
    let confirmed=0,deaths=0,recovered=0,updatedm="";
    if(dataCases.length !== 0){
      for (let [key, value] of Object.entries(dataCases)) {
        console.log(key);
        // console.log(value[value.length-1]["confirmed"]);
        confirmed+=value[value.length-1]["confirmed"];
        deaths+=value[value.length-1]["deaths"];
        recovered+=value[value.length-1]["recovered"];
        updatedm=value[value.length-1]["date"];

      }

    }
    else{
      console.log("gak ada cuy")
    }
    this.setState({
      confirmedCases:confirmed,
      deathsCases:deaths,
      recoveredCases:recovered,
      updated:updatedm
    })
  }

  searchHandler = event => {
    event.preventDefault();
    if(this.input.value == null || this.input.value == undefined || this.input.value == ""){
      this.setState({
        isEmpty:true,
      })
    }else{
      let inp = this.input.value;
      let country = inp[0].toUpperCase() + inp.slice(1).toLowerCase();
      this.countryCountCases(country);
      this.setState({
      userInput:this.input.value,
      isEmpty:false,
    })
    }
    

  }

  countryCountCases(country){
    const {dataCases} = this.state;
    let confirmed=0,deaths=0,recovered=0,countryUpdatedm="";
    if(dataCases.length !== 0){
      for (let [key, value] of Object.entries(dataCases)) {
        // console.log(value[value.length-1]["confirmed"]);
        if(key.includes(country)){
        confirmed+=value[value.length-1]["confirmed"];
        deaths+=value[value.length-1]["deaths"];
        recovered+=value[value.length-1]["recovered"];
        countryUpdatedm=value[value.length-1]["date"];
        this.setState({
          countryConfirmedCases:confirmed,
          countryDeathsCases:deaths,
          countryRecoveredCases:recovered,
          region:key,
          countryUpdated:countryUpdatedm,
          rightKeyword:true,
          falseKeyword:false
        })
        break;
      }
      else{
        this.setState({
          falseKeyword:true,
          rightKeyword:false,
        })
      }
    }

    }
    else{
      console.log("gak ada cuy")
    }
    
  }



  render(){

    // this.countCases();
    const {dataCases,confirmedCases,deathsCases,recoveredCases,countryConfirmedCases,countryDeathsCases,countryRecoveredCases,region,isSearch,updated,countryUpdated,rightKeyword,userInput,falseKeyword,isEmpty} = this.state;

    // console.log("didalam render nich",dataCases);

    return (
      <div className="App">
        <h1>#StayHome</h1>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div class="card" style={{color:"black"}}>
          <div class="card-body">
            <h1 class="card-title">Around The world</h1>
            <p>Confirmed : {confirmedCases}</p>
            <p>Deaths : {deathsCases}</p>
            <p>Recovered : {recoveredCases}</p>
            <p>Last update : {updated}</p>
          </div>
          <p style={{fontSize:"16px"}}>updated everyday</p>
        </div>
        <br/>
        <p>
          Search the number of cases by country :
        </p>
        {/* <InputUser/> */}
        <form class="form-inline" onSubmit={this.searchHandler}>
            <div class="form-group mx-sm-3 mb-2">
                <label for="inputSearch" class="sr-only">Search</label>
                <input type="text" class="form-control" id="inputSearch" placeholder="Search..." ref={(input) => this.input = input}/>
            </div>
            <button type="submit" class="btn btn-primary mb-2">Search</button>
        </form>
        {isEmpty && <p>Please input first before searching</p>}
        {rightKeyword && <CasesView confirmed={countryConfirmedCases} deaths={countryDeathsCases} recovered={countryRecoveredCases} country={region} date={countryUpdated}/>}
        {falseKeyword && <p>There is no data for "{userInput}"</p>}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
        <h5>Made with luv by hanafi</h5>
        <span>
        <a href="https://www.instagram.com/hananhnfi"><p className="px-3" style={{display:"inline"}}>Instagram <i class="fab fa-instagram"></i></p></a>
        <a href="https://www.linkedin.com/in/hanan-hanafi-702897174"><p className="px-3" style={{display:"inline"}}>Linkedin <i class="fab fa-linkedin"></i></p></a>
        <a href="https://twitter.com/han2afi"><p className="px-3" style={{display:"inline"}}>Twitter <i class="fab fa-twitter"></i></p></a>
        </span>
    </div>
  );
}
}

export default App;
