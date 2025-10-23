import ContentWrapper from "../../component/ContentWrapper";
import axios from "axios";
import Endpoint from "../../helper/Endpoint";
import {useEffect, useState, useRef} from "react";
import Loading from "../../component/Loading/001/Loading";
import Konstan from "../../helper/Konstan";
import Rute from "../../helper/Rute";
import {Link} from "react-router-dom";

export default function FAQ(){
    const [loading, setLoading] = useState(false);
    const searchmode = useRef(0)
    const [keyword, setKeyword] = useState("")
    const [data,setData] = useState([])
    const [isinsert,setIsinsert] = useState(true)
    const [pertanyaan, setPertanyaan] = useState("")
    const [jawaban, setJawaban] = useState("")
    const [id,setId] = useState("")

    const beginInsert = () => {
        console.log("is_insert")
        setIsinsert(true)
    }

    const doInsert = () => {
        console.log("do_insert")
        setLoading(true)
        const param = {
            "pertanyaan": pertanyaan,
            "jawaban": jawaban,
            "create_by": Konstan.tag_administrator,
            "isInsert":"1",
            "id":0
        }
        console.log(JSON.stringify(param))
        axios.post(Endpoint.BASE_URL + Endpoint.faq_update, param)
            .then(res => {
                setLoading(false)
                console.log(res.data)
                if (res.data.isSuccess === true) {
                    // eslint-disable-next-line no-undef
                    suksesToast(res.data.payload)
                    // toast(Konstan.tag_sukses, res.data.payload)
                    getData()
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

    const hapus = (index) => {
        // eslint-disable-next-line no-undef
        if  (window.confirm('Hapus data ini?')){
            console.clear()
            console.log(index)
            let param = {
                "id":index
            }
            console.log(JSON.stringify(param))
            setLoading(true)
            axios.post(Endpoint.BASE_URL + Endpoint.faq_delete, param)
                .then(res => {
                    setLoading(false)
                    if (res.data.isSuccess === true) {
                        // eslint-disable-next-line no-undef
                        suksesToast(res.data.payload)
                        // toast(Konstan.tag_sukses, res.data.payload)
                        getData()
                    }else{
                        // eslint-disable-next-line no-undef
                        errorToast(Konstan.tag_data_gagal_dihapus)
                        // toast(Konstan.tag_gagal, Konstan.tag_data_gagal_dihapus)
                    }
                }).catch(function (error) {
                // eslint-disable-next-line no-undef
                errorToast(error)
                setLoading(false)
            })
        }else{
            console.log("0")
        }
    }

    const edit = () => {
        // eslint-disable-next-line no-undef
        toast("dsf","dsf")
    }

    async function doSearch() {
        if (keyword !== ''){
            searchmode.current = 1
        }else{
            searchmode.current = 0
        }
        await getData()
    }

    async function getData  () {
        let param = {
            "search_mode":searchmode.current,
            "keyword":keyword
        }
        console.log(JSON.stringify(param))
        setLoading(true)
        axios.post(Endpoint.BASE_URL + Endpoint.faq, param)
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

    useEffect( () => {
        getData()
    },[])

    return(
        <div>
            <ContentWrapper title='FAQ'>
                <div className="navbar-form navbar-right" role="search">
                    <div className="form-group form-search is-empty">
                        <input
                            type="text"
                            onChange={(e) => setKeyword(e.target.value)}
                            className="form-control"
                            placeholder="Pencarian"/>
                        <span className="material-input"></span>
                    </div>
                    <button onClick={() => doSearch()} type="button" className="btn btn-white btn-round btn-just-icon">
                        <i className="material-icons">search</i>
                        <div className="ripple-container"></div>
                    </button>
                    <Link className="btn btn-round btn-just-icon" to={"/insert_faq/insert"}>
                        <i className="material-icons">add</i>
                        <div className="ripple-container"></div>
                    </Link>

                </div>

                <div className="card">
                    <div className="card-header card-header-icon" data-background-color="rose">
                        <i className="material-icons">apps</i>
                    </div>

                    <div className="card-content">
                        <h4 className="card-title">Daftar FAQ</h4>

                        {loading ? <Loading/> :
                            <div className="table-responsive table-responsive table-striped">
                                <table className="table">
                                    <thead className="text-primary text-center">
                                    <th className="text-center">ID</th>
                                    <th className="text-center">Pertanyaan</th>
                                    <th className="text-center">Jawaban</th>
                                    <th className="text-center">Tanggal</th>
                                    <th className="td-actions text-center">Aksi</th>
                                    </thead>
                                    <tbody>
                                    {data.map(x => (
                                        <tr>
                                            <td className="text-center">{x.id}</td>
                                            <td>{x.pertanyaan}</td>
                                            <td>{x.jawaban.substring(0, 10) + "..."}</td>
                                            <td className="text-center">{x.create_date}</td>
                                            <td className="td-actions text-center">
                                                <Link to={"/insert_faq/" + btoa(JSON.stringify(x) )}
                                                        type="button" rel="tooltip"
                                                        className="btn btn-success btn-simple">
                                                    <i className="material-icons">edit</i>
                                                </Link>
                                                <button
                                                    onClick={() => hapus(x.id)}
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