
import axios from "axios";
import Endpoint from "../../../helper/Endpoint";
import {useEffect, useState, useRef} from "react";
import Loading from "../../../component/Loading/001/Loading";
import Konstan from "../../../helper/Konstan";
import Rute from "../../../helper/Rute";
import {Link} from "react-router-dom";
import base64 from "react-native-base64";
import ContentWrapper from "../../../component/ContentWrapper";


export default function WebsiteArtikeList(){

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
        axios.post(Endpoint.BASE_URL + Endpoint.banner_get_website_artikel, param)
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
        axios.post(Endpoint.BASE_URL + Endpoint.banner_get_website_artikel, param)
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
        axios.post(Endpoint.BASE_URL + Endpoint.banner_delete_website_artikel, param)
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
            axios.post(Endpoint.BASE_URL + Endpoint.banner_delete_website_artikel, param)
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
                <ContentWrapper title="Website Artikel">
                    <div className="navbar-form navbar-right" role="search">
                        <div className="form-group form-search is-empty">
                            <input
                                type="text"
                                onChange={(e) => setKeyword(e.target.value)}
                                className="form-control"
                                placeholder="Pencarian title"/>
                            <span className="material-input"></span>
                        </div>
                        <button type="button"
                                onClick={() => searchData()}
                                className="btn btn-white btn-round btn-just-icon">
                            <i className="material-icons">search</i>
                            <div className="ripple-container"></div>
                        </button>
                        <Link className="btn btn-round btn-just-icon" to={"/update_website_artikel/insert"}>
                            <i className="material-icons">add</i>
                            <div className="ripple-container"></div>
                        </Link>
                    </div>

                    <div className="card">
                        <div className="card-header card-header-icon" data-background-color="rose">
                            <i className="material-icons">apps</i>
                        </div>

                        <div className="card-content">
                            <h4 className="card-title">Website Artikel</h4>
                            {loading ? <Loading/> :
                                <div className="table-responsive">
                                    <table className="table table-responsive table-striped">
                                        <thead className="text-primary text-center">
                                        <th className="text-center">ID</th>
                                        <th className="text-center">Title (EN)</th>
                                        <th className="text-center">Title (ID)</th>
                                        <th className="text-center">Subtitle (EN)</th>
                                        <th className="text-center">Subtitle (ID)</th>
                                        <th className="text-center">Description (EN)</th>
                                        <th className="text-center">Description (ID)</th>
                                        <th className="text-center">Gambar</th>
                                        <th className="text-center">News Date</th>
                                        <th className="text-center">Program ID</th>
                                        <th className="text-center">Tipe</th>
                                        <th className="text-center">Aktif</th>
                                        <th className="td-actions text-center">Aksi</th>
                                        </thead>
                                        <tbody>
                                        {data.map(x => (
                                            <tr>
                                                <td className="text-center">{x.id}</td>
                                                <td>{x.title_en}</td>
                                                <td>{x.title_id}</td>
                                                <td>{x.subtitle_en}</td>
                                                <td>{x.subtitle_id}</td>
                                                <td>{x.description_en}</td>
                                                <td>{x.description_id}</td>
                                                <td>
                                                    <img src={"https://www.jaccs-mpmfinance.com/" + x.gambar}/>
                                                    {x.gambar}
                                                </td>
                                                <td>{x.news_date}</td>
                                                <td>{x.program_id}</td>
                                                <td>{x.type}</td>
                                                <td>
                                                    <input
                                                        type="checkbox"
                                                        checked={x.is_active === '1'}
                                                        onChange={() => toggleCekAktif(x.id, x.is_active)}
                                                    />
                                                </td>
                                                <td className="td-actions text-center">
                                                    <Link to={"/update_website_artikel/" + base64.encode(JSON.stringify(x))}
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
