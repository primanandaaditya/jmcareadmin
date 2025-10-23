import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const ContentWrapper = (props) => {
    return (
        <div>
            <Sidebar/>
            <div className="main-panel">
                {/*<Navbar title={props.title} />*/}
                <div className="container">
                    <div className="container-fluid">
                        <div id="root">{props.children}</div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}
export default ContentWrapper