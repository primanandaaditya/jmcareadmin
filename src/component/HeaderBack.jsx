import {Fragment} from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import './css/HeaderBack.css'

const HeaderBack = (props) => {
    const history = useHistory();
    const goback = () => {
        history.goBack()
    }

    return(
        <Fragment>
            <div className="mypadding">
                <div className="">
                    <div className="row">
                        <div className="col-lg-7">
                            <h4 className="card-title">{props.title}</h4>
                        </div>
                        <div className="col-lg-4 text-right">
                            <button
                                onClick={goback}
                                className="btn btn-primary btn-simple btn-sm">&larr;Kembali
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default HeaderBack;
