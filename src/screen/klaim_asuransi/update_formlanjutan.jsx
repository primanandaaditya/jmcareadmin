import {Link, useHistory, useParams} from "react-router-dom";
import Loading from "../../component/Loading/001/Loading";
import ContentWrapper from "../../component/ContentWrapper";
import {useForm} from "react-hook-form";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import Endpoint from "../../helper/Endpoint";
import Konstan from "../../helper/Konstan";
import HeaderBack from "../../component/HeaderBack";

export default function UpdateKlaimAsuransiFormLanjutan(){

    const { register, handleSubmit, getValues,setValue , reset, formState: { errors } } = useForm({});
    const [loading, setLoading] = useState(false)
    const [data,setData] = useState({})
    const [loadcabang,setLoadcabang] = useState(false)
    const [load_jenisklaim, setLoadJenisklaim] = useState(false)
    const [datacabang,setDatacabang] = useState([])
    const [data_jenisklaim, setDatajenisklaim] = useState([])
    const branchid = useRef("")
    let { idParam } = useParams()
    const history = useHistory();

    useEffect( () => {
        getDetailFormLanjutan()
    },[])

    const submit = (data) => {
        console.clear()
        console.log(JSON.stringify(data))
    }

    const getDetailFormLanjutan = () => {
        setLoading(true)
        const param = {
            "id":idParam
        }
        console.clear()
        console.log(JSON.stringify(param))
        axios.post(Endpoint.BASE_URL + Endpoint.klaimasuransi_detail_form_lanjutan, param)
            .then(res => {
                setLoading(false)
                console.log(res.data)
                if (res.data.isSuccess === true) {
                    setData(res.data.payload)
                    console.log(res.data.payload)
                    setValue("id", res.data.payload.id)
                    setValue("id_formawal", res.data.payload.id_formawal)
                    setValue("nomor_polis_asuransi", res.data.payload.nomor_polis_asuransi)
                    setValue("nama_tertanggung", res.data.payload.nama_tertanggung)
                    setValue("alamat_tertanggung", res.data.payload.alamat_tertanggung)
                    setValue("nomor_hp_tertanggung", res.data.payload.nomor_hp_tertanggung)
                    setValue("email_tertanggung", res.data.payload.email_tertanggung)
                    setValue("nama_pelapor", res.data.payload.nama_pelapor)
                    setValue("alamat_pelapor", res.data.payload.alamat_pelapor)
                    setValue("nomor_hp_pelapor", res.data.payload.nomor_hp_pelapor)
                    setValue("email_pelapor", res.data.payload.email_pelapor)
                    setValue("hubungan_dengan_tertanggung", res.data.payload.hubungan_dengan_tertanggung)
                    setValue("merk_kendataan", res.data.payload.merk_kendataan)
                    setValue("tahun_pembuatan", res.data.payload.tahun_pembuatan)
                    setValue("nomor_rangka", res.data.payload.nomor_rangka)
                    setValue("nomor_mesin", res.data.payload.nomor_mesin)
                    setValue("nomor_plat", res.data.payload.nomor_plat)
                    setValue("tanggal_kejadian", res.data.payload.tanggal_kejadian)
                    setValue("tempat_kejadian", res.data.payload.tempat_kejadian)
                    setValue("kecepatan_saat_kejadian", res.data.payload.kecepatan_saat_kejadian)
                    setValue("nama_pengemudi", res.data.payload.nama_pengemudi)
                    setValue("alamat_pengemudi", res.data.payload.alamat_pengemudi)
                    setValue("jenis_sim", res.data.payload.jenis_sim)
                    setValue("nomor_sim", res.data.payload.nomor_sim)
                    setValue("masa_berlaku_sim", res.data.payload.masa_berlaku_sim)
                    setValue("masa_berlaku_sim_format_indo", res.data.payload.masa_berlaku_sim_format_indo)
                    setValue("pengemudi_bekerja_kpd_tertanggung", res.data.payload.pengemudi_bekerja_kpd_tertanggung)
                    setValue("pengemudi_sepengetahuan_tertanggung", res.data.payload.pengemudi_sepengetahuan_tertanggung)
                    setValue("penggunaan_kendaraan_kejadian", res.data.payload.penggunaan_kendaraan_kejadian)
                    setValue("dilaporkan_ke_polisi", res.data.payload.dilaporkan_ke_polisi)
                    setValue("nama_polsek", res.data.payload.nama_polsek)
                    setValue("lokasi_kendaraan_saat_ini", res.data.payload.lokasi_kendaraan_saat_ini)
                    setValue("sisi_kendaraan_rusak", res.data.payload.sisi_kendaraan_rusak)
                    setValue("estimasi_kerugian", res.data.payload.estimasi_kerugian)
                    setValue("pihak_lain_bertanggungjawab", res.data.payload.pihak_lain_bertanggungjawab)
                    setValue("nama_pihak_lain", res.data.payload.nama_pihak_lain)
                    setValue("alamat_pihak_lain", res.data.payload.alamat_pihak_lain)
                    setValue("asuransi_pihak_lain", res.data.payload.asuransi_pihak_lain)
                    setValue("nama_pihak_ketiga", res.data.payload.nama_pihak_ketiga)
                    setValue("alamat_pihak_ketiga", res.data.payload.alamat_pihak_ketiga)
                    setValue("nomor_hp_pihak_ketiga", res.data.payload.nomor_hp_pihak_ketiga)
                    setValue("kerugian_pihak_ketiga", res.data.payload.kerugian_pihak_ketiga)
                    setValue("kerugian_pihak_ketiga_diasuransikan", res.data.payload.kerugian_pihak_ketiga_diasuransikan)
                    setValue("asuransi_pihak_ketiga", res.data.payload.asuransi_pihak_ketiga)
                    setValue("kronologi_kejadian", res.data.payload.kronologi_kejadian)
                    setValue("stpl_kepolisian", res.data.payload.stpl_kepolisian)
                    setValue("file_surat", res.data.payload.file_surat)
                    setValue("status_keputusan_asuransi", res.data.payload.status_keputusan_asuransi)
                    setValue("catatan_asuransi", res.data.payload.catatan_asuransi)
                    setValue("document_checklist", res.data.payload.document_checklist)
                    setValue("document_checklist_dari_asuransi", res.data.payload.document_checklist_dari_asuransi)
                    setValue("document_checklist_diterima_asuransi", res.data.payload.document_checklist_diterima_asuransi)
                    setValue("nominal_dari_asuransi_sebelum_banding", res.data.payload.nominal_dari_asuransi_sebelum_banding)
                    setValue("nominal_dari_asuransi_sesudah_banding", res.data.payload.nominal_dari_asuransi_sesudah_banding)
                    setValue("catatan_banding", res.data.payload.catatan_banding)
                    setValue("tgl_pembayaran_dari_asuransi", res.data.payload.tgl_pembayaran_dari_asuransi)
                    setValue("debitur_naik_banding", res.data.payload.debitur_naik_banding)
                    setValue("debitur_setuju_nominal", res.data.payload.debitur_setuju_nominal)
                    setValue("nominal_naik_banding", res.data.payload.nominal_naik_banding)
                    setValue("nama_file_pdf_form_klaim", res.data.payload.nama_file_pdf_form_klaim)
                    setValue("nama_file_tandatangan", res.data.payload.nama_file_tandatangan)
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
            <ContentWrapper title={"Detail Klaim Asuransi"}>
                <br/>
                <br/>
                <div className="card">
                    <div className="card-header card-header-icon" data-background-color="rose">
                        <i className="material-icons">apps</i>
                    </div>
                    <div className="card-content table-responsive">
                        <HeaderBack title="Update Klaim Asuransi (Form Lanjutan)"></HeaderBack>
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
                                    <form onSubmit={handleSubmit(submit)}>
                                        <div className="tab-content">
                                            <div className="tab-pane active" id="pill1">
                                                <table className="table table-borderless table-striped">
                                                    <tbody>
                                                    <tr>
                                                        <td className="text-left">ID</td>
                                                        <td>
                                                            <input
                                                                disabled
                                                                {...register("id")}
                                                                required
                                                                type="text"
                                                                className="form-control"/>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">ID Form Awal</td>
                                                        <td>
                                                            <input
                                                                disabled
                                                                {...register("id_formawal")}
                                                                required
                                                                type="text"
                                                                className="form-control"/>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Nomor polis asuransi</td>
                                                        <td>
                                                            <input
                                                                {...register("nomor_polis_asuransi")}
                                                                required
                                                                type="text"
                                                                className="form-control"/>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Nama tertanggung</td>
                                                        <td>
                                                            <input
                                                                {...register("nama_tertanggung")}
                                                                required
                                                                type="text"
                                                                className="form-control"/>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Alamat tertanggung</td>
                                                        <td>
                                                            <textarea
                                                                rows="3"
                                                                {...register("alamat_tertanggung")}
                                                                type="text"
                                                                className="form-control"/>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Nomor HP tertanggung</td>
                                                        <td className="">
                                                            <input
                                                                {...register("nomor_hp_tertanggung")}
                                                                type="number"
                                                                className="form-control"/>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">Email tertanggung</td>
                                                        <td className="">
                                                            <input
                                                                {...register("email_tertanggung")}
                                                                type="email"
                                                                className="form-control noBorder"/>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="tab-pane" id="pill2">
                                                <div>
                                                    <table className="table table-striped">
                                                        <tbody>
                                                        <tr>
                                                            <td className="text-left">Nama pelapor</td>
                                                            <td className="">
                                                                <input
                                                                    {...register("nama_pelapor")}
                                                                    type="text"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Email pelapor</td>
                                                            <td className="">
                                                                <input
                                                                    {...register("email_pelapor")}
                                                                    type="text"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Hubungan dengan tertanggung</td>
                                                            <td className="">
                                                                <input
                                                                    {...register("hubungan_dengan_tertanggung")}
                                                                    type="text"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="pill3">
                                                <div>
                                                    <table className="table table-striped">
                                                        <tbody>
                                                        <tr>
                                                            <td className="text-left">Merk kendaraan</td>
                                                            <td className="">
                                                                <input
                                                                    {...register("merk_kendataan")}
                                                                    type="text"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Tahun pembuatan</td>
                                                            <td className="">
                                                                <input
                                                                    {...register("tahun_pembuatan")}
                                                                    type="number"
                                                                    maxLength="4"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Nomor rangka</td>
                                                            <td className="">
                                                                <input
                                                                    {...register("nomor_rangka")}
                                                                    type="text"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Nomor mesin</td>
                                                            <td className="">
                                                                <input
                                                                    {...register("nomor_mesin")}
                                                                    type="text"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Nomor plat</td>
                                                            <td className="">
                                                                <input
                                                                    {...register("nomor_plat")}
                                                                    type="text"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="pill4">
                                                <div>
                                                    <table className="table table-striped">
                                                        <tbody>
                                                        <tr>
                                                            <td className="text-left">Tanggal kejadian</td>
                                                            <td className="">
                                                                <input
                                                                    {...register("tanggal_kejadian")}
                                                                    type="date"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Tempat kejadian</td>
                                                            <td className="form-group">
                                                                <select
                                                                    // onChangeCapture={(e) => handlePropinsi(e)}
                                                                    {...register("tempat_kejadian")}
                                                                    className="form-control">
                                                                    <option value="-1" disabled selected>Pilih salah
                                                                        satu
                                                                    </option>
                                                                    <option value="Di rumah">Di rumah</option>
                                                                    <option value="Di tempat parkir">Di tempat parkir
                                                                    </option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Kecepatan saat kejadian (km/jam)
                                                            </td>
                                                            <td className="">
                                                                <input
                                                                    {...register("kecepatan_saat_kejadian")}
                                                                    type="number"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="pill5">
                                                <div>
                                                    <table className="table table-striped">
                                                        <tbody>
                                                        <tr>
                                                            <td className="text-left">Nama pengemudi</td>
                                                            <td className="">
                                                                <input
                                                                    {...register("nama_pengemudi")}
                                                                    type="text"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Alamat pengemudi</td>
                                                            <td className="">
                                                                <textarea
                                                                    rows="3"
                                                                    {...register("alamat_pengemudi")}
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Jenis SIM</td>
                                                            <td className="form-group">
                                                                <select
                                                                    // onChangeCapture={(e) => handlePropinsi(e)}
                                                                    {...register("jenis_sim")}
                                                                    className="form-control">
                                                                    <option value="-1" disabled selected>Pilih salah
                                                                        satu
                                                                    </option>
                                                                    <option value="SIM A">SIM A</option>
                                                                    <option value="SIM B1">SIM B1</option>
                                                                    <option value="SIM B2">SIM B2</option>
                                                                    <option value="SIM C">SIM C</option>
                                                                    <option value="SIM D">SIM D</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Nomor SIM</td>
                                                            <td className="">
                                                                <input
                                                                    {...register("nomor_sim")}
                                                                    type="number"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Masa berlaku SIM</td>
                                                            <td className="">
                                                                <input
                                                                    {...register("masa_berlaku_sim_format_indo")}
                                                                    type="text"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Pengemudi bekerja kepada
                                                                tertanggung
                                                            </td>
                                                            <td className="form-group">
                                                                <select
                                                                    {...register("pengemudi_bekerja_kpd_tertanggung")}
                                                                    className="form-control">
                                                                    <option value="-1" disabled selected>Pilih salah
                                                                        satu
                                                                    </option>
                                                                    <option value="1">Ya</option>
                                                                    <option value="0">Tidak</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Pengemudi mengemudi sepengetahuan
                                                                tertanggung
                                                            </td>
                                                            <td className="form-group">
                                                                <select
                                                                    {...register("pengemudi_sepengetahuan_tertanggung")}
                                                                    className="form-control">
                                                                    <option value="-1" disabled selected>Pilih salah
                                                                        satu
                                                                    </option>
                                                                    <option value="1">Ya</option>
                                                                    <option value="0">Tidak</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Penggunaan kendaraan saat
                                                                kejadian
                                                            </td>
                                                            <td className="">
                                                                <input
                                                                    {...register("penggunaan_kendaraan_kejadian")}
                                                                    type="text"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Dilaporkan ke polisi</td>
                                                            <td className="form-group">
                                                                <select
                                                                    {...register("dilaporkan_ke_polisi")}
                                                                    className="form-control">
                                                                    <option value="-1" disabled selected>Pilih salah
                                                                        satu
                                                                    </option>
                                                                    <option value="1">Ya</option>
                                                                    <option value="0">Tidak</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Nama polsek</td>
                                                            <td className="">
                                                                <input
                                                                    {...register("nama_polsek")}
                                                                    type="text"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Lokasi kendaraan saat ini</td>
                                                            <td className="">
                                                                <input
                                                                    {...register("lokasi_kendaraan_saat_ini")}
                                                                    type="text"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Sisi kendaraan rusak</td>
                                                            <td className="">
                                                                <input
                                                                    {...register("sisi_kendaraan_rusak")}
                                                                    type="text"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Estimasi kerugian (Rp.)</td>
                                                            <td className="">
                                                                <input
                                                                    {...register("estimasi_kerugian")}
                                                                    type="number"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                            </div>
                                            <div className="tab-pane" id="pill6">
                                                <div>
                                                    <table className="table table-striped">
                                                        <tbody>
                                                        <tr>
                                                            <td className="text-left">Pihak lain bertanggung jawab</td>
                                                            <td className="form-group">
                                                                <select
                                                                    {...register("pihak_lain_bertanggungjawab")}
                                                                    className="form-control">
                                                                    <option value="-1" disabled selected>Pilih salah
                                                                        satu
                                                                    </option>
                                                                    <option value="1">Ya</option>
                                                                    <option value="0">Tidak</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Nama pihak lain</td>
                                                            <td className="">
                                                                <input
                                                                    {...register("nama_pihak_lain")}
                                                                    type="text"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Alamat pihak lain</td>
                                                            <td className="">
                                                                <input
                                                                    {...register("alamat_pihak_lain")}
                                                                    type="text"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Asuransi pihak lain</td>
                                                            <td className="">
                                                                <input
                                                                    {...register("asuransi_pihak_lain")}
                                                                    type="text"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="pill7">
                                                <div>
                                                    <table className="table table-striped">
                                                        <tbody>
                                                        <tr>
                                                            <td className="text-left">Nama pihak ketiga</td>
                                                            <td className="">
                                                                <input
                                                                    {...register("nama_pihak_ketiga")}
                                                                    type="text"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Alamat pihak ketiga</td>
                                                            <td className="">
                                                                <input
                                                                    {...register("alamat_pihak_ketiga")}
                                                                    type="text"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Nomor hp pihak ketiga</td>
                                                            <td className="">
                                                                <input
                                                                    {...register("nomor_hp_pihak_ketiga")}
                                                                    type="number"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Kerugian pihak ketiga (Rp.)</td>
                                                            <td className="">
                                                                <input
                                                                    {...register("kerugian_pihak_ketiga")}
                                                                    type="number"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Kerugian pihak ketiga
                                                                diasuransikan
                                                            </td>
                                                            <td className="form-group">
                                                                <select
                                                                    {...register("kerugian_pihak_ketiga_diasuransikan")}
                                                                    className="form-control">
                                                                    <option value="-1" disabled selected>Pilih salah
                                                                        satu
                                                                    </option>
                                                                    <option value="1">Ya</option>
                                                                    <option value="0">Tidak</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Asuransi pihak ketiga</td>
                                                            <td className="">
                                                                <input
                                                                    {...register("asuransi_pihak_ketiga")}
                                                                    type="text"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="pill8">
                                                <div>
                                                    <table className="table table-striped">
                                                        <tbody>
                                                        <tr>
                                                            <td className="text-left">Kronologi kejadian</td>
                                                            <td className="">
                                                            <textarea
                                                                {...register("kronologi_kejadian")}
                                                                rows="3"
                                                                className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">STPL Kepolisian</td>
                                                            <td className="">
                                                                <input
                                                                    placeholder="ex: filesuratSTPL.pdf"
                                                                    {...register("stpl_kepolisian")}
                                                                    type="text"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">File surat</td>
                                                            <td className="">
                                                                <input
                                                                    placeholder="ex: filesurat.pdf"
                                                                    {...register("file_surat")}
                                                                    type="text"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Status keputusan asuransi</td>
                                                            <td className="">
                                                                <input
                                                                    {...register("status_keputusan_asuransi")}
                                                                    type="text"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Catatan asuransi</td>
                                                            <td className="">
                                                            <textarea
                                                                {...register("catatan_asuransi")}
                                                                rows="3"
                                                                className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Dokumen checklist</td>
                                                            <td className="">
                                                            <textarea
                                                                rows="3"
                                                                {...register("document_checklist")}
                                                                type="text"
                                                                className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Dokumen checklist dari asuransi
                                                            </td>
                                                            <td className="">
                                                            <textarea
                                                                rows="3"
                                                                {...register("document_checklist_dari_asuransi")}
                                                                type="text"
                                                                className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Dokumen checklist diterima
                                                                asuransi
                                                            </td>
                                                            <td className="form-group">
                                                                <select
                                                                    {...register("document_checklist_diterima_asuransi")}
                                                                    className="form-control">
                                                                    <option value="-1" disabled selected>Pilih salah
                                                                        satu
                                                                    </option>
                                                                    <option value="1">Ya</option>
                                                                    <option value="0">Tidak</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Nominal dari asuransi sebelum
                                                                banding (Rp.)
                                                            </td>
                                                            <td className="">
                                                                <input
                                                                    {...register("nominal_dari_asuransi_sebelum_banding")}
                                                                    type="number"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Nominal dari asuransi sesudah
                                                                banding (Rp.)
                                                            </td>
                                                            <td className="">
                                                                <input
                                                                    {...register("nominal_dari_asuransi_sesudah_banding")}
                                                                    type="number"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Catatan banding</td>
                                                            <td className="">
                                                            <textarea
                                                                {...register("catatan_banding")}
                                                                rows="3"
                                                                className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Tanggal pembayaran dari asuransi
                                                            </td>
                                                            <td className="">
                                                                <input
                                                                    {...register("tgl_pembayaran_dari_asuransi")}
                                                                    type="date"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Debitur naik banding</td>
                                                            <td className="">
                                                                <input
                                                                    {...register("debitur_naik_banding")}
                                                                    type="text"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Debitur setuju nominal</td>
                                                            <td className="form-group">
                                                                <select
                                                                    {...register("debitur_setuju_nominal")}
                                                                    className="form-control">
                                                                    <option value="-1" disabled selected>Pilih salah
                                                                        satu
                                                                    </option>
                                                                    <option value="1">Ya</option>
                                                                    <option value="0">Tidak</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Nominal naik banding (Rp.)</td>
                                                            <td className="">
                                                                <input
                                                                    {...register("nominal_naik_banding")}
                                                                    type="number"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Nama file PDF form klaim</td>
                                                            <td className="">
                                                                <input
                                                                    placeholder="ex: File123.pdf"
                                                                    {...register("nama_file_pdf_form_klaim")}
                                                                    type="text"
                                                                    className="form-control"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Nama file tandatangan</td>
                                                            <td className="">
                                                                <input
                                                                    placeholder="ex: tandatangan.png"
                                                                    {...register("nama_file_tandatangan")}
                                                                    type="text"
                                                                    className="form-control"/>
                                                            </td>
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
                                        <div className="row">
                                            <div className="col-lg-12 text-center">
                                                <button
                                                    className="btn btn-dribbble"
                                                    type="submit">Submit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>}
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}