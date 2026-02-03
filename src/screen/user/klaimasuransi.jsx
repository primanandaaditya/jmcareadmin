import {useRef, useState} from "react";
import {Link} from "react-router-dom";
import Loading from "../../component/Loading/001/Loading";
import ContentWrapper from "../../component/ContentWrapper";

export default function KlaimAsuransi(){

    const [loading, setLoading] = useState(false);
    const searchmode = useRef(0)
    const [keyword, setKeyword] = useState("")
    const [data,setData] = useState([])
    const [isinsert,setIsinsert] = useState(true)
    const [pertanyaan, setPertanyaan] = useState("")
    const [jawaban, setJawaban] = useState("")
    const [id,setId] = useState("")

    return(
        <div>
            <ContentWrapper title='Klaim Asuransi'>

                <div className="card">
                    <div className="card-header card-header-icon" data-background-color="rose">
                        <i className="material-icons">apps</i>
                    </div>

                    <div className="card-content">
                        <h4 className="card-title">Klaim Asuransi</h4>
                        {loading ? <Loading/> :
                            <div>
                                <div className="table-responsive table-bordered">
                                    <table className="table table-responsive table-bordered table-striped">
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
                                                    {/*<Link to={"/insert_faq/" + base64.encode(JSON.stringify(x) )}*/}
                                                    {/*        type="button" rel="tooltip"*/}
                                                    {/*        className="btn btn-success btn-simple">*/}
                                                    {/*    <i className="material-icons">edit</i>*/}
                                                    {/*</Link>*/}
                                                    <Link to={"/insert_faq/" + x.id}
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
                                </div>
                            </div>
                        }
                    </div>
                </div>

            </ContentWrapper>
        </div>
    )
}