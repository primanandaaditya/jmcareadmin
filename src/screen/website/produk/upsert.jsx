import {useForm} from "react-hook-form";
import {Link, useHistory, useParams} from "react-router-dom";
import {useEffect, useState, useRef} from "react";
import Konstan from "../../../helper/Konstan";
import axios from "axios";
import Endpoint from "../../../helper/Endpoint";
import Loading from "../../../component/Loading/001/Loading";
import ContentWrapper from "../../../component/ContentWrapper";

export default function UpsertWebsiteProduk(){

    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({});
    let { idParam } = useParams()
    let { susu } = useParams()
    const [loading,setLoading] = useState(false)
    const [data,setData] = useState({})
    const history = useHistory()
    const [iddata,setIddata] = useState("x")

    useEffect( () => {
        if (idParam !== Konstan.tag_insert){
            let jso = JSON.parse(atob(idParam));
            console.log("id terpilih " + jso.id)
            setIddata(jso.id)
            setValue("name_id", jso.name_id)
            setValue("name_en", jso.name_en)
            setValue("long_name_id", jso.long_name_id)
            setValue("long_name_en", jso.long_name_en)
            setValue("link", jso.link)
            setValue("category_id", jso.category_id)
            setValue("subcategory_id",jso.subcategory_id)
            setValue("brand_id",jso.brand_id)
            setValue("type",jso.type)
            setValue("seo_title",jso.seo_title)
            setValue("subtitle_en",jso.subtitle_en)
            setValue("subtitle_id",jso.subtitle_id)
            setValue("image",jso.image)
            setValue("image2",jso.image2)
            setValue("image3",jso.image3)
            setValue("image4",jso.image4)
            setValue("image5",jso.image5)
            setValue("imageicon",jso.imageicon)
            setValue("description_id", jso.description_id)
            setValue("description_en", jso.description_en)
            setValue("specification_en",jso.specification_en)
            setValue("specification_id",jso.specification_id)
            setValue("composition_en",jso.composition_en)
            setValue("composition_id",jso.composition_id)
            setValue("benefit_en",jso.benefit_en)
            setValue("benefit_id",jso.benefit_id)
            setValue("generalinfo_en",jso.generalinfo_en)
            setValue("generalinfo_id",jso.generalinfo_id)
            setValue("width", jso.width)
            setValue("height", jso.height)
            setValue("website",jso.website)
            setValue("youtube_embed_link",jso.youtube_embed_link)
            setValue("youtube_embed_link2",jso.youtube_embed_link2)
            setValue("tokopedia_link",jso.tokopedia_link)
            setValue("bukalapak_link",jso.bukalapak_link)
            setValue("shopee_link",jso.shopee_link)
            setValue("lazada_link",jso.lazada_link)
            setValue("link",jso.link)
            setValue("contain_en",jso.contain_en)
            setValue("contain_id",jso.contain_id)
            setValue("code",jso.code)
            setValue("company",jso.company)
            setValue("featured_status",jso.featured_status)
            setValue("link_status",jso.link_status)
            setValue("priority",jso.priority)
            setValue("timestamp",jso.timestamp)
            setValue("is_active", (!jso.is_active || jso.is_active !== '1' ) ? '0' : jso.is_active)
            console.log(jso.is_active)
        }else{

        }
    },[])

    const doUpsert = data => {
        console.log("data lempar " + JSON.stringify(data))
        setLoading(true)
        axios.post(Endpoint.BASE_URL + Endpoint.banner_upsert_website_produk, data)
            .then(res => {
                setLoading(false)
                console.log(res.data)
                if (res.data.isSuccess === true) {
                    // eslint-disable-next-line no-undef
                    suksesToast(res.data.payload)
                    history.push("/website_produk");
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
                <ContentWrapper title={ idParam === 'insert' ? 'Insert Website Produk' : 'Update Website Produk'}>
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
                            <h4 className="card-title">{idParam === Konstan.tag_insert ? 'Tambah Data' : 'Update Data'}</h4>
                            <form onSubmit={handleSubmit(doUpsert)}>
                                {/*<form>*/}
                                <input
                                    value={idParam === Konstan.tag_insert ? 0 : susu}
                                    type="hidden" {...register("id")}
                                />
                                <input
                                    value={Konstan.tag_administrator}
                                    type="hidden" {...register("create_by")}
                                />

                                <input
                                    value={idParam === Konstan.tag_insert ? "1" : "0"}
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
                                    type="hidden" {...register("image3")}
                                />
                                <input
                                    value={""}
                                    type="hidden" {...register("image4")}
                                />
                                <input
                                    value={""}
                                    type="hidden" {...register("image5")}
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
                                            <label className="control-label">Nama panjang (ID)
                                                <star>*</star>
                                            </label>
                                            <input {...register("long_name_id", {required: true})}
                                                   className="form-control"
                                                   type="text"
                                                   required="true"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Nama panjang (EN)
                                                <star>*</star>
                                            </label>
                                            <input {...register("long_name_en", {required: true})}
                                                   className="form-control"
                                                   type="text"
                                                   required="true"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Subjudul (ID)
                                            </label>
                                            <input {...register("subtitle_id")}
                                                   className="form-control"
                                                   type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Subjudul (EN)
                                            </label>
                                            <input {...register("subtitle_en")}
                                                   className="form-control"
                                                   type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Informasi terkandung (ID)
                                            </label>
                                            <input {...register("contain_id")}
                                                   className="form-control"
                                                   type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Informasi terkandung (EN)
                                            </label>
                                            <input {...register("contain_en")}
                                                   className="form-control"
                                                   type="text"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Description (ID)
                                            </label>
                                            <textarea {...register("description_id")}
                                                      className="form-control"
                                                      type="text"
                                                      rows="3"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Description (EN)
                                            </label>
                                            <textarea {...register("description_en")}
                                                      className="form-control"
                                                      type="text"
                                                      rows="3"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Judul SEO
                                            </label>
                                            <textarea {...register("seo_title")}
                                                      className="form-control"
                                                      type="text"
                                                      rows="3"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Spesifikasi (ID)
                                            </label>
                                            <input {...register("specification_id")}
                                                   className="form-control"
                                                   type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Spesifikasi (EN)
                                            </label>
                                            <input {...register("specification_en")}
                                                   className="form-control"
                                                   type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Komposisi (ID)
                                            </label>
                                            <input {...register("composition_id")}
                                                   className="form-control"
                                                   type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Komposisi (EN)
                                            </label>
                                            <input {...register("composition_en")}
                                                   className="form-control"
                                                   type="text"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Manfaat (ID)
                                            </label>
                                            <input {...register("benefit_id")}
                                                   className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Manfaat (EN)
                                            </label>
                                            <input {...register("benefit_en")}
                                                   className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Info umum (EN)
                                            </label>
                                            <input {...register("generalinfo_en")}
                                                   className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Info umum (ID)
                                            </label>
                                            <input {...register("generalinfo_id")}
                                                   className="form-control"/>
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
                                            <label className="control-label">ID Kategori</label>
                                            <input {...register("category_id")}
                                                   type="number"
                                                   className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">ID Subkategori
                                            </label>
                                            <input {...register("subcategory_id")}
                                                   type="number"
                                                   className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">ID Brand
                                            </label>
                                            <input {...register("brand_id")}
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
                                            <label className="control-label">Ikon
                                            </label>
                                            <input {...register("imageicon")}
                                                   placeholder="ex : images/article/20210819_105228_phpfiujob_resized.jpg"
                                                   className="form-control"/>
                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Link
                                            </label>
                                            <input {...register("link")}
                                                   className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Website
                                            </label>
                                            <input {...register("website")}
                                                   className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Link YouTube 1
                                            </label>
                                            <input {...register("youtube_embed_link")}
                                                   className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Link YouTube 2
                                            </label>
                                            <input {...register("youtube_embed_link2")}
                                                   className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Link Tokopedia
                                            </label>
                                            <input {...register("tokopedia_link")}
                                                   className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Link Bukalapak
                                            </label>
                                            <input {...register("bukalapak_link")}
                                                   className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Link Shopee
                                            </label>
                                            <input {...register("shopee_link")}
                                                   className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Link Lazada
                                            </label>
                                            <input {...register("lazada_link")}
                                                   className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Kode
                                            </label>
                                            <input {...register("code")}
                                                   className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Perusahaan
                                            </label>
                                            <input {...register("company")}
                                                   className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Status fitur
                                            </label>
                                            <input {...register("featured_status")}
                                                   type="number"
                                                   className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Status link
                                            </label>
                                            <input {...register("link_status")}
                                                   type="number"
                                                   className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Prioritas
                                            </label>
                                            <input {...register("priority")}
                                                   type="number"
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
                                    <Link to={"/website_produk"} className="btn btn-primary btn-simple">Kembali</Link>
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