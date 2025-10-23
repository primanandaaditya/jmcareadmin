import {useState} from "react";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from "axios";
import Endpoint from "../../helper/Endpoint";
import Konstan from "../../helper/Konstan";
import Rute from "../../helper/Rute";

export default function Login(){

    const [tipe, setTipe] = useState("password")
    const history = useHistory()
    const [paramlogin,setParamlogin] = useState({})
    const [loading,setLoading] = useState(false)
    const {register, handleSubmit, errors}= useForm();

    const toggleTipe = () => {
        if (tipe === "password"){
            setTipe("text")
        }else{
            setTipe("password")
        }
    }

    const doLogin = data => {
        if (data.nama === 'admin' && data.sandi === 'nimda'){
            localStorage.setItem(Konstan.KEY_ISLOGIN, Konstan.KEY_LOGIN_SUKSES)
            history.push(Rute.home)
        }else{
            alert("Login salah")
        }
    }

    // const doLogin = data => {
    //     setLoading(true)
    //     axios.post(Endpoint.BASE_URL + Endpoint.login, data)
    //     .then(res => {
    //         console.clear()
    //         setLoading(false)
    //         console.log(res.data)
    //         if (res.data.error === true){
    //             alert("Login gagal")
    //         }else{
    //             localStorage.setItem(Konstan.KEY_ISLOGIN, Konstan.KEY_LOGIN_SUKSES)
    //             localStorage.setItem(Konstan.KEY_NAMA, res.data.pesan.nama)
    //             localStorage.setItem(Konstan.KEY_USER_ID, res.data.pesan.id)
    //             history.push(Rute.home)
    //         }
    //
    //     }).catch(function (error) {
    //         alert(error)
    //         setLoading(false)
    //     })
    // }


    return(
        <div>
            <nav className="navbar navbar-primary navbar-transparent navbar-absolute">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target="#navigation-example-2">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="http://www.jaccs-mpmfinance.com">JACCS MPM Finance</a>
                    </div>
                    <div className="collapse navbar-collapse">

                    </div>
                </div>
            </nav>
            <div className="wrapper wrapper-full-page">
                <div className="full-page login-page" filter-color="black" data-image="./assets/img/login.jpg">
                    <div className="content">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                                    <form id="form" onSubmit={handleSubmit(doLogin)}>
                                        <div className="card card-login">
                                            <div className="card-header text-center" data-background-color="green">
                                                <h5 className="card-title">LOGIN</h5>
                                            </div>
                                            <div className="card-content">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="material-icons">face</i>
                                                    </span>
                                                    <div className="form-group label-floating">
                                                        <label className="control-label">NRK</label>
                                                        <input {...register("nama", {required : true})} type="text" className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="input-group">
                                                    <span onClick={() => toggleTipe()} className="input-group-addon">
                                                        <i className="material-icons"> { tipe === "password" ? "lock" : "lock_outline" } </i>
                                                    </span>
                                                    <div className="form-group label-floating">
                                                        <label className="control-label">Password</label>
                                                        <input {...register("sandi",{required:true})} type={ tipe } className="form-control"/>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="footer text-center">
                                                { loading ? <p>Loading...</p> :
                                                <button type="submit" className="btn btn-success">Submit</button>}
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}