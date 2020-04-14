import React,{ Component } from "react";
import { getKawalCorona } from "../data/kawalcorona";
import Axios from "axios";
import moment from 'moment';



class Home extends React.Component{
    state = {
        q:"",
        dataGlobal:[],
        dataIndonesia:[],
        dataProvinsi:[],
        loading:true,
        loadGlobal:true,
        totalPositif:[],
        totalSembuh:[],
        totalMeninggal:[],
        loadingDataIndonesia:true,
        
    }

    componentDidMount(){

        // total positif
        
        Axios.get('https://api.kawalcorona.com/positif/')
        .then(response => {
            return response.data;
        
        })
        .then(data=>{
            this.setState({
                totalPositif:data,
            })
        })
        .catch(error => {
            console.log(error);
        });

        // total sembuh
        
        Axios.get('https://api.kawalcorona.com/sembuh/')
        .then(response => {
            return response.data;
        
        })
        .then(data=>{
            this.setState({
                totalSembuh:data,
            })
        })
        .catch(error => {
            console.log(error);
        });

        // total meninggal
        
        Axios.get('https://api.kawalcorona.com/meninggal/')
        .then(response => {
            return response.data;
        
        })
        .then(data=>{
            this.setState({
                totalMeninggal:data,
            })
        })
        .catch(error => {
            console.log(error);
        });


        Axios.get('https://api.kawalcorona.com/indonesia/')
        .then(response => {
            return response.data;
        
        })
        .then(data=>{
            this.setState({
                dataIndonesia:data,
                loadingDataIndonesia:false,
            })
        })
        .catch(error => {
            console.log(error);
        });

        // provinsi

        Axios.get('https://api.kawalcorona.com/indonesia/provinsi/')
        .then(response => {
            return response.data;
        
        })
        .then(data=>{
            this.setState({
                dataProvinsi:data,
                
            })
        })
        .catch(error => {
            console.log(error);
        });


        //global

        Axios.get('https://api.kawalcorona.com/')
        .then(response => {
            return response.data;
        
        })
        .then(data=>{
            this.setState({
                dataGlobal:data,
                loadGlobal:false,
                loading:false,
            })
        })
        .catch(error => {
            console.log(error);
        });


    }


    fetchIndonesia(){
        const qq = "/indonesia/";

        this.fetchDataIndonesia(qq);
    }

    renderLoading() {
        return <h3 className="mt-5 text-center">
          Loading...
        </h3>
      }


    
    

    render(){
        const {dataGlobal,dataIndonesia,loading,dataProvinsi,loadGlobal,totalPositif,totalMeninggal,totalSembuh,loadingDataIndonesia} = this.state
        // if(dataIndonesia!=undefined || dataIndonesia!=null ){
        //     // console.log("dirender global",dataGlobal[0])
        //     console.log("dirender",dataIndonesia[0])

        // }
        

        // if(!loading){

        //     console.log("Dirender",dataProvinsi[0]);
        //     console.log("dataGloabl",dataGlobal)
        //     console.log("total sembuh",totalPositif.value);
        // }

        if(!loadGlobal){
            var date = moment(dataGlobal[0].attributes.Last_Update).format('MMMM Do YYYY, h:mm:ss a');
        }

        return (
        <header className="App-header">
            {loading && this.renderLoading()}
            {!loading && 
            (<div className="container">
                <div className="container text-center my-5 bg-white p-5" style={{borderRadius:"20px"}}>
                    <div className="row mb-3">
                        <div className="col">
                        <h1>Kasus Covid-19 Global Live Data</h1>
                        </div>
                    </div>
                    <div className="row text-left">
                        <div className="col-md-4 col-12">
                            <div className="card border-warning mb-3">
                                <div class="card-header row" style={{backgroundColor:"unset"}}>Positif <img className="img-fluid ml-auto" src={require('../assets/img/positif.png')} style={{width:"56px"}} alt=".."/></div>
                                <div className="card-body text-white bg-warning">
                                {/* <h5 class="card-title">Danger card title</h5> */}
                                {!loading && <p className="card-text">{totalPositif.value} orang</p>}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="card border-success mb-3">
                                <div className="card-header row" style={{backgroundColor:"unset"}}>Sembuh <img className="img-fluid ml-auto" src={require('../assets/img/sembuh.png')} style={{width:"56px"}} alt=".."/></div>
                                <div className="card-body text-white bg-success">
                                {/* <h5 class="card-title">Danger card title</h5> */}
                                {!loading && <p className="card-text">{totalSembuh.value} orang</p>}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="card border-danger mb-3">
                                <div className="card-header row" style={{backgroundColor:"unset"}}>Meninggal <img className="img-fluid ml-auto" src={require('../assets/img/meninggal.png')} style={{width:"56px"}} alt=".."/></div>
                                <div className="card-body text-white bg-danger">
                                {/* <h5 class="card-title">Danger card title</h5> */}
                                {!loading && <p className="card-text">{totalMeninggal.value} orang</p>}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col">
                        {!loadGlobal && <p>last update: {date} </p>}

                        </div>
                    </div>
                </div>

                <div className="container text-center my-5 bg-white p-5" style={{borderRadius:"20px"}}>
                    
                    <div className="row mb-3">
                        <div className="col">
                        <h1>Kasus Covid-19 Indonesia Live Data</h1>
                        </div>
                    </div>
                    <div className="row text-left">
                        <div className="col-md-4 col-12">
                            <div className="card border-warning mb-3">
                                <div class="card-header row" style={{backgroundColor:"unset"}}>Positif <img className="img-fluid ml-auto" src={require('../assets/img/positif.png')} style={{width:"56px"}} alt=".."/></div>
                                <div className="card-body text-white bg-warning">
                                {!loadingDataIndonesia && <p className="card-text">{dataIndonesia[0].positif} orang</p>}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="card border-success mb-3">
                                <div className="card-header row" style={{backgroundColor:"unset"}}>Sembuh <img className="img-fluid ml-auto" src={require('../assets/img/sembuh.png')} style={{width:"56px"}} alt=".."/></div>
                                <div className="card-body text-white bg-success">
                                {!loadingDataIndonesia && <p className="card-text">{dataIndonesia[0].sembuh} orang</p>}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="card border-danger mb-3">
                                <div className="card-header row" style={{backgroundColor:"unset"}}>Meninggal <img className="img-fluid ml-auto" src={require('../assets/img/meninggal.png')} style={{width:"56px"}} alt=".."/></div>
                                <div className="card-body text-white bg-danger">
                                {!loadingDataIndonesia && <p className="card-text">{dataIndonesia[0].meninggal} orang</p>}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col">
                        {!loadGlobal && <p>last update: {date} </p>}
                        </div>
                    </div>

                    <hr/>

                    <div className="row text-left">
                        <div className="col">
                        <p>Data Kasus Covid-19 berdasarkan provinsi : </p>
                        </div>
                    </div>
                    <div className="row text-left">
                        <div className="col-1">

                        </div>
                        <div className="col">
                        <table style={{maxHeight:"500px"}} className="table table-hover table-sm  table-responsive">
                            <thead className="">
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Provinsi</th>
                                <th scope="col">Positif</th>
                                <th scope="col">Sembuh</th>
                                <th scope="col">Meninggal</th>
                            </tr>
                            </thead>
                            <tbody>
                            {!loading &&
                            dataProvinsi.map((data,index)=>{
                                return <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{data.attributes.Provinsi}</td>
                                    <td>{data.attributes.Kasus_Posi}</td>
                                    <td>{data.attributes.Kasus_Semb}</td>
                                    <td>{data.attributes.Kasus_Meni}</td>
                                </tr>
                            })

                            }
                            
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>

                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-6 col-12 mb-3">
                            <a href="https://infeksiemerging.kemkes.go.id/">

                            <div class="card w-100 bg-primary text-white rounded text-left" >
                                <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                    <p>Media Informasi Resmi KEMENKES RI</p>
                                    <footer class=" text-white"><cite title="Source Title">Kemenkes RI</cite></footer>
                                </blockquote>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div className="col-md-6 col-12 mb-3">
                            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public">

                            <div class="card w-100 bg-success text-white rounded text-left" >
                                <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                    <p>Coronavirus disease (COVID-19) advice for the public</p>
                                    <footer class=" text-white"><cite title="Source Title">WHO</cite></footer>
                                </blockquote>
                                </div>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>)}



            </header>
        )
    }
}

export default Home;