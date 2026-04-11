import {useState} from "react";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import Konstan from "../../helper/Konstan";
import Rute from "../../helper/Rute";
import logo from "../../asset/gambar/logo_jmpmfi.png"
import backgroundlogin from "../../asset/gambar/login.jpg"

export default function Login(){

    const [tipe, setTipe] = useState("password")
    const history = useHistory()
    const [paramlogin,setParamlogin] = useState({})
    const [loading,setLoading] = useState(false)
    const {register, handleSubmit,formState: { errors } }= useForm();

    const toggleTipe = () => {
        if (tipe === "password"){
            setTipe("text")
        }else{
            setTipe("password")
        }
    }

    const doLogin = data => {
        if (data.nama === '' && data.sandi === '' ){
            alert("Username dan password harus diisi")
        }else{
            if (data.nama === 'admin' && data.sandi === 'nimda'){
                localStorage.setItem(Konstan.KEY_ISLOGIN, Konstan.KEY_LOGIN_SUKSES)
                history.push(Rute.home)
            }else{
                alert("Login salah")
            }
        }
    }

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
                        <a className="navbar-brand" href="http://www.jaccs-mpmfinance.com">JMCARE ADMIN</a>
                    </div>
                    <div className="collapse navbar-collapse">

                    </div>
                </div>
            </nav>
            <div className="wrapper wrapper-full-page">
                <div className="full-page login-page background-login" filter-color="black" data-image={backgroundlogin}>
                    <div className="content">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                                    <form id="form" onSubmit={handleSubmit(doLogin)}>
                                        <div className="card card-login">
                                            {/*<div className="card-header text-center" data-background-color="green">*/}
                                            {/*    <h5 className="card-title">LOGIN</h5>*/}
                                            {/*</div>*/}
                                            <div className="card-content">
                                                <br/>
                                                <br/>
                                                <img className="img_logo_login" src={logo}/>
                                                <br/>

                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="material-icons">face</i>
                                                    </span>
                                                    <div className="form-group label-floating">
                                                        <label className="control-label">NRK</label>
                                                        <input {...register("nama", {required: 'Isilah NRK dengan benar'})}
                                                               type="text"
                                                               className="form-control"/>
                                                        <div className="text-danger markdown">{errors.nama &&
                                                            <p>{errors.nama.message}</p>}</div>
                                                    </div>

                                                </div>
                                                <div className="input-group">
                                                    <span onClick={() => toggleTipe()} className="input-group-addon">
                                                        <i className="material-icons"> {tipe === "password" ? "lock" : "lock_outline"} </i>
                                                    </span>
                                                    <div className="form-group label-floating">
                                                        <label className="control-label">Password</label>
                                                        <input {...register("sandi", {required: 'Isi password dengan benar'})} type={tipe}
                                                               className="form-control"/>
                                                        <div className="text-danger markdown">{errors.sandi &&
                                                            <p>{errors.sandi.message}</p>}</div>
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