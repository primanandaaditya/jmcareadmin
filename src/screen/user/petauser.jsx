import ContentWrapper from "../../component/ContentWrapper";
import Loading from "../../component/Loading/001/Loading";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import $ from "jquery";
export default function PetaUser(){

    const [loading,setLoading] = useState(false)

    useEffect( () => {
        // eslint-disable-next-line no-undef
        initMap()
        //
    },[])

    return(
        <div>
            <ContentWrapper title="Peta User">
                <br/>
                <div className="card">
                    <div className="card-header card-header-icon" data-background-color="rose">
                        <i className="material-icons">apps</i>
                    </div>
                    <div className="card-content">
                        <h4 className="card-title">Peta User</h4>
                        {loading ? <Loading/> :
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card card-plain">
                                        <div className="card-content">
                                            {/*<div id="worldMap" className="map map-big"></div>*/}
                                            <div id="regularMap" className="map"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}