import {useEffect, useRef, useState} from "react";
import axios from "axios";
import Endpoint from "../../../helper/Endpoint";
import ContentWrapper from "../../../component/ContentWrapper";
import {Link} from "react-router-dom";
import Loading from "../../../component/Loading/001/Loading";
import base64 from "react-native-base64";

export default function WebsiteProduk(){
    const [loading, setLoading] = useState(false)
    const searchmode = useRef(0)
    const [keyword, setKeyword] = useState("")
    const [data,setData] = useState([])

    useEffect( () => {
        getData()
    },[])

    async function getData() {
        searchmode.current = 0
        let param = {
            "issearch":searchmode.current,
            "keyword":keyword
        }
        console.log(JSON.stringify(param))
        setLoading(true)
        axios.post(Endpoint.BASE_URL + Endpoint.banner_get_website_produk, param)
            .then(res => {
                setLoading(false)
                console.log(res.data)
                if (res.data.isSuccess === true) {
                    setData(res.data.payload)
                }else{
                    alert(res.data.message)
                }
            }).catch(function (error) {
            alert(error)
            setLoading(false)
        })
    }

    async function searchData() {
        searchmode.current = 1
        let param = {
            "issearch":searchmode.current,
            "keyword":keyword
        }
        console.log(JSON.stringify(param))
        setLoading(true)
        axios.post(Endpoint.BASE_URL + Endpoint.banner_get_website_produk, param)
            .then(res => {
                setLoading(false)
                console.log(res.data)
                if (res.data.isSuccess === true) {
                    setData(res.data.payload)
                }else{
                    alert(res.data.message)
                }
            }).catch(function (error) {
            alert(error)
            setLoading(false)
        })
    }

    async function toggleCekAktif(id, is_active) {
        let param = {
            "isPermanen": "0",
            "newValue": is_active === "1" ? "0" : "1",
            "id": id
        }
        console.log(JSON.stringify(param))
        setLoading(true)
        axios.post(Endpoint.BASE_URL + Endpoint.banner_delete_website_produk, param)
            .then(res => {
                setLoading(false)
                console.log(res.data)
                if (res.data.isSuccess === true) {
                    // eslint-disable-next-line no-undef
                    suksesToast(res.data.payload)
                    getData()
                } else {
                    alert(res.data.message)
                }
            }).catch(function (error) {
            alert(error)
            setLoading(false)
        })
    }

    async function deletePermanen(id) {
        if  (window.confirm('Hapus data ini secara permanen?')){
            let param = {
                "isPermanen": "1",
                "newValue":"0",
                "id": id
            }
            console.log(JSON.stringify(param))
            setLoading(true)
            axios.post(Endpoint.BASE_URL + Endpoint.banner_delete_website_produk, param)
                .then(res => {
                    setLoading(false)
                    console.log(res.data)
                    if (res.data.isSuccess === true) {
                        // eslint-disable-next-line no-undef
                        suksesToast(res.data.payload)
                        getData()
                    } else {
                        alert(res.data.message)
                    }
                }).catch(function (error) {
                alert(error)
                setLoading(false)
            })
        }
    }

    return (
        <div>
            <ContentWrapper title="Website Produk">
                <div className="navbar-form navbar-right" role="search">
                    <div className="form-group form-search is-empty">
                        <input
                            type="text"
                            onChange={(e) => setKeyword(e.target.value)}
                            className="form-control"
                            placeholder="Pencarian nama"/>
                        <span className="material-input"></span>
                    </div>
                    <button type="button"
                            onClick={() => searchData()}
                            className="btn btn-white btn-round btn-just-icon">
                        <i className="material-icons">search</i>
                        <div className="ripple-container"></div>
                    </button>
                    <Link className="btn btn-round btn-just-icon" to={"/update_website_produk/0/insert"}>
                        <i className="material-icons">add</i>
                        <div className="ripple-container"></div>
                    </Link>
                </div>

                <div className="card">
                    <div className="card-header card-header-icon" data-background-color="rose">
                        <i className="material-icons">apps</i>
                    </div>

                    <div className="card-content">
                        <h4 className="card-title">Website Produk</h4>
                        {loading ? <Loading/> :
                            <div className="table-responsive table-bordered">
                                <table className="table table-responsive table-bordered table-striped">
                                    <thead className="text-primary text-center">
                                    <th className="text-center">ID</th>
                                    <th className="text-center">Nama (EN)</th>
                                    <th className="text-center">Nama (ID)</th>
                                    <th className="text-center">Nama panjang (EN)</th>
                                    <th className="text-center">Nama panjang (ID)</th>
                                    <th className="text-center">Subtitle (EN)</th>
                                    <th className="text-center">Subtitle (ID)</th>
                                    <th className="text-center">Spesifikasi (EN)</th>
                                    <th className="text-center">Spesifikasi (ID)</th>
                                    <th className="text-center">Komposisi (EN)</th>
                                    <th className="text-center">Komposisi (ID)</th>
                                    <th className="text-center">Manfaat (EN)</th>
                                    <th className="text-center">Manfaat (ID)</th>
                                    <th className="text-center">Info umum (EN)</th>
                                    <th className="text-center">Info umum (ID)</th>
                                    <th className="text-center">Contain (EN)</th>
                                    <th className="text-center">Contain (ID)</th>
                                    <th className="text-center">ID Kategori</th>
                                    <th className="text-center">ID Subkategori</th>
                                    <th className="text-center">ID Brand</th>
                                    <th className="text-center">Tipe</th>
                                    <th className="text-center">Judul SEO</th>
                                    <th className="text-center">Gambar</th>
                                    <th className="text-center">Gambar ikon</th>
                                    <th className="text-center">Lebar gambar (px)</th>
                                    <th className="text-center">Tinggi gambar (px)</th>
                                    <th className="text-center">Website</th>
                                    <th className="text-center">Link YouTube</th>
                                    <th className="text-center">Link YouTube 2</th>
                                    <th className="text-center">Link Tokopedia</th>
                                    <th className="text-center">Link Bukalapak</th>
                                    <th className="text-center">Link Shopee</th>
                                    <th className="text-center">Link Lazada</th>
                                    <th className="text-center">Link</th>
                                    <th className="text-center">Kode</th>
                                    <th className="text-center">Perusahaan</th>
                                    <th className="text-center">Fitur Status</th>
                                    <th className="text-center">Link Status</th>
                                    <th className="text-center">Prioritas</th>
                                    <th className="text-center">Aktif</th>
                                    <th className="td-actions text-center">Aksi</th>
                                    </thead>
                                    <tbody>
                                    {data.map(x => (
                                        <tr>
                                            <td className="text-center">{x.id}</td>
                                            <td>{x.name_en}</td>
                                            <td>{x.name_id}</td>
                                            <td>{x.long_name_en}</td>
                                            <td>{x.long_name_en}</td>
                                            <td>{x.subtitle_en}</td>
                                            <td>{x.subtitle_id}</td>
                                            <td>{x.specification_en}</td>
                                            <td>{x.specification_id}</td>
                                            <td>{x.composition_en}</td>
                                            <td>{x.composition_id}</td>
                                            <td>{x.benefit_en}</td>
                                            <td>{x.benefit_id}</td>
                                            <td>{x.generalinfo_en}</td>
                                            <td>{x.generalinfo_id}</td>
                                            <td>{x.contain_en}</td>
                                            <td>{x.contain_id}</td>
                                            <td>{x.category_id}</td>
                                            <td>{x.subcategory_id}</td>
                                            <td>{x.brand_id}</td>
                                            <td>{x.type}</td>
                                            <td>{x.seo_title}</td>
                                            <td>
                                                <img height="30" width="30" src={"https://www.jaccs-mpmfinance.com/" + x.image}/>
                                                {x.image}
                                            </td>
                                            <td>
                                                <img src={"https://www.jaccs-mpmfinance.com/" + x.imageicon}/>
                                                {x.imageicon}
                                            </td>
                                            <td>{x.width}</td>
                                            <td>{x.height}</td>
                                            <td>
                                                <a href={x.website}>{x.website}</a>
                                            </td>
                                            <td>
                                                <a href={x.youtube_embed_link}>{x.youtube_embed_link}</a>
                                            </td>
                                            <td><a href={x.youtube_embed_link2}>{x.youtube_embed_link2}</a>
                                            </td>
                                            <td><a href={x.tokopedia_link}>{x.tokopedia_link}</a>
                                                </td>
                                            <td><a href={x.bukalapak_link}>{x.bukalapak_link}</a>
                                                </td>
                                            <td><a href={x.shopee_link}>{x.shopee_link}</a>
                                                </td>
                                            <td><a href={x.lazada_link}>{x.lazada_link}</a>
                                                </td>
                                            <td><a href={x.link}>{x.link}</a>
                                                </td>
                                            <td>{x.code}</td>
                                            <td>{x.company}</td>
                                            <td>{x.featured_status}</td>
                                            <td>{x.link_status}</td>
                                            <td>{x.priority}</td>
                                            <td className="text-center">
                                                <input
                                                    type="checkbox"
                                                    checked={x.is_active === '1'}
                                                    onChange={() => toggleCekAktif(x.id, x.is_active)}
                                                />
                                            </td>
                                            <td className="td-actions text-center">
                                                <Link to={"/update_website_produk/" + x.id + "/" + base64.encode(JSON.stringify(x))  }
                                                      type="button" rel="tooltip"
                                                      className="btn btn-success btn-simple">
                                                    <i className="material-icons">edit</i>
                                                </Link>
                                                <button
                                                    onClick={() => deletePermanen(x.id)}
                                                    type="button" rel="tooltip"
                                                    className="btn btn-danger btn-simple">
                                                    <i className="material-icons">close</i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>}
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}