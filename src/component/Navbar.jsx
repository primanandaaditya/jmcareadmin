const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-transparent navbar-absolute">
                <div className="container-fluid">
                    {/*<div className="navbar-minimize">*/}
                    {/*    <button id="minimizeSidebar" className="btn btn-round btn-white btn-fill btn-just-icon">*/}
                    {/*        <i className="material-icons visible-on-sidebar-regular">more_vert</i>*/}
                    {/*        <i className="material-icons visible-on-sidebar-mini">view_list</i>*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">{ props.title } </a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            {/*<li>*/}
                            {/*    <a className="dropdown-toggle" data-toggle="dropdown">*/}
                            {/*        <i className="material-icons">add</i>*/}
                            {/*        <p className="hidden-lg hidden-md">Dashboard</p>*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                            <li>
                                <a className="btn btn-white btn-round btn-just-icon" data-toggle="dropdown">
                                    <i className="material-icons">add</i>
                                    <p className="hidden-lg hidden-md">Dashboard</p>
                                </a>
                            </li>
                            {/*<li className="dropdown">*/}
                            {/*    <a href="#" className="dropdown-toggle" data-toggle="dropdown">*/}
                            {/*        <i className="material-icons">notifications</i>*/}
                            {/*        <span className="notification">5</span>*/}
                            {/*        <p className="hidden-lg hidden-md">*/}
                            {/*            Notifications*/}
                            {/*            <b className="caret"></b>*/}
                            {/*        </p>*/}
                            {/*    </a>*/}
                            {/*    <ul className="dropdown-menu">*/}
                            {/*        <li>*/}
                            {/*            <a href="#">Mike John responded to your email</a>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <a href="#">You have 5 new tasks</a>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <a href="#">You're now friend with Andrew</a>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <a href="#">Another Notification</a>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <a href="#">Another One</a>*/}
                            {/*        </li>*/}
                            {/*    </ul>*/}
                            {/*</li>*/}

                            <li className="separator hidden-lg hidden-md"></li>
                        </ul>
                        <div className="navbar-form navbar-right" role="search">
                            <div className="form-group form-search is-empty">
                                <input type="text" className="form-control" placeholder="Search"/>
                                <span className="material-input"></span>
                            </div>
                            <button type="submit" className="btn btn-white btn-round btn-just-icon">
                                <i className="material-icons">search</i>
                                <div className="ripple-container"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar