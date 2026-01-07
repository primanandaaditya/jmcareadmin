import {useForm} from "react-hook-form";
import {Link, useHistory, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Loading from "../../../component/Loading/001/Loading";
import ContentWrapper from "../../../component/ContentWrapper";
import Konstan from "../../../helper/Konstan";
import Rute from "../../../helper/Rute";
import axios from "axios";
import Endpoint from "../../../helper/Endpoint";

export default function UpsertWebsiteArtikel(){

    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({});
    let { id } = useParams();
    const [loading,setLoading] = useState(false)
    const [data,setData] = useState({})
    const history = useHistory()

    useEffect( () => {
        if (id !== Konstan.tag_insert){
            let jso = JSON.parse(atob(id));
            console.log(jso.title_id)
            setValue("title_id", jso.title_id)
            setValue("title_en", jso.title_en)
            setValue("subtitle_id", jso.subtitle_id)
            setValue("subtitle_en", jso.subtitle_en)
            setValue("description_id", jso.description_id)
            setValue("description_en", jso.description_en)
            setValue("tipe", jso.tipe)
            setValue("program_id", jso.program_id)
            setValue("gambar", jso.gambar)
            setValue("gambar2", jso.gambar2)
            setValue("gambar3", jso.gambar3)
            setValue("is_active", (!jso.is_active || jso.is_active !== '1' ) ? '0' : jso.is_active)
            console.log(jso.is_active)
            setValue("news_date", jso.news_date)
        }else{
            
        }
    },[])

    const doUpsert = data => {
        console.log(JSON.stringify(data))
        setLoading(true)
        axios.post(Endpoint.BASE_URL + Endpoint.banner_upsert_website_artikel, data)
            .then(res => {
                setLoading(false)
                console.log(res.data)
                if (res.data.isSuccess === true) {
                    // eslint-disable-next-line no-undef
                    suksesToast(res.data.payload)
                    history.push("/website_artikel");
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
            { loading ? <Loading/> :
                <ContentWrapper title={ id === 'insert' ? 'Insert Website Artikel' : 'Update Website Artikel'}>
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
                            <h4 className="card-title">{id === Konstan.tag_insert ? 'Tambah Data' : 'Update Data'}</h4>
                            <form onSubmit={handleSubmit(doUpsert)}>
                                <input
                                    value={Konstan.tag_administrator}
                                    type="hidden" {...register("create_by")}
                                />
                                <input
                                    value={id === Konstan.tag_insert ? 0 : id}
                                    type="hidden" {...register("id")}
                                />
                                <input
                                    value={id === Konstan.tag_insert ? "1" : "0"}
                                    type="hidden" {...register("isInsert")}
                                />

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Title (ID)
                                                <star>*</star>
                                            </label>
                                            <input {...register("title_id", {required: true})}
                                                   className="form-control"
                                                   type="text"
                                                   required="true"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Title (EN)
                                                <star>*</star>
                                            </label>
                                            <input {...register("title_en", {required: true})}
                                                   className="form-control"
                                                   type="text"
                                                   required="true"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Subtitle (ID)
                                                <star>*</star>
                                            </label>
                                            <input {...register("subtitle_id", {required: true})}
                                                   className="form-control"
                                                   type="text"
                                                   required="true"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Subtitle (EN)
                                                <star>*</star>
                                            </label>
                                            <input {...register("subtitle_en", {required: true})}
                                                   className="form-control"
                                                   type="text"
                                                   required="true"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Description (ID)
                                                <star>*</star>
                                            </label>
                                            <textarea {...register("description_id", {required: true})}
                                                      className="form-control"
                                                      type="text"
                                                      rows="3"
                                                      required="true"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Description (EN)
                                                <star>*</star>
                                            </label>
                                            <textarea {...register("description_en", {required: true})}
                                                      className="form-control"
                                                      type="text"
                                                      rows="3"
                                                      required="true"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="form-group label-floating">
                                            <label className="control-label">News Date
                                            </label>
                                            <input {...register("news_date")}
                                                   className="form-control"
                                                   type="date"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Tipe</label>
                                            <input {...register("tipe")}
                                                   className="form-control"
                                                   type="number"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Program ID
                                            </label>
                                            <input {...register("program_id")}
                                                   className="form-control"
                                                   type="number"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Gambar 1
                                            </label>
                                            <input {...register("gambar")}
                                                   placeholder="ex : images/article/20210819_105228_phpfiujob_resized.jpg"
                                                   className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Gambar 2
                                            </label>
                                            <input {...register("gambar2")}
                                                   placeholder="ex : images/article/20210819_105228_phpfiujob_resized.jpg"
                                                   className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Gambar 3
                                            </label>
                                            <input {...register("gambar3")}
                                                   placeholder="ex : images/article/20210819_105228_phpfiujob_resized.jpg"
                                                   className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Aktif
                                            </label>
                                            <select {...register("is_active")} className="form-control">
                                                <option value="1">Ya</option>
                                                <option value="0">Tidak</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="category form-category">
                                    <star>*</star>
                                    Wajib diisi
                                </div>
                                <div className="text-center">
                                    <Link to={"/website_artikel"} className="btn btn-primary btn-simple">Kembali</Link>
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