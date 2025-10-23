export default function Plugin() {
    return(
        <div>
            <div className="fixed-plugin">
                <div className="dropdown show-dropdown">
                    <a href="#" data-toggle="dropdown">
                        <i className="fa fa-cog fa-2x"> </i>
                    </a>
                    <ul className="dropdown-menu">
                        <li className="header-title"> Sidebar Filters</li>
                        <li className="adjustments-line">
                            <a href="javascript:void(0)" className="switch-trigger active-color">
                                <div className="badge-colors text-center">
                                    <span className="badge filter badge-purple" data-color="purple"></span>
                                    <span className="badge filter badge-blue" data-color="blue"></span>
                                    <span className="badge filter badge-green" data-color="green"></span>
                                    <span className="badge filter badge-orange" data-color="orange"></span>
                                    <span className="badge filter badge-red" data-color="red"></span>
                                    <span className="badge filter badge-rose active" data-color="rose"></span>
                                </div>
                                <div className="clearfix"></div>
                            </a>
                        </li>
                        <li className="header-title">Sidebar Background</li>
                        <li className="adjustments-line">
                            <a href="javascript:void(0)" className="switch-trigger background-color">
                                <div className="text-center">
                                    <span className="badge filter badge-white" data-color="white"></span>
                                    <span className="badge filter badge-black active" data-color="black"></span>
                                </div>
                                <div className="clearfix"></div>
                            </a>
                        </li>
                        <li className="adjustments-line">
                            <a href="javascript:void(0)" className="switch-trigger">
                                <p>Sidebar Mini</p>
                                <div className="togglebutton switch-sidebar-mini">
                                    <label>
                                        <input type="checkbox" unchecked=""/>
                                    </label>
                                </div>
                                <div className="clearfix"></div>
                            </a>
                        </li>
                        <li className="adjustments-line">
                            <a href="javascript:void(0)" className="switch-trigger">
                                <p>Sidebar Image</p>
                                <div className="togglebutton switch-sidebar-image">
                                    <label>
                                        <input type="checkbox" checked=""/>
                                    </label>
                                </div>
                                <div className="clearfix"></div>
                            </a>
                        </li>
                        <li className="header-title">Images</li>
                        <li className="active">
                            <a className="img-holder switch-trigger" href="javascript:void(0)">
                                <img src="../assets/img/sidebar-1.jpg" alt=""/>
                            </a>
                        </li>
                        <li>
                            <a className="img-holder switch-trigger" href="javascript:void(0)">
                                <img src="../assets/img/sidebar-2.jpg" alt=""/>
                            </a>
                        </li>
                        <li>
                            <a className="img-holder switch-trigger" href="javascript:void(0)">
                                <img src="../assets/img/sidebar-3.jpg" alt=""/>
                            </a>
                        </li>
                        <li>
                            <a className="img-holder switch-trigger" href="javascript:void(0)">
                                <img src="../assets/img/sidebar-4.jpg" alt=""/>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}