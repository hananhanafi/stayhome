import React,{ Component } from "react";
import HotlineCard from '../components/HotlineCard';


class Hotline extends Component{
    render(){

        return (
        <header className="App-header">

            <div className="container">
                <div className="row my-3">
                    <div className="col">
                        <h1><i class="fas fa-headset"></i> Hotline Covid-19</h1>
                        <p>Layanan darurat via telepon kasus Covid-19 di Indonesia</p>
                    </div>
                </div>
                <div className="row">
                    <HotlineCard no="112 atau 081388376955 " nama="Pemprov DKI Jakarta" url="jakarta"/>
                    <HotlineCard no="119 atau 021-5210411 atau 081212123119" nama="KEMENKES RI" url="kemenkes"/>
                    <HotlineCard no="119 atau 021-5210411 atau 08112093306" nama="Pemprov Jawa Barat" url="jabar"/>
                    <HotlineCard no="024 3580713 atau 082313600560" nama="Pemprov Jawa Tengah" url="jateng"/>
                    <HotlineCard no="031 8430313 atau 081334367800" nama="Pemprov Jawa Timur" url="jatim"/>
                    <HotlineCard no="0274 555585 atau 08112764800" nama="Pemprov D.I. Yogyakarta" url="yogyakarta"/>
                    

                    
                </div>
            </div>



            </header>
        )
    }
}

export default Hotline;