import ContentWrapper from "../../component/ContentWrapper";
import Konstan from "../../helper/Konstan";
import {Link, useHistory, useParams} from "react-router-dom";
import Rute from "../../helper/Rute";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import axios from "axios";
import Endpoint from "../../helper/Endpoint";
import Loading from "../../component/Loading/001/Loading";

export default function Gantipassword(){

    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({});
    let { id } = useParams();
    const [loading,setLoading] = useState(false)
    const history = useHistory();

    useEffect( () => {
        console.clear()
        // console.log(id)
        // console.log(atob(id))
        let jso = JSON.parse(atob(id));
        setValue("login_user_id", jso.login_user_id)
    },[])

    const doGantiPassword = data => {
        setLoading(true)
        axios.post(Endpoint.BASE_URL + Endpoint.user_gantipassword, data)
            .then(res => {
                setLoading(false)
                console.log(res.data)
                if (res.data.isSuccess === true) {
                    // eslint-disable-next-line no-undef
                    suksesToast(res.data.payload)
                    history.push("/user/gantipassword");
                }else{
                    // eslint-disable-next-line no-undef
                    errorToast(res.data.payload)
                }
            }).catch(function (error) {
            // eslint-disable-next-line no-undef
            errorToast(error)
            setLoading(false)
        })
    }

    return(
        <div>
            <ContentWrapper title="Ganti Password">
                <br/>
                <br/>
                <div className="navbar-form navbar-right" role="search">
                    <div></div>
                </div>
                <div className="card">
                    <div className="card-header card-header-icon" data-background-color="rose">
                        <i className="material-icons">apps</i>
                    </div>
                    <div className="card-content">
                        <h4 className="card-title">Ganti Password</h4>
                        { loading ? <Loading/> :
                        <form onSubmit={handleSubmit(doGantiPassword)}>
                            <input
                                value={0}
                                type="hidden" {...register("login_user_id")}
                            />

                            <div className="row">
                                <div className="col-md-4">

                                </div>
                                <div className="col-md-4">
                                    <div className="form-group label-floating">
                                        <label className="control-label">Password baru
                                            <star>*</star>
                                        </label>
                                        <input {...register("password", {required: true})}
                                               className="form-control"
                                               type="text"
                                               required="true"/>
                                    </div>

                                    <div className="category form-category">
                                        <star>*</star>
                                        Wajib diisi
                                    </div>
                                    <div className="text-center">
                                        <Link to={"/user/gantipassword"}
                                              className="btn btn-primary btn-simple">Kembali</Link>
                                        <button
                                            type="submit"
                                            className="btn btn-rose btn-fill btn-wd">Submit
                                        </button>
                                    </div>
                                </div>
                                <div className="col-md-4">

                                </div>
                            </div>

                        </form>}
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}