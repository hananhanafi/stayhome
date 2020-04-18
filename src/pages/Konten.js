import React,{ Component } from "react";
import './konten.css'

class Konten extends Component{
    render(){

        return (
        <header className="App-header">

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className=" text-center my-5 bg-white p-md-5 p-2" style={{borderRadius:"20px"}}>
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe class="embed-responsive-item" src={require('../assets/videos/vid.mp4')} allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className=" text-center my-5 bg-white p-md-5 p-2" style={{borderRadius:"20px"}}>
                            <h2>Informasi</h2>
                            <hr/>
                            <div class="accordion" id="accordionExample">
                                
                                <div class="card">
                                    <div class="card-header text-left" id="headingTwo">
                                    <h2 class="mb-0">
                                        <button class="btn collapsed w-100 text-left" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Apa itu Coronavirus ?
                                        </button>
                                    </h2>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div class="card-body text-left">
                                            <small>
                                            Coronavirus adalah keluarga besar virus yang dapat menyebabkan penyakit pada hewan atau manusia. Pada manusia, beberapa coronavirus diketahui menyebabkan infeksi pernafasan mulai dari flu biasa hingga penyakit yang lebih parah seperti Sindrom Pernafasan Timur Tengah (MERS) dan Sindrom Pernafasan Akut Parah (SARS). Virus corona yang paling baru ditemukan menyebabkan penyakit coronavirus COVID-19.
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header text-left" id="headingThree">
                                    <h2 class="mb-0">
                                        <button class="btn collapsed w-100 text-left" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Apa itu Covid-19 ?
                                        </button>
                                    </h2>
                                    </div>
                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                        <div class="card-body text-left">
                                            <small>
                                            COVID-19 adalah penyakit menular yang disebabkan oleh coronavirus yang paling baru ditemukan. Virus dan penyakit baru ini tidak diketahui sebelum wabah dimulai di Wuhan, Cina, pada bulan Desember 2019.
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header text-left" id="headingFour">
                                    <h2 class="mb-0">
                                        <button class="btn collapsed w-100 text-left" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Apa gejala covid-19 ?
                                        </button>
                                    </h2>
                                    </div>
                                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                        <div class="card-body text-left">
                                            <small>
                                            Gejala COVID-19 yang paling umum adalah demam, kelelahan, dan batuk kering. Beberapa pasien mungkin mengalami sakit dan nyeri, hidung tersumbat, pilek, sakit tenggorokan atau diare. Gejala-gejala ini biasanya ringan dan mulai secara bertahap. Beberapa orang menjadi terinfeksi tetapi tidak mengembangkan gejala apa pun dan merasa tidak enak badan. Kebanyakan orang (sekitar 80%) pulih dari penyakit tanpa perlu perawatan khusus. Sekitar 1 dari setiap 6 orang yang mendapatkan COVID-19 sakit parah dan mengalami kesulitan bernapas. Orang yang lebih tua, dan mereka yang memiliki masalah medis yang mendasari seperti tekanan darah tinggi, masalah jantung atau diabetes, lebih mungkin untuk mengembangkan penyakit serius. Orang dengan demam, batuk dan kesulitan bernapas harus mencari perhatian medis.
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header text-left" id="headingFive">
                                    <h2 class="mb-0">
                                        <button class="btn collapsed w-100 text-left" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        Bagaimana cara covid-19 menyebar ?
                                        </button>
                                    </h2>
                                    </div>
                                    <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                        <div class="card-body text-left">
                                            <small>
                                            Orang dapat menangkap COVID-19 dari orang lain yang memiliki virus. Penyakit ini dapat menyebar dari orang ke orang melalui tetesan kecil dari hidung atau mulut yang menyebar ketika seseorang dengan COVID-19 batuk atau buang napas. Tetesan ini mendarat pada benda dan permukaan di sekitar orang tersebut. Orang lain kemudian menangkap COVID-19 dengan menyentuh benda atau permukaan ini, kemudian menyentuh mata, hidung, atau mulut mereka. Orang-orang juga dapat menangkap COVID-19 jika mereka menghirup tetesan dari seseorang dengan COVID-19 yang batuk atau mengeluarkan tetesan. Inilah sebabnya mengapa penting untuk tinggal lebih dari 1 meter (3 kaki) dari orang yang sakit.
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-left">
                                <small style={{fontSize:"small"}}>Sumber : WHO</small>
                            </div>
                        </div>
                    </div>
                </div>

                
                
                

                <div className="row">

                    <div className="col-12">
                        <div className=" text-center my-5 bg-white p-md-5 p-2" style={{borderRadius:"20px"}}>
                            <h2>Saran</h2>
                            <hr/>
                            <h3 className="my-5">Perlengkapan Perlindungan dari Covid-19</h3>
                            <div class="row">
                    <div class="col-md-3 col-12">
                        
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="horizontal">
                            <a class="nav-link active bg-black" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">General</a>
                            <a class="nav-link " id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Medical Staff</a>
                        
                        </div>
                    </div>
                    <div class="col-md-9 col-12">
                        <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <img src={require('../assets/img/advice/generaladvice.png')} alt="aa" className="mb-5 mb-0"/>
                                    </div>
                                    <div className="col-md-6 col-12">

                                        <div className="row text-md-left text-center">
                                            <div className="col-12 mb-4">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <img className="w-100" src={require('../assets/img/advice/facemask.png')} alt=""/>

                                                    </div>
                                                    <div className="col d-flex align-items-center text-left">
                                                        <h3>Face Mask</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 mb-4">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <img className="w-100" src={require('../assets/img/advice/washhands.png')} alt=""/>

                                                    </div>
                                                    <div className="col d-flex align-items-center text-left">
                                                        <h3>Wash Hands</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 mb-4">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <img className="w-100" src={require('../assets/img/advice/avoidcontact.png')} alt=""/>

                                                    </div>
                                                    <div className="col d-flex align-items-center text-left">
                                                        <h3>Avoid Contact</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 mb-4">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <img className="w-100" src={require('../assets/img/advice/donttouchface.png')} alt=""/>

                                                    </div>
                                                    <div className="col d-flex align-items-center text-left">
                                                        <h3>Don't Touch Face</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 mb-4">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <img className="w-100" src={require('../assets/img/advice/keepdistance.png')} alt=""/>

                                                    </div>
                                                    <div className="col d-flex align-items-center text-left">
                                                        <h3>Keep Distance</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                            
                            <div class="tab-pane fade  " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <img src={require('../assets/img/advice/medicalstaff.png')} alt="aa" className="mb-5 mb-0"/>
                                    </div>
                                    <div className="col-md-6 col-12">

                                        <div className="row text-md-left text-center">
                                            <div className="col-12 mb-4">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <img className="w-100" src={require('../assets/img/advice/eyegear.png')} alt=""/>

                                                    </div>
                                                    <div className="col d-flex align-items-center text-left">
                                                        <h3>Eye Gear</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 mb-4">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <img className="w-100" src={require('../assets/img/advice/n95mask.png')} alt=""/>

                                                    </div>
                                                    <div className="col d-flex align-items-center text-left">
                                                        <h3>N95 Mask</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 mb-4">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <img className="w-100" src={require('../assets/img/advice/disposablecloth.png')} alt=""/>

                                                    </div>
                                                    <div className="col d-flex align-items-center text-left">
                                                        <h3>Disposable Cloth</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 mb-4">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <img className="w-100" src={require('../assets/img/advice/surgicalgloves.png')} alt=""/>

                                                    </div>
                                                    <div className="col d-flex align-items-center text-left">
                                                        <h3>Surgical Gloves</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 mb-4">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <img className="w-100" src={require('../assets/img/advice/shoecover.png')} alt=""/>

                                                    </div>
                                                    <div className="col d-flex align-items-center text-left">
                                                        <h3>Shoe Cover</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                
                                </div>

                            </div>

                            
                            
                        </div>
                    </div>
                </div>

                
                            
                            <div className="row text-left">
                                <div className="col-12">
                                    <hr className="my-5"/>
                                    <h3>Langkah-Langkah perlindungan dasar terhadap Covid-19</h3>
                                    <ol>
                                        <li>
                                            Sering mencuci tangan
                                            <p>Secara teratur dan menyeluruh bersihkan tangan Anda dengan digosok menggunakan air berbasis alkohol atau cuci dengan sabun dan air.

                                            Mengapa? Mencuci tangan dengan sabun dan air atau menggunakan air berbasis alkohol membunuh virus yang mungkin ada di tangan Anda.</p>
                                        </li>
                                        <li>
                                            Menjaga jarak fisik
                                            <p>Pertahankan jarak setidaknya 1 meter antara Anda dan siapa saja yang batuk atau bersin.

                                            Mengapa? Ketika seseorang batuk atau bersin, mereka menyemprotkan tetesan cairan kecil dari hidung atau mulut mereka yang mungkin mengandung virus. Jika Anda terlalu dekat, Anda bisa menghirup tetesan air, termasuk virus COVID-19 jika orang tersebut menderita batuk.</p>
                                        </li>
                                        <li>
                                            Hindari menyentuk mata, hidung, dan mulut
                                            <p> Tangan menyentuh banyak permukaan dan dapat mengambil virus. Setelah terkontaminasi, tangan dapat memindahkan virus ke mata, hidung, atau mulut Anda. Dari sana, virus bisa masuk ke tubuh Anda dan bisa membuat Anda sakit.</p>
                                        </li>
                                        <li>
                                            Mempraktikan kebersihan pernafasan
                                            <p> Pastikan Anda, dan orang-orang di sekitar Anda, mengikuti kebersihan pernapasan yang baik. Ini berarti menutupi mulut dan hidung Anda dengan siku atau jaringan yang tertekuk saat Anda batuk atau bersin. Kemudian segera buang tisu bekas. Dengan mengikuti kebersihan pernafasan yang baik Anda melindungi orang-orang di sekitar Anda dari virus seperti flu, flu dan COVID-19.</p>
                                        </li>
                                        <li>
                                            Jika mengalami demam, batuk, dan kesulitan bernafas, segera cari perawatan medis sejak dini
                                            <p>
                                            Tetap di rumah jika Anda merasa tidak sehat. Jika Anda mengalami demam, batuk dan kesulitan bernapas, cari bantuan medis dan hubungi terlebih dahulu. Ikuti arahan otoritas kesehatan setempat Anda. Otoritas nasional dan lokal akan memiliki informasi terbaru tentang situasi di daerah Anda. Menelepon terlebih dahulu akan memungkinkan penyedia layanan kesehatan Anda dengan cepat mengarahkan Anda ke fasilitas kesehatan yang tepat. Ini juga akan melindungi Anda dan membantu mencegah penyebaran virus dan infeksi lainnya.

                                            </p>
                                        </li>
                                        <li>
                                            Tetap update informasi dan ikuti saran yang diberikan layanan kesehatan setempat
                                            <p>
                                            Tetap update informasi tentang perkembangan terbaru tentang COVID-19. Ikuti saran yang diberikan oleh penyedia layanan kesehatan Anda, otoritas kesehatan publik nasional dan lokal Anda atau majikan Anda tentang cara melindungi diri sendiri dan orang lain dari COVID-19. Otoritas nasional dan lokal akan memiliki informasi terbaru tentang apakah COVID-19 menyebar di daerah Anda. Mereka ditempatkan paling baik untuk memberi nasihat tentang apa yang harus dilakukan orang di daerah Anda untuk melindungi diri mereka sendiri.
                                            </p>
                                        </li>
                                    </ol>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-12">
                        <div className=" text-center my-5 bg-white p-md-5 pb-2 p-2" style={{borderRadius:"20px"}}>
                            <h2>Mitos & Fakta</h2>
                            <hr/>
                            <div className="row ">
                                <div className="col-md-6 col-12 p-md-5 pb-2 ">
                                    <img className="w-100 rounded-lg" src={require('../assets/img/post/post-01.png')} alt="post1"/>
                                </div>
                                <div className="col-md-6 col-12 p-md-5 pb-2 ">
                                    <img className="w-100 rounded-lg" src={require('../assets/img/post/post-02.png')} alt="post1"/>
                                </div>
                                <div className="col-md-6 col-12 p-md-5 pb-2 ">
                                    <img className="w-100 rounded-lg" src={require('../assets/img/post/post-03.png')} alt="post1"/>
                                </div>  
                                <div className="col-md-6 col-12 p-md-5 pb-2 ">
                                    <img className="w-100 rounded-lg" src={require('../assets/img/post/post-04.png')} alt="post1"/>
                                </div>  
                                <div className="col-md-6 col-12 p-md-5 pb-2 ">
                                    <img className="w-100 rounded-lg" src={require('../assets/img/post/post-05.png')} alt="post1"/>
                                </div>  
                                <div className="col-md-6 col-12 p-md-5 pb-2 ">
                                    <img className="w-100 rounded-lg" src={require('../assets/img/post/post-06.png')} alt="post1"/>
                                </div>  
                                <div className="col-md-6 col-12 p-md-5 pb-2 ">
                                    <img className="w-100 rounded-lg" src={require('../assets/img/post/post-07.png')} alt="post1"/>
                                </div>  
                                <div className="col-md-6 col-12 p-md-5 pb-2 ">
                                    <img className="w-100" src={require('../assets/img/post/post-08.png')} alt="post1"/>
                                </div>  
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>



            </header>
        )
    }
}

export default Konten;