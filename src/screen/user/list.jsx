import ContentWrapper from "../../component/ContentWrapper";
import axios from "axios";
import Endpoint from "../../helper/Endpoint";
import {useEffect, useState, useRef} from "react";
import Loading from "../../component/Loading/001/Loading";
import Konstan from "../../helper/Konstan";
import Rute from "../../helper/Rute";
import {Link, useParams} from "react-router-dom";


export default function Listuser(){

    const [loading, setLoading] = useState(false);
    const searchmode = useRef(0)
    const [keyword, setKeyword] = useState("")
    const [data,setData] = useState([])
    const [id,setId] = useState("")
    const ppage = useRef(0)
    const issearch = useRef("0")
    let { jenis } = useParams();

    const nextData = () => {
        ppage.current += 1
        setKeyword("")
        issearch.current = ""
        getData()
    }

    const tampil = (ipage) => {
        ppage.current = ipage
        setKeyword("")
        issearch.current = ""
        getData()
    }

    const doSearch = () => {
        if (keyword !== ''){
            issearch.current = "1"
        }else{
            issearch.current = "0"
        }
        ppage.current = 1
        getData()
    }

    async function getData  () {
        let param = {
            "issearch": issearch.current,
            "keyword": keyword,
            "ppage": ppage.current
        }
        console.log(JSON.stringify(param))
        setLoading(true)
        axios.post(Endpoint.BASE_URL + Endpoint.user, param,{timeout : 180000})
            .then(res => {
                setLoading(false)
                console.log(res.data)
                if (res.data.isSuccess === true) {
                    setData(res.data.payload)
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
        tampil(1)
    },[])

    return(
        <div>
            <ContentWrapper title='User'>
                <div className="navbar-form navbar-right" role="search">
                    <div className="form-group form-search is-empty">
                        <input
                            type="text"
                            onChange={(e) => setKeyword(e.target.value)}
                            className="form-control"
                            placeholder="Cari nama/ktp/email"/>
                        <span className="material-input"></span>
                    </div>
                    <button
                        onClick={() => doSearch()}
                        type="button" className="btn btn-white btn-round btn-just-icon">
                        <i className="material-icons">search</i>
                        <div className="ripple-container"></div>
                    </button>
                    <Link className="btn btn-round btn-just-icon" to={"/updateuser/insert"}>
                        <i className="material-icons">add</i>
                        <div className="ripple-container"></div>
                    </Link>

                </div>

                <div className="card">
                    <div className="card-header card-header-icon" data-background-color="rose">
                        <i className="material-icons">apps</i>
                    </div>

                    <div className="card-content">
                        <h4 className="card-title">Daftar User</h4>

                        {loading ? <Loading/> :
                            <div className="text-right">
                                { issearch.current === "0" ? <div></div> :
                                <ul className="pagination pagination-info">
                                    <li>
                                        <a onClick={() => tampil(1)}>prev</a>
                                    </li>
                                    <li>
                                        <a onClick={() => tampil(1)}>1</a>
                                    </li>
                                    <li>
                                        <a onClick={() => tampil(2)}>2</a>
                                    </li>
                                    <li>
                                        <a onClick={() => tampil(3)}>3</a>
                                    </li>
                                    <li>
                                        <a onClick={() => tampil(4)}>4</a>
                                    </li>
                                    <li>
                                        <a onClick={() => tampil(5)}>5</a>
                                    </li>
                                    <li>
                                        <a onClick={() => nextData()}>next</a>
                                    </li>
                                </ul>
                                }

                                <table className="table table-striped table-responsive">
                                    <thead className="text-primary text-center">
                                    <th className="text-left">ID</th>
                                    <th className="text-left">Nama user JMCare
                                        <hr/>
                                        Nama confins
                                    </th>
                                    <th className="text-left">No. KTP</th>
                                    <th className="text-left">Email</th>
                                    <th className="text-left">No. HP</th>
                                    <th className="td-actions text-center">Aksi</th>
                                    </thead>
                                    <tbody>
                                    {data.map(x => (
                                        <tr className="text-left">
                                            <td>{x.login_user_id}</td>
                                            <td>{(x.confins_nama === null || x.confins_nama === "") ? "-" : x.confins_nama}<br/>{(x.nama === null || x.nama === "") ? "-" : x.nama}
                                            </td>
                                            <td>{x.no_ktp}</td>
                                            <td>{x.email}</td>
                                            <td>{x.no_hp}</td>
                                            <td className="td-actions text-center">
                                                <Link to={"/detailuser/" + btoa(unescape(encodeURIComponent(JSON.stringify(x))))}
                                                      type="button" rel="tooltip"
                                                      className="btn btn-info btn-simple">
                                                    <i className="material-icons">info</i>
                                                </Link>
                                                <Link to={"/detailuser/" + btoa(unescape(encodeURIComponent(JSON.stringify(x))))}
                                                      type="button" rel="tooltip"
                                                      className="btn btn-success btn-simple">
                                                    <i className="material-icons">edit</i>
                                                </Link>
                                                <button
                                                    // onClick={() => hapus(x.id)}
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