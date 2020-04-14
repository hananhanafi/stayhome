import React,{ Component } from "react";
import {Link} from 'react-router-dom';


class Navbar extends Component{
    render(){
        return(
            <nav style={{backgroundColor:"#da3150"}}  class="navbar navbar-expand-lg navbar-light text-white">
                <div className="container">

                    <a style={{color:"white"}} class="navbar-brand" href="#">
                        <img style={{width:"24px"}} src={require('../assets/img/stayhome-logo.png')} alt=""/> #StayHome
                        </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ml-auto">
                        <li  class="nav-item">
                        <Link style={{color:"white"}} class="nav-link" to="/"><i class="fas fa-home"></i> BERANDA<span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                        <Link style={{color:"white"}} class="nav-link" to="/berita"><i class="fas fa-newspaper"></i> BERITA</Link>
                        </li>
                        <li class="nav-item">
                        <Link style={{color:"white"}} class="nav-link" to="/konten"><i class="fas fa-info-circle"></i> INFORMASI</Link>
                        </li>
                        <li class="nav-item">
                        <Link style={{color:"white"}} class="nav-link" to="/hotline"><i class="fas fa-headset"></i> HOTLINE</Link>
                        </li>
                        
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;