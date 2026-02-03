import {Link} from "react-router-dom";
import Rute from "../helper/Rute";
import {useHistory} from "react-router-dom";
import Konstan from "../helper/Konstan";
import avatar from "../asset/gambar/avatar.png"
import sidebar from "../asset/gambar/sidebar.jpg"

export default function Sidebar(){

    const history = useHistory()

    const logout = () => {
        localStorage.setItem(Konstan.KEY_ISLOGIN, false)
        history.push("/")
    }

    return(
        <div>
            <div className="sidebar" data-active-color="rose" data-background-color="black"
                 data-image={sidebar}>
                <div className="logo">
                    <a href="http://www.creative-tim.com/" className="simple-text">
                        JMCARE ADMIN
                    </a>
                </div>
                <div className="logo logo-mini">
                    <a href="http://www.creative-tim.com/" className="simple-text">
                        Ct
                    </a>
                </div>
                <div className="sidebar-wrapper">
                    <div className="user">
                        <div className="photo">
                            <img src={avatar}/>
                        </div>
                        <div className="info">
                            <a data-toggle="collapse" href="#collapseExample" className="collapsed">
                                Administrator
                                <b className="caret"></b>
                            </a>
                            <div className="collapse" id="collapseExample">
                                <ul className="nav">
                                    <li>
                                        <a onClick={() => logout()} >Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ul className="nav">
                        <li>
                            <Link to={Rute.faq}>
                                <i className="material-icons">widgets</i>
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <a data-toggle="collapse" href="#pagesExamples">
                                <i className="material-icons">widgets</i>
                                <p>User JMCare
                                    <b className="caret"></b>
                                </p>
                            </a>
                            <div className="collapse" id="pagesExamples">
                                <ul className="nav">
                                    <li>
                                        <Link to={"/user/list"}>
                                            <i className="material-icons">widgets</i>
                                            Daftar
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/user/gantipassword"}>
                                            <i className="material-icons">widgets</i>
                                            Ganti password
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/user/kontrak"}>
                                            <i className="material-icons">widgets</i>
                                            Kontrak
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/user/agreementcard"}>
                                            <i className="material-icons">widgets</i>
                                            Agreement Card
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/user/epolis"}>
                                            <i className="material-icons">widgets</i>
                                            ePolis
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/user/econtract"}>
                                            <i className="material-icons">widgets</i>
                                            eContract
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/user/klaim_asuransi"}>
                                            <i className="material-icons">widgets</i>
                                            Klaim Asuransi
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a data-toggle="collapse" href="#componentsExamples">
                                <i className="material-icons">apps</i>
                                <p>Website
                                    <b className="caret"></b>
                                </p>
                            </a>
                            <div className="collapse" id="componentsExamples">
                                <ul className="nav">
                                    <li>
                                        <Link to={"/website_artikel"}>
                                            <i className="material-icons">widgets</i>
                                            Artikel
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/website_banner"}>
                                            <i className="material-icons">widgets</i>
                                            Banner
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/website_produk"}>
                                            <i className="material-icons">widgets</i>
                                            Produk
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a data-toggle="collapse" href="#componentsExamples2">
                                <i className="material-icons">apps</i>
                                <p>Pengaduan
                                    <b className="caret"></b>
                                </p>
                            </a>
                            <div className="collapse" id="componentsExamples2">
                                <ul className="nav">
                                    <li>
                                        <Link to={"/eContract/list_pengaduan"}>
                                            <i className="material-icons">widgets</i>
                                            eContract
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/pengaduan_klaim_asuransi"}>
                                            <i className="material-icons">widgets</i>
                                            Klaim asuransi
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <a data-toggle="collapse" href="#mapsExamples">
                                <i className="material-icons">place</i>
                                <p>Maps
                                    <b className="caret"></b>
                                </p>
                            </a>
                            <div className="collapse" id="mapsExamples">
                                <ul className="nav">
                                    <li>
                                        <a href="maps/google.html">Google Maps</a>
                                    </li>
                                    <li>
                                        <a href="maps/fullscreen.html">Full Screen Map</a>
                                    </li>
                                    <li>
                                        <a href="maps/vector.html">Vector Map</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="widgets.html">
                                <i className="material-icons">widgets</i>
                                <p>Widgets</p>
                            </a>
                        </li>
                        <li>
                            <a href="charts.html">
                                <i className="material-icons">timeline</i>
                                <p>Charts</p>
                            </a>
                        </li>
                        <li>
                            <a href="calendar.html">
                                <i className="material-icons">date_range</i>
                                <p>Calendar</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}