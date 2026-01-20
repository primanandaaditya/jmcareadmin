import {useForm} from "react-hook-form";
import {Link, useHistory, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Konstan from "../../../helper/Konstan";
import Loading from "../../../component/Loading/001/Loading";
import ContentWrapper from "../../../component/ContentWrapper";
import axios from "axios";
import Endpoint from "../../../helper/Endpoint";

export default function UpsertWebsiteBanner(){
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({});
    let { id } = useParams();
    const [loading,setLoading] = useState(false)
    const [data,setData] = useState({})
    const history = useHistory()
    const [iddata,setIddata] = useState("")

    useEffect( () => {
        if (id !== Konstan.tag_insert){
            let jso = JSON.parse(atob(id));
            // console.log(jso)
            setValue("id", jso.id)
            setIddata(jso.id)
            setValue("name_id", jso.name_id)
            setValue("name_en", jso.name_en)
            setValue("link", jso.link)
            setValue("image", jso.image)
            setValue("description_id", jso.description_id)
            setValue("description_en", jso.description_en)
            setValue("type", jso.type)
            setValue("width", jso.width)
            setValue("height", jso.height)
            setValue("image2", jso.image2)
            setValue("youtube_embed_link", jso.youtube_embed_link)
            setValue("priority", jso.priority)
            setValue("is_active", (!jso.is_active || jso.is_active !== '1' ) ? '0' : jso.is_active)
            // console.log(jso.is_active)
            setValue("news_date", jso.news_date)
        }else{

        }
    },[])

    const doUpsert = data => {
        console.clear()
        console.log("upsert_website_banner")
        console.log(JSON.stringify(data))
        setLoading(true)
        axios.post(Endpoint.BASE_URL + Endpoint.banner_upsert_website_banner, data)
            .then(res => {
                setLoading(false)
                // console.log(res.data)
                if (res.data.isSuccess === true) {
                    // eslint-disable-next-line no-undef
                    suksesToast(res.data.payload)
                    history.push("/website_banner");
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
                <ContentWrapper title={ id === 'insert' ? 'Insert Website Banner' : 'Update Website Banner'}>
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
                                {/*<form>*/}
                                <input
                                    value={Konstan.tag_administrator}
                                    type="hidden" {...register("create_by")}
                                />
                                <input
                                    value={id === Konstan.tag_insert ? 0 : iddata}
                                    type="hidden" {...register("id")}
                                />
                                <input
                                    value={id === Konstan.tag_insert ? "1" : "0"}
                                    type="hidden" {...register("isInsert")}
                                />
                                <input
                                    value={""}
                                    type="hidden" {...register("foreign_id")}
                                />
                                <input
                                    value={""}
                                    type="hidden" {...register("image2")}
                                />
                                <input
                                    value={""}
                                    type="hidden" {...register("timestamp")}
                                />

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Nama (ID)
                                                <star>*</star>
                                            </label>
                                            <input {...register("name_id", {required: true})}
                                                   className="form-control"
                                                   type="text"
                                                   required="true"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Nama (EN)
                                                <star>*</star>
                                            </label>
                                            <input {...register("name_en", {required: true})}
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
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Tipe
                                            </label>
                                            <input {...register("type")}
                                                   className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Link</label>
                                            <input {...register("link")}
                                                   className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Link YouTube
                                            </label>
                                            <input {...register("youtube_embed_link")}
                                                   className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Prioritas
                                            </label>
                                            <input {...register("priority")}
                                                   type="number"
                                                   className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Gambar
                                            </label>
                                            <input {...register("image")}
                                                   placeholder="ex : images/article/20210819_105228_phpfiujob_resized.jpg"
                                                   className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Lebar gambar (px)
                                            </label>
                                            <input {...register("width")}
                                                   type="number"
                                                   placeholder=""
                                                   className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Tinggi gambar (px)
                                            </label>
                                            <input {...register("height")}
                                                   type="number"
                                                   placeholder=""
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
                                    <Link to={"/website_banner"} className="btn btn-primary btn-simple">Kembali</Link>
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