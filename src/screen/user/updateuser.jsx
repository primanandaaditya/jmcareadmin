import ContentWrapper from "../../component/ContentWrapper";
import {useForm} from "react-hook-form";
import Konstan from "../../helper/Konstan";
import axios from "axios";
import Endpoint from "../../helper/Endpoint";
import Loading from "../../component/Loading/001/Loading";
import Rute from "../../helper/Rute";
import {Link, useHistory, useParams} from "react-router-dom";
import {useEffect, useState} from "react";


export default function Updateuser(){

    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({});
    let { id } = useParams();
    const [loading,setLoading] = useState(false)
    const [loadpekerjaan,setLoadpekerjaan] = useState({})
    const [datapekerjaan,setDatapekerjaan] = useState([])
    const history = useHistory();


    async function getPekerjaan() {

        setLoadpekerjaan(true)
        axios.post(Endpoint.BASE_URL + Endpoint.pekerjaan)
            .then(res => {
                setLoadpekerjaan(false)
                console.log(res.data)
                if (res.data.isSuccess === true) {
                    setDatapekerjaan(res.data.payload)
                }else{
                    // eslint-disable-next-line no-undef
                    errorToast(res.data.message)
                }
            }).catch(function (error) {
            // eslint-disable-next-line no-undef
            errorToast(error)
            setLoading(false)
        })
    }

    useEffect( () => {
        console.clear()
        console.log(id)
        getPekerjaan()
        if (id !== Konstan.tag_insert){
            // console.log(atob(id))
            // let jso = JSON.parse(atob(id));
            // setValue("pertanyaan", jso.pertanyaan)
            // setValue("jawaban", jso.jawaban)
            // setValue("id", jso.id)
            // setValue("isInsert","0")
        }else{
            // setValue("id", 0)
            // setValue("isInsert","1")
        }
    },[])

    return (
        <div>
            {loading ? <Loading/> :
                <ContentWrapper title={id === 'insert' ? 'Tambah User' : 'Edit User'}>
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
                            <h4 className="card-title">{id === Konstan.tag_insert ? 'Tambah User' : 'Update User'}</h4>
                            <form>
                                <input
                                    value={Konstan.tag_administrator}
                                    type="hidden" {...register("create_by")}
                                />
                                <input
                                    value={0}
                                    type="hidden" {...register("id")}
                                />
                                <input
                                    value={"1"}
                                    type="hidden" {...register("isInsert")}
                                />
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Nama lengkap
                                                <star>*</star>
                                            </label>
                                            <input {...register("nama", {required: true})}
                                                   className="form-control"
                                                   type="text"
                                                   required="true"/>
                                            {errors.nama && <span>{Konstan.tag_wajib_diisi}</span>}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Alamat
                                            </label>
                                            <input {...register("alamat")}
                                                   className="form-control"
                                                   type="text"
                                                   required="true"/>

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group label-floating">
                                            <label className="control-label">No. KTP
                                            </label>
                                            <input {...register("no_ktp")}
                                                   className="form-control"
                                                   type="number"
                                                   required="true"/>

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group label-floating">
                                            <label className="control-label">No. HP
                                                <star>*</star>
                                            </label>
                                            <input {...register("no_hp", {required: true})}
                                                   className="form-control"
                                                   type="number"
                                                   required="true"/>
                                            {errors.no_hp && <span>{Konstan.tag_wajib_diisi}</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Email
                                                <star>*</star>
                                            </label>
                                            <input {...register("email", {required: true})}
                                                   className="form-control"
                                                   type="text"
                                                   required="true"/>
                                            {errors.email && <span>{Konstan.tag_wajib_diisi}</span>}
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Tempat lahir
                                            </label>
                                            <input {...register("tempat")}
                                                   className="form-control"
                                                   type="text"
                                                   required="true"/>

                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Tanggal lahir
                                            </label>
                                            <input {...register("tgllahir")}
                                                   aria-label="Date and time" type="date"
                                                   className="form-control"/>

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Jenis kelamin
                                            </label>
                                            <select {...register("jeniskelamin")} className="form-control">
                                                <option disabled selected>Pilih salah satu</option>
                                                <option value="M">Laki-laki</option>
                                                <option value="F">Perempuan</option>
                                            </select>

                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Pekerjaan
                                            </label>
                                            <select {...register("pekerjaan")} className="form-control">
                                                <option disabled selected>Pilih salah satu</option>
                                                {datapekerjaan.map(x => (
                                                    <option value={x.nama}>{x.nama}</option>
                                                ))}
                                            </select>

                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Tanggal lahir
                                            </label>
                                            <input {...register("tgllahir")}
                                                   aria-label="Date and time" type="date"
                                                   className="form-control"/>

                                        </div>
                                    </div>
                                </div>

                                {/*<div className="form-group label-floating">*/}
                                {/*    <label className="control-label">Jawaban*/}
                                {/*        <star>*</star>*/}
                                {/*    </label>*/}
                                {/*    <textarea {...register("jawaban", {required: true})}*/}
                                {/*              className="form-control"*/}
                                {/*              rows="5"*/}
                                {/*              required="true"/>*/}
                                {/*    {errors.jawaban && <span>{Konstan.tag_wajib_diisi}</span>}*/}
                                {/*</div>*/}
                                {/*<div className="category form-category">*/}
                                {/*    <star>*</star>*/}
                                {/*    Wajib diisi*/}
                                {/*</div>*/}
                                <div className="text-center">
                                    <Link to={Rute.faq} className="btn btn-primary btn-simple">Kembali</Link>
                                    <button
                                        type="submit"
                                        className="btn btn-rose btn-fill btn-wd">Submit
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </ContentWrapper>}
        </div>
    )
}