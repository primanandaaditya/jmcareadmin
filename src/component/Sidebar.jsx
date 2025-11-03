import {Link} from "react-router-dom";
import Rute from "../helper/Rute";
import {useHistory} from "react-router-dom";
import Konstan from "../helper/Konstan";

export default function Sidebar(){

    const history = useHistory()

    const logout = () => {
        localStorage.setItem(Konstan.KEY_ISLOGIN, false)
        history.push("/")
    }

    return(
        <div>
            <div className="sidebar" data-active-color="rose" data-background-color="black"
                 data-image="../assets/img/sidebar-1.jpg">
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
                            <img src="../assets/img/default-avatar.png"/>
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
                                <p>User
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
                                        <a href="pages/timeline.html">Timeline</a>
                                    </li>
                                    <li>
                                        <a href="pages/login.html">Login Page</a>
                                    </li>
                                    <li>
                                        <a href="pages/register.html">Register Page</a>
                                    </li>
                                    <li>
                                        <a href="pages/lock.html">Lock Screen Page</a>
                                    </li>
                                    <li>
                                        <a href="pages/user.html">User Profile</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a data-toggle="collapse" href="#componentsExamples">
                                <i className="material-icons">apps</i>
                                <p>Components
                                    <b className="caret"></b>
                                </p>
                            </a>
                            <div className="collapse" id="componentsExamples">
                                <ul className="nav">
                                    <li>
                                        <a href="components/buttons.html">Buttons</a>
                                    </li>
                                    <li>
                                        <a href="components/grid.html">Grid System</a>
                                    </li>
                                    <li>
                                        <a href="components/panels.html">Panels</a>
                                    </li>
                                    <li>
                                        <a href="components/sweet-alert.html">Sweet Alert</a>
                                    </li>
                                    <li>
                                        <a href="components/notifications.html">Notifications</a>
                                    </li>
                                    <li>
                                        <a href="components/icons.html">Icons</a>
                                    </li>
                                    <li>
                                        <a href="components/typography.html">Typography</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a data-toggle="collapse" href="#formsExamples">
                                <i className="material-icons">content_paste</i>
                                <p>Forms
                                    <b className="caret"></b>
                                </p>
                            </a>
                            <div className="collapse" id="formsExamples">
                                <ul className="nav">
                                    <li>
                                        <a href="forms/regular.html">Regular Forms</a>
                                    </li>
                                    <li>
                                        <a href="forms/extended.html">Extended Forms</a>
                                    </li>
                                    <li>
                                        <a href="forms/validation.html">Validation Forms</a>
                                    </li>
                                    <li>
                                        <a href="forms/wizard.html">Wizard</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a data-toggle="collapse" href="#tablesExamples">
                                <i className="material-icons">grid_on</i>
                                <p>Tables
                                    <b className="caret"></b>
                                </p>
                            </a>
                            <div className="collapse" id="tablesExamples">
                                <ul className="nav">
                                    <li>
                                        <a href="tables/regular.html">Regular Tables</a>
                                    </li>
                                    <li>
                                        <a href="tables/extended.html">Extended Tables</a>
                                    </li>
                                    <li>
                                        <a href="tables/datatables.net.html">DataTables.net</a>
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