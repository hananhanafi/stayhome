import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from '../pages/Home';
import Berita from '../pages/Berita';
import Konten from '../pages/Konten';
import Hotline from '../pages/Hotline';



class Router extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/berita" component={Berita}></Route>
                <Route path="/konten" component={Konten}></Route>
                <Route path="/hotline" component={Hotline}></Route>
            </Switch>
        )
    }
}

export default Router;