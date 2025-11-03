import ContentWrapper from "../../component/ContentWrapper";
import {Link, useParams, useHistory} from "react-router-dom";
import {useState, useEffect, useRef} from "react";
import {useForm} from "react-hook-form";
import "./detailuser.css"
import Konstan from "../../helper/Konstan";
import axios from "axios";
import Endpoint from "../../helper/Endpoint";
import Loading from "../../component/Loading/001/Loading";
import Rute from "../../helper/Rute";

export default function Detailuser(){

    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({});
    let { id } = useParams();
    const [loading,setLoading] = useState(false)
    const history = useHistory();
    const data = useRef({})

    useEffect( () => {
        console.clear()
        console.log(atob(id))
        data.current = JSON.parse(atob(id));
    },[])

    return(
        <div>
            <ContentWrapper title={"Detail User"}>
                <br/>
                <br/>
                <div className="card">
                    <div className="card-header card-header-icon" data-background-color="rose">
                        <i className="material-icons">apps</i>
                    </div>
                    <div className="card-content">
                        <div className="row">
                            <div className="col-lg-6">
                                <h4 className="card-title">Detail User</h4>
                            </div>

                            <div className="col-lg-6">
                                <Link
                                    type="button"
                                    className="text-right"
                                    to={"/user/list"}> &larr; Kembali
                                </Link>
                            </div>


                        </div>

                        <div className="table-responsive">
                            <table className="table">
                            <tbody>
                                <tr>
                                    <td>Nama (JMCare)</td>
                                    <td>{data.current.nama}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">Nama (Confins)</td>
                                    <td className="text-left">{data.current.confins_nama}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">No. KTP (Confins)</td>
                                    <td className="text-left">{data.current.confins_no_ktp}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">No. KTP (JMCare)</td>
                                    <td className="text-left">{data.current.no_ktp}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">Tempat lahir (Confins)</td>
                                    <td className="text-left">{data.current.confins_tempat_lahir}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">Tanggal lahir (Confins)</td>
                                    <td className="text-left">{data.current.confins_tgl_lahir}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">Alamat</td>
                                    <td className="text-left">{data.current.alamat}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">RT/RW</td>
                                    <td className="text-left">{data.current.alamat_rt + "/" + data.current.alamat_rw}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">Kelurahan</td>
                                    <td className="text-left">{data.current.kelurahan}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">Kecamatan</td>
                                    <td className="text-left">{data.current.kecamatan}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">Kabupaten/kotamadya</td>
                                    <td className="text-left">{data.current.kabupaten}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">Provinsi</td>
                                    <td className="text-left">{data.current.provinsi}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">Kodepos</td>
                                    <td className="text-left">{data.current.kodepos}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">Nomor HP</td>
                                    <td className="text-left">{data.current.no_hp}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">Email</td>
                                    <td className="text-left">{data.current.email}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">Tempat/tanggal lahir</td>
                                    <td className="text-left">{data.current.tempat + "," + data.current.tgllahir}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">Jenis kelamin</td>
                                    <td className="text-left">{data.current.jeniskelamin === '1' ? 'Laki-laki' : 'Perempuan'}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">Pekerjaan</td>
                                    <td className="text-left">{data.current.pekerjaan}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">Grade</td>
                                    <td className="text-left">{data.current.grade}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">Create date</td>
                                    <td className="text-left">{data.current.crtdtm}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">Create by</td>
                                    <td className="text-left">{data.current.crtby}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">Jenis user</td>
                                    <td className="text-left">{data.current.jenisdebitur === '1' ? 'Debitur' : 'Non debitur'}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">NPWP</td>
                                    <td className="text-left">{data.current.npwp}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">Nama ibu kandung</td>
                                    <td className="text-left">{data.current.nama_ibu_kandung}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">Pendidikan terakhir</td>
                                    <td className="text-left">{data.current.pendidikan_terakhir}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">Status pernikahan</td>
                                    <td className="text-left">{data.current.status_pernikahan === '1' ? "Menikah" : "Tidak menikah"}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">Jumlah tanggungan</td>
                                    <td className="text-left">{data.current.jumlah_tanggungan}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">Kewarganegaraan</td>
                                    <td className="text-left">{data.current.kewarganegaraan}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">Alamat kantor</td>
                                    <td className="text-left">{data.current.alamat_kantor}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">Telepon kantor</td>
                                    <td className="text-left">{data.current.telp_kantor}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">Tanggal pengkinian data</td>
                                    <td className="text-left">{data.current.tanggal_pengkinian_data}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">Status JMCare</td>
                                    <td className="text-left">{data.current.is_active === '1' ? "Aktif" : "Mom aktif"}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">Onesignal ID</td>
                                    <td className="text-left">{data.current.onesignal_id}</td>
                                </tr>
                                </tbody>

                            </table>
                        </div>

                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}