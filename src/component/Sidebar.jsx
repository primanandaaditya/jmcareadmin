import {Link} from "react-router-dom";
import Rute from "../helper/Rute";
import {useHistory} from "react-router-dom";
import Konstan from "../helper/Konstan";
import avatar from "../asset/gambar/avatar.png"
import sidebar from "../asset/gambar/sidebar.jpg"
import React, { useState, useEffect } from 'react';
import logo from '../asset/gambar/logo_jmpmfi.png'


export default function Sidebar(){
    const history = useHistory()
    const logout = () => {
        localStorage.setItem(Konstan.KEY_ISLOGIN, false)
        history.push("/")
    }

    return(
        <div>
            <div className="samping">
                <div className="logo-details">
                    <img width="220" height="50" src={logo}/>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to={Rute.home}>
                            <i className="material-icons">apps</i>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to={Rute.faq}>
                            <i className="material-icons">apps</i>
                            FAQ
                        </Link>
                    </li>
                    <li>
                        <Link to={"/user/list"}>
                            <i className="material-icons">apps</i>
                            User
                        </Link>
                    </li>
                    <li>
                        <Link to={"/user/gantipassword"}>
                            <i className="material-icons">apps</i>
                            Ganti password
                        </Link>
                    </li>
                    <li>
                        <Link to={"/user/kontrak"}>
                            <i className="material-icons">apps</i>
                            Kontrak
                        </Link>
                    </li>
                    <li>
                        <Link to={"/user/agreementcard"}>
                            <i className="material-icons">apps</i>
                            Agreement Card
                        </Link>
                    </li>
                    <li>
                        <Link to={"/user/epolis"}>
                            <i className="material-icons">apps</i>
                            ePolis
                        </Link>
                    </li>
                    <li>
                        <Link to={"/user/econtract"}>
                            <i className="material-icons">apps</i>
                            eContract
                        </Link>
                    </li>
                    <li>
                        <Link to={"/user/klaim_asuransi"}>
                            <i className="material-icons">apps</i>
                            Klaim Asuransi
                        </Link>
                    </li>
                    <li>
                        <Link to={"/website_artikel"}>
                            <i className="material-icons">apps</i>
                            Website Artikel
                        </Link>
                    </li>
                    <li>
                        <Link to={"/website_banner"}>
                            <i className="material-icons">apps</i>
                            Website Banner
                        </Link>
                    </li>
                    <li>
                        <Link to={"/website_produk"}>
                            <i className="material-icons">apps</i>
                            Website Produk
                        </Link>
                    </li>
                    <li>
                        <Link to={"/eContract/list_pengaduan"}>
                            <i className="material-icons">apps</i>
                            Pengaduan eContract
                        </Link>
                    </li>
                    <li>
                        <Link to={"/pengaduan_klaim_asuransi"}>
                            <i className="material-icons">apps</i>
                            Pengaduan Klaim Asuransi
                        </Link>
                    </li>
                    <li>
                        <Link to={"/grafik/user_bulanan"}>
                            <i className="material-icons">apps</i>
                            Grafik
                        </Link>
                    </li>

                    <li>
                        <div className="profile-details">
                            <div className="">
                                <img width="30" height="30" src={avatar}/>
                            </div>
                            <div className="name-job">
                                <div className="profile_name">Selamat Datang</div>
                                <div className="job">ADMIN</div>
                                <div onClick={() => logout()} className="job">Logout</div>
                            </div>
                            <i className="bx bx-log-out"></i>
                        </div>
                    </li>
                    <br/>
                    <br/>

                </ul>
            </div>

        </div>

        // <div>
        //     <div className="sidebar" data-active-color="green" data-background-color="black" data-image={sidebar}>
        //         <div className="logo">
        //             <a href="http://www.creative-tim.com/" className="simple-text">
        //                 JMCARE ADMIN
        //             </a>
        //         </div>
        //         <div className="sidebar-wrapper" >
        //             <div className="user">
        //                 <div className="photo">
        //                     <img src={avatar}/>
        //                 </div>
        //                 <div className="info">
        //                     <a data-toggle="collapse" href="#collapseExample" className="collapsed">
        //                         Administrator
        //                         <b className="caret"></b>
        //                     </a>
        //                     <div className="collapse" id="collapseExample">
        //                         <ul className="nav">
        //                             <li>
        //                                 <a onClick={() => logout()} >Logout</a>
        //                             </li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //             </div>
        //             <ul className="nav">
        //                 <li>
        //                     <Link to={Rute.home}>
        //                         <i className="material-icons">apps</i>
        //                         Dashboard
        //                     </Link>
        //                 </li>
        //                 <li>
        //                     <Link to={Rute.faq}>
        //                         <i className="material-icons">apps</i>
        //                         FAQ
        //                     </Link>
        //                 </li>
        //                 <li>
        //                     <a data-toggle="collapse" href="#pagesExamples">
        //                         <i className="material-icons">apps</i>
        //                         <p>User
        //                             <b className="caret"></b>
        //                         </p>
        //                     </a>
        //                     <div className="collapse" id="pagesExamples">
        //                         <ul className="nav">
        //                             <li>
        //                                 <Link to={"/user/list"}>
        //                                     <i className="material-icons">apps</i>
        //                                     Daftar
        //                                 </Link>
        //                             </li>
        //                             <li>
        //                                 <Link to={"/user/gantipassword"}>
        //                                     <i className="material-icons">apps</i>
        //                                     Ganti password
        //                                 </Link>
        //                             </li>
        //                             <li>
        //                                 <Link to={"/user/kontrak"}>
        //                                     <i className="material-icons">apps</i>
        //                                     Kontrak
        //                                 </Link>
        //                             </li>
        //                             <li>
        //                                 <Link to={"/user/agreementcard"}>
        //                                     <i className="material-icons">apps</i>
        //                                     Agreement Card
        //                                 </Link>
        //                             </li>
        //                             <li>
        //                                 <Link to={"/user/epolis"}>
        //                                     <i className="material-icons">apps</i>
        //                                     ePolis
        //                                 </Link>
        //                             </li>
        //                             <li>
        //                                 <Link to={"/user/econtract"}>
        //                                     <i className="material-icons">apps</i>
        //                                     eContract
        //                                 </Link>
        //                             </li>
        //                             <li>
        //                                 <Link to={"/user/klaim_asuransi"}>
        //                                     <i className="material-icons">apps</i>
        //                                     Klaim Asuransi
        //                                 </Link>
        //                             </li>
        //                         </ul>
        //                     </div>
        //                 </li>
        //                 <li>
        //                     <a data-toggle="collapse" href="#componentsExamples">
        //                         <i className="material-icons">apps</i>
        //                         <p>Website
        //                             <b className="caret"></b>
        //                         </p>
        //                     </a>
        //                     <div className="collapse" id="componentsExamples">
        //                         <ul className="nav">
        //                             <li>
        //                                 <Link to={"/website_artikel"}>
        //                                     <i className="material-icons">apps</i>
        //                                     Artikel
        //                                 </Link>
        //                             </li>
        //                             <li>
        //                                 <Link to={"/website_banner"}>
        //                                     <i className="material-icons">apps</i>
        //                                     Banner
        //                                 </Link>
        //                             </li>
        //                             <li>
        //                                 <Link to={"/website_produk"}>
        //                                     <i className="material-icons">apps</i>
        //                                     Produk
        //                                 </Link>
        //                             </li>
        //                         </ul>
        //                     </div>
        //                 </li>
        //                 <li>
        //                     <a data-toggle="collapse" href="#componentsExamples2">
        //                         <i className="material-icons">apps</i>
        //                         <p>Pengaduan
        //                             <b className="caret"></b>
        //                         </p>
        //                     </a>
        //                     <div className="collapse" id="componentsExamples2">
        //                         <ul className="nav">
        //                             <li>
        //                                 <Link to={"/eContract/list_pengaduan"}>
        //                                     <i className="material-icons">apps</i>
        //                                     eContract
        //                                 </Link>
        //                             </li>
        //                             <li>
        //                                 <Link to={"/pengaduan_klaim_asuransi"}>
        //                                     <i className="material-icons">apps</i>
        //                                     Klaim asuransi
        //                                 </Link>
        //                             </li>
        //                         </ul>
        //                     </div>
        //                 </li>
        //                 <li>
        //                     <a data-toggle="collapse" href="#componentsExamplesGrafik">
        //                         <i className="material-icons">apps</i>
        //                         <p>Grafik
        //                             <b className="caret"></b>
        //                         </p>
        //                     </a>
        //                     <div className="collapse" id="componentsExamplesGrafik">
        //                         <ul className="nav">
        //                             <li>
        //                                 <Link to={"/grafik/user_bulanan"}>
        //                                     <i className="material-icons">apps</i>
        //                                     User
        //                                 </Link>
        //                             </li>
        //                         </ul>
        //                     </div>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </div>
    )
}