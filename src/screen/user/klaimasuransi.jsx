import {useEffect, useRef, useState} from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import Loading from "../../component/Loading/001/Loading";
import ContentWrapper from "../../component/ContentWrapper";
import axios from "axios";
import Endpoint from "../../helper/Endpoint";
import HeaderBack from "../../component/HeaderBack";

export default function KlaimAsuransi(){

    const [loading, setLoading] = useState(false);
    const [data,setData] = useState([])
    let { idParam } = useParams()
    const history = useHistory();

    useEffect( () => {
        getData()
    },[])

    const goback = () => {
        history.goBack()
    }

    const getData = () => {
        let jso = JSON.parse(atob(idParam))
        console.clear()
        console.log("id " + jso.login_user_id)
        setLoading(true)
        const param = {
            "id":jso.login_user_id
        }
        axios.post(Endpoint.BASE_URL + Endpoint.klaimasuransi_riwayat_form_awal, param)
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

    return(
        <div>
            <ContentWrapper title='Klaim Asuransi'>

                <div className="card">
                    <div className="card-header card-header-icon" data-background-color="rose">
                        <i className="material-icons">apps</i>
                    </div>

                    <div className="card-content table-responsive">
                        <HeaderBack title="Klaim Asuransi"></HeaderBack>
                        {loading ? <Loading/> :
                            <div className="table-responsive table-bordered">
                                <table className="table table-responsive table-bordered table-striped">
                                    <thead className="text-primary text-center">
                                    <th>ID</th>
                                    <th className="text-center">ID User JMCare</th>
                                    <th className="text-center">ID User Confins</th>
                                    <th className="text-center">Tanggal Lapor</th>
                                    <th className="text-center">Nama Lengkap</th>
                                    <th className="text-center">Nama Tertanggung</th>
                                    <th className="text-center">No. Agreement</th>
                                    <th className="text-center">Agr ID</th>
                                    <th className="text-center">No. App</th>
                                    <th className="text-center">Merk Kend</th>
                                    <th className="text-center">Tahun Kend</th>
                                    <th className="text-center">Nomor Rangka</th>
                                    <th className="text-center">Nomor Mesin</th>
                                    <th className="text-center">Nomor Plat</th>
                                    <th className="text-center">Kantor Cabang</th>
                                    <th className="text-center">Nomor Polis Asuransi</th>
                                    <th className="text-center">Jenis Pertanggungan</th>
                                    <th className="text-center">Tanggal Kejadian</th>
                                    <th className="text-center">Tipe Klaim</th>
                                    <th className="text-center">Jenis Klaim</th>
                                    <th className="text-center">Status Klaim</th>
                                    <th className="text-center">File Surat Keputusan</th>
                                    <th className="text-center">Create Date</th>
                                    <th className="text-center">Dibuat Oleh</th>
                                    <th className="td-actions text-center">
                                        Aksi
                                    </th>
                                    </thead>

                                    <tbody>
                                    {data.length === 0 ? <p className="text-center">Tidak ada data</p> : <div></div>}
                                    {data.map(x => (
                                        <tr>
                                            <td className="text-center">{x.id}</td>
                                            <td className="text-center">{x.login_user_id}</td>
                                            <td>{x.cust_id_confins}</td>
                                            <td>{x.tgl_lapor}</td>
                                            <td>{x.cust_full_name}</td>
                                            <td>{x.nama_tertanggung}</td>
                                            <td>{x.agreement_no}</td>
                                            <td className="text-center">{x.agreement_id}</td>
                                            <td>{x.app_no}</td>
                                            <td>{x.merk_kendaraan}</td>
                                            <td className="text-center">{x.tahun_pembuatan}</td>
                                            <td>{x.nomor_rangka}</td>
                                            <td>{x.nomor_mesin}</td>
                                            <td>{x.nomor_plat}</td>
                                            <td>{x.branch_id + "-" + x.branch_name}</td>
                                            <td>{x.nomor_polis_asuransi}</td>
                                            <td>{x.jenis_pertanggungan}</td>
                                            <td>{x.tgl_kejadian}</td>
                                            <td>{x.tipe_klaim}</td>
                                            <td className="text-center">{x.jenis_klaim}</td>
                                            <td>{x.status_klaim}</td>
                                            <td>{x.file_surat_keputusan}</td>
                                            <td>{x.create_date}</td>
                                            <td className="text-center">{x.create_by}</td>
                                            <td className="td-actions">
                                                <Link to={"/detail_form_lanjutan/" + x.id}
                                                      type="button" rel="tooltip"
                                                      className="btn btn-simple btn-info">
                                                    <i className="material-icons">info</i>
                                                    Detail
                                                </Link>
                                                <br/>
                                                <Link to={"/update_klaim_asuransi_formawal/" + x.id}
                                                      type="button" rel="tooltip"
                                                      className="btn btn-success btn-simple">
                                                    <i className="material-icons">edit</i>Edit Form Awal
                                                </Link>
                                                <br/>
                                                <Link to={"/update_klaim_asuransi_formlanjutan/" + x.id}
                                                      type="button" rel="tooltip"
                                                      className="btn btn-warning btn-simple">
                                                    <i className="material-icons">edit</i>Edit Lanjutan
                                                </Link>
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