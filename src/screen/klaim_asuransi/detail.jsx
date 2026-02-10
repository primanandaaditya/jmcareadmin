import {Link, useHistory, useParams} from "react-router-dom";
import Loading from "../../component/Loading/001/Loading";
import ContentWrapper from "../../component/ContentWrapper";
import {useForm} from "react-hook-form";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import Endpoint from "../../helper/Endpoint";
import Konstan from "../../helper/Konstan";
import HeaderBack from "../../component/HeaderBack";

export default function DetailFormLanjutan(){
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({});
    let { id } = useParams();
    const [loading,setLoading] = useState(false)
    const history = useHistory();
    const [data,setData] = useState({})
    const [detail,setDetail] = useState({})
    let { idParam } = useParams();

    useEffect( () => {
        getDetail()
    },[])

    async function getDetail () {
        console.clear()
        console.log("idParam " + idParam)
        let param = {
            "id": idParam
        }
        // console.log(JSON.stringify(param))
        setLoading(true)
        axios.post(Endpoint.BASE_URL + Endpoint.klaimasuransi_detail_form_lanjutan, param)
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

    const goback = () => {
        history.goBack()
    }

    return(
        <div>
            <ContentWrapper title={"Detail Klaim Asuransi"}>
                <br/>
                <br/>
                <div className="card">
                    <div className="card-header card-header-icon" data-background-color="rose">
                        <i className="material-icons">apps</i>
                    </div>
                    <div className="card-content table-responsive">
                        <HeaderBack title="Detail Klaim Asuransi"></HeaderBack>
                        {loading === true ? <Loading/> :
                            <div className="row">
                                <div className="card-content">
                                    <ul className="nav nav-pills nav-pills-success">
                                        <li className="active">
                                            <a href="#pill1" data-toggle="tab">Keterangan</a>
                                        </li>
                                        <li>
                                            <a href="#pill2" data-toggle="tab">Pelapor</a>
                                        </li>
                                        <li>
                                            <a href="#pill3" data-toggle="tab">Kendaraan</a>
                                        </li>
                                        <li>
                                            <a href="#pill4" data-toggle="tab">Kejadian</a>
                                        </li>
                                        <li>
                                            <a href="#pill5" data-toggle="tab">Pengemudi</a>
                                        </li>
                                        <li>
                                            <a href="#pill6" data-toggle="tab">Pihak lain</a>
                                        </li>
                                        <li>
                                            <a href="#pill7" data-toggle="tab">Pihak ketiga</a>
                                        </li>
                                        <li>
                                            <a href="#pill8" data-toggle="tab">Informasi lain</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane active" id="pill1">
                                                <table className="table">
                                                    <tbody>
                                                    <tr>
                                                        <td className="text-left">ID</td>
                                                        <td className="text-left">{data.id}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">ID Form Awal</td>
                                                        <td className="text-left">{data.id_formawal}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Nomor polis asuransi</td>
                                                        <td className="text-left">{data.nomor_polis_asuransi}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Nama tertanggung</td>
                                                        <td className="text-left">{data.nama_tertanggung}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Alamat tertanggung</td>
                                                        <td className="text-left">{data.alamat_tertanggung}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Nomor HP tertanggung</td>
                                                        <td className="text-left">{data.nomor_hp_tertanggung}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Email tertanggung</td>
                                                        <td className="text-left">{data.email_tertanggung}</td>
                                                    </tr>
                                                    </tbody>
                                                </table>

                                        </div>
                                        <div className="tab-pane" id="pill2">
                                            <div>
                                                <table className="table">
                                                    <tbody>
                                                    <tr>
                                                        <td className="text-left">Nama pelapor</td>
                                                        <td className="text-left">{data.nama_pelapor}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Email pelapor</td>
                                                        <td className="text-left">{data.email_pelapor}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Hubungan dengan tertanggung</td>
                                                        <td className="text-left">{data.hubungan_dengan_tertanggung}</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="pill3">
                                            <div>
                                                <table className="table">
                                                    <tbody>
                                                    <tr>
                                                        <td className="text-left">Merk kendaraan</td>
                                                        <td className="text-left">{data.merk_kendataan}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Tahun pembuatan</td>
                                                        <td className="text-left">{data.tahun_pembuatan}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Nomor rangka</td>
                                                        <td className="text-left">{data.nomor_rangka}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Nomor mesin</td>
                                                        <td className="text-left">{data.nomor_mesin}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Nomor plat</td>
                                                        <td className="text-left">{data.nomor_plat}</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="pill4">
                                            <div>
                                                <table className="table">
                                                    <tbody>

                                                    <tr>
                                                        <td className="text-left">Tanggal kejadian</td>
                                                        <td className="text-left">{data.tanggal_kejadian_format_indo}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Tempat kejadian</td>
                                                        <td className="text-left">{data.tempat_kejadian}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Kecepatan saat kejadian</td>
                                                        <td className="text-left">{data.kecepatan_saat_kejadian}</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="pill5">
                                            <div>
                                                <table className="table">
                                                    <tbody>

                                                    <tr>
                                                        <td className="text-left">Nama pengemudi</td>
                                                        <td className="text-left">{data.nama_pengemudi}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Alamat pengemudi</td>
                                                        <td className="text-left">{data.alamat_pengemudi}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Jenis SIM</td>
                                                        <td className="text-left">{data.jenis_sim}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Nomor SIM</td>
                                                        <td className="text-left">{data.nomor_sim}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Masa berlaku SIM</td>
                                                        <td className="text-left">{data.masa_berlaku_sim_format_indo}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Pengemudi bekerja kepada tertanggung
                                                        </td>
                                                        <td className="text-left">{data.pengemudi_bekerja_kpd_tertanggung}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Pengemudi sepengetahuan tertanggung
                                                        </td>
                                                        <td className="text-left">{data.pengemudi_sepengetahuan_tertanggung}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Penggunaan kendaraan kejadian</td>
                                                        <td className="text-left">{data.penggunaan_kendaraan_kejadian}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Dilaporkan ke polisi</td>
                                                        <td className="text-left">{data.dilaporkan_ke_polisi}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Nama polsek</td>
                                                        <td className="text-left">{data.nama_polsek}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Lokasi kendaraan saat ini</td>
                                                        <td className="text-left">{data.lokasi_kendaraan_saat_ini}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Sisi kendaraan rusak</td>
                                                        <td className="text-left">{data.sisi_kendaraan_rusak}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Estimasi kerugian</td>
                                                        <td className="text-left">{data.estimasi_kerugian}</td>
                                                    </tr>

                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>
                                        <div className="tab-pane" id="pill6">
                                            <div>
                                                <table className="table">
                                                    <tbody>
                                                    <tr>
                                                        <td className="text-left">Pihak lain bertanggung jawab</td>
                                                        <td className="text-left">{data.pihak_lain_bertanggungjawab}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Nama pihak lain</td>
                                                        <td className="text-left">{data.nama_pihak_lain}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Alamat pihak lain</td>
                                                        <td className="text-left">{data.alamat_pihak_lain}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Asuransi pihak lain</td>
                                                        <td className="text-left">{data.asuransi_pihak_lain}</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="pill7">
                                            <div>
                                                <table className="table">
                                                    <tbody>

                                                    <tr>
                                                        <td className="text-left">Nama pihak ketiga</td>
                                                        <td className="text-left">{data.nama_pihak_ketiga}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Alamat pihak ketiga</td>
                                                        <td className="text-left">{data.alamat_pihak_ketiga}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Nomor hp pihak ketiga</td>
                                                        <td className="text-left">{data.nomor_hp_pihak_ketiga}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Kerugian pihak ketiga</td>
                                                        <td className="text-left">{data.kerugian_pihak_ketiga}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Kerugian pihak ketiga diasuransikan
                                                        </td>
                                                        <td className="text-left">{data.kerugian_pihak_ketiga_diasuransikan}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Asuransi pihak ketiga</td>
                                                        <td className="text-left">{data.asuransi_pihak_ketiga}</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="pill8">
                                            <div>
                                                <table className="table">
                                                    <tbody>

                                                    <tr>
                                                        <td className="text-left">Kronologi kejadian</td>
                                                        <td className="text-left">{data.kronologi_kejadian}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">STPL Kepolisian</td>
                                                        <td className="text-left">{data.stpl_kepolisian}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">File surat</td>
                                                        <td className="text-left">{data.file_surat}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Status keputusan asuransi</td>
                                                        <td className="text-left">{data.status_keputusan_asuransi}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Catatan asuransi</td>
                                                        <td className="text-left">{data.catatan_asuransi}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Document checklist</td>
                                                        <td className="text-left">{data.document_checklist}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Document checklist dari asuransi</td>
                                                        <td className="text-left">{data.document_checklist_dari_asuransi}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Document checklist diterima asuransi
                                                        </td>
                                                        <td className="text-left">{data.document_checklist_diterima_asuransi}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Nominal dari asuransi sebelum
                                                            banding
                                                        </td>
                                                        <td className="text-left">{data.nominal_dari_asuransi_sebelum_banding}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Nominal dari asuransi sesudah
                                                            banding
                                                        </td>
                                                        <td className="text-left">{data.nominal_dari_asuransi_sesudah_banding}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Catatan banding</td>
                                                        <td className="text-left">{data.catatan_banding}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Tanggal pembayaran dari asuransi</td>
                                                        <td className="text-left">{data.tgl_pembayaran_dari_asuransi_format_indo}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Debitur naik banding</td>
                                                        <td className="text-left">{data.debitur_naik_banding}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Debitur setuju nominal</td>
                                                        <td className="text-left">{data.debitur_setuju_nominal}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Nominal naik banding</td>
                                                        <td className="text-left">{data.nominal_naik_banding}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Nama file PDF form klaim</td>
                                                        <td className="text-left">{data.nama_file_pdf_form_klaim}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Nama file tandatangan</td>
                                                        <td className="text-left">{data.nama_file_tandatangan}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Create date</td>
                                                        <td className="text-left">{data.create_date_format_indo}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Create by</td>
                                                        <td className="text-left">{data.create_by}</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>}
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}