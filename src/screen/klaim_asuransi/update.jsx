import {Link, useHistory, useParams} from "react-router-dom";
import Loading from "../../component/Loading/001/Loading";
import ContentWrapper from "../../component/ContentWrapper";
import {useForm} from "react-hook-form";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import Endpoint from "../../helper/Endpoint";
import Konstan from "../../helper/Konstan";
import HeaderBack from "../../component/HeaderBack";

export default function UpdateKlaimAsuransiFormAwal(){

    const { register, handleSubmit, setValue , reset, formState: { errors } } = useForm({});
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
        getDetailFormAwal()
        getDropdownJenisKlaim()
    },[])

    const goback = () => {
        history.goBack()
    }

    const getDetailFormAwal = () => {
        setLoading(true)
        const param = {
            "id":idParam
        }
        console.clear()
        console.log("param " + JSON.stringify(param))
        axios.post(Endpoint.BASE_URL + Endpoint.klaimasuransi_detail_form_awal, param)
            .then(res => {
                setLoading(false)
                console.log(res.data)
                if (res.data.isSuccess === true) {
                    setData(res.data.payload)
                    setValue("login_user_id", res.data.payload.login_user_id)
                    setValue("no_registrasi", res.data.payload.no_registrasi)
                    setValue("tgl_lapor", res.data.payload.tgl_lapor_format_indo)
                    setValue("agreement_no", res.data.payload.agreement_no)
                    setValue("agreement_id", res.data.payload.agreement_id)
                    setValue("app_no", res.data.payload.app_no)
                    setValue("cust_full_name", res.data.payload.cust_full_name)
                    setValue("cust_id_confins", res.data.payload.cust_id_confins)
                    setValue("merk_kendaraan", res.data.payload.merk_kendaraan)
                    setValue("tahun_pembuatan", res.data.payload.tahun_pembuatan)
                    setValue("nomor_rangka", res.data.payload.nomor_rangka)
                    setValue("nomor_mesin", res.data.payload.nomor_mesin)
                    setValue("nomor_plat", res.data.payload.nomor_plat)
                    setValue("branch_id", res.data.payload.branch_id)
                    setValue("nama_tertanggung", res.data.payload.nama_tertanggung)
                    setValue("nomor_polis_asuransi", res.data.payload.nomor_polis_asuransi)
                    setValue("jenis_pertanggungan", res.data.payload.jenis_pertanggungan)
                    setValue("tgl_kejadian", res.data.payload.tgl_kejadian_format_indo)
                    setValue("tipe_klaim", res.data.payload.tipe_klaim)
                    setValue("jenis_klaim", res.data.payload.jenis_klaim)
                    setValue("status_klaim", res.data.payload.status_klaim)
                    setValue("file_surat_keputusan", res.data.payload.file_surat_keputusan)
                    setValue("is_hit_confins", res.data.payload.is_hit_confins)
                    setValue("is_error_hit_confins", res.data.payload.is_error_hit_confins)
                    branchid.current = res.data.payload.branch_id
                    // console.log("branchID res" + res.data.payload.branch_id)
                    console.log("branchID " + branchid.current)
                    //api get cabang untuk dropdown cabang
                    getDropdownCabang()
                }else{
                    alert(res.data.message)
                }
            }).catch(function (error) {
            alert(error)
            setLoading(false)
        })
    }

    const resetForm = () => {
        reset({
                "nama_lengkap": "",
                "nomor_hp": "",
                "agreement_no": "",
                "email": "",
                "pesan": "",
                "tgl": "",
                "no_registrasi": "",
                "tgl_lapor": "",
                "app_no": "",
                "cust_full_name": "",
                "merk_kendaraan": "",
                "tahun_pembuatan": "",
                "nomor_rangka": "",
                "nomor_mesin": "",
                "nomor_plat": "",
                "branch_id": ""
            }
        );
    }

    const getDropdownCabang = () => {
        setLoadcabang(true)
        axios.get(Endpoint.BASE_URL + Endpoint.dropdown_cabang)
            .then(res => {
                setLoadcabang(false)
                console.log(res.data)
                if (res.data.isSuccess === true) {
                    setDatacabang(res.data.payload)
                    setValue("branch_id", branchid.current)
                }else{
                    alert(res.data.message)
                }
            }).catch(function (error) {
            alert(error)
            setLoadcabang(false)
        })
    }

    const getDropdownJenisKlaim = () => {
        setLoadcabang(true)
        axios.get(Endpoint.BASE_URL + Endpoint.dropdown_jenis_klaim)
            .then(res => {
                setLoadJenisklaim(false)
                console.log(res.data)
                if (res.data.isSuccess === true) {
                    setDatajenisklaim(res.data.payload)
                }else{
                    alert(res.data.message)
                }
            }).catch(function (error) {
            alert(error)
            setLoadJenisklaim(false)
        })
    }

    const submit = (data) => {
        console.clear()
        setLoading(true)
        axios.post(Endpoint.BASE_URL + Endpoint.klaimasuransi_update_form_awal, data)
            .then(res => {
                setLoading(false)
                console.log(res.data)
                if (res.data.isSuccess === true) {
                    // eslint-disable-next-line no-undef
                    suksesToast(res.data.payload)
                    goback()
                }else{
                    // eslint-disable-next-line no-undef
                    errorToast(res.data.payload)
                }
            }).catch(function (error) {
            alert(error)
            setLoading(false)
        })
    }

    return(
        <div>
            <ContentWrapper title="Klaim Asuransi">
                <br/>
                <div className="card">
                    <div className="card-header card-header-icon" data-background-color="rose">
                        <i className="material-icons">apps</i>
                    </div>
                    <div className="card-content">
                        <HeaderBack title="Update Klaim Asuransi (Form Awal)" ></HeaderBack>
                        {loading ? <Loading/> :
                            <form onSubmit={handleSubmit(submit)}>
                                <input
                                    value={idParam}
                                    type="hidden" {...register("id")}
                                />
                                <input
                                    value="0"
                                    type="hidden" {...register("login_user_id")}
                                />
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Nomor registrasi
                                            </label>
                                            <input {...register("no_registrasi")}
                                                   className="form-control"
                                                   required
                                                   type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Tanggal lapor
                                            </label>
                                            <input {...register("tgl_lapor")}
                                                   className="form-control"
                                                   required
                                                   type="date"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Nomor kontrak
                                            </label>
                                            <input {...register("agreement_no")}
                                                   className="form-control"
                                                   required
                                                   type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Agreement ID
                                            </label>
                                            <input {...register("agreement_id")}
                                                   className="form-control"
                                                   required
                                                   type="text"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Nomor app
                                            </label>
                                            <input {...register("app_no")}
                                                   className="form-control"
                                                   required
                                                   type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Nama lengkap customer
                                            </label>
                                            <input {...register("cust_full_name")}
                                                   className="form-control"
                                                   required
                                                   type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Cust ID Confins
                                            </label>
                                            <input {...register("cust_id_confins")}
                                                   className="form-control"
                                                   type="text"/>
                                        </div>
                                    </div>

                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Merk kendaraan
                                            </label>
                                            <input {...register("merk_kendaraan")}
                                                   className="form-control"
                                                   required
                                                   type="text"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Tahun pembuatan
                                            </label>
                                            <input {...register("tahun_pembuatan")}
                                                   className="form-control"
                                                   required
                                                   type="number"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Nomor rangka
                                            </label>
                                            <input {...register("nomor_rangka")}
                                                   className="form-control"
                                                   required
                                                   type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Nomor mesin
                                            </label>
                                            <input {...register("nomor_mesin")}
                                                   className="form-control"
                                                   required
                                                   type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Nomor plat
                                            </label>
                                            <input {...register("nomor_plat")}
                                                   className="form-control"
                                                   required
                                                   type="text"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Kantor cabang
                                            </label>
                                            {loadcabang ? <div>Loading...</div> :
                                                <select
                                                    // onChangeCapture={(e) => handlePropinsi(e)}
                                                    {...register("branch_id")} className="form-control">
                                                    <option value="-1" disabled selected>Pilih salah satu</option>
                                                    {datacabang.map(x => (
                                                        <option value={x.id}>{x.name}</option>
                                                    ))}
                                                </select>}
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Nama tertanggung
                                            </label>
                                            <input {...register("nama_tertanggung")}
                                                   className="form-control"
                                                   required
                                                   type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Nomor polis asuransi
                                            </label>
                                            <input {...register("nomor_polis_asuransi")}
                                                   className="form-control"
                                                   required
                                                   type="text"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Jenis pertanggungan
                                            </label>
                                            <select
                                                // onChangeCapture={(e) => handlePropinsi(e)}
                                                {...register("jenis_pertanggungan")} className="form-control">
                                                <option value="-1" disabled selected>Pilih salah satu</option>
                                                <option value="ALL">ALL</option>
                                                <option value="TOTAL LOSS ONLY">TOTAL LOSS ONLY</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Tanggal kejadian
                                            </label>
                                            <input {...register("tgl_kejadian")}
                                                   className="form-control"
                                                   required
                                                   type="date"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Tipe klaim
                                            </label>
                                            <select
                                                // onChangeCapture={(e) => handlePropinsi(e)}
                                                {...register("tipe_klaim")} className="form-control">
                                                <option value="-1" disabled selected>Pilih salah satu</option>
                                                <option value="KEHILANGAN">KEHILANGAN</option>
                                                <option value="KECELAKAAN">KECELAKAAN</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Jenis klaim
                                            </label>
                                            {load_jenisklaim ? <div>Loading...</div> :
                                                <select
                                                    // onChangeCapture={(e) => handlePropinsi(e)}
                                                    {...register("jenis_klaim")} className="form-control">
                                                    <option value="-1" disabled selected>Pilih salah satu</option>
                                                    {data_jenisklaim.map(x => (
                                                        <option value={x.id}>{"(" + x.id + ") " + x.name}</option>
                                                    ))}
                                                </select>}
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Status klaim
                                            </label>
                                            <select
                                                // onChangeCapture={(e) => handlePropinsi(e)}
                                                {...register("status_klaim")} className="form-control">
                                                <option value="-1" disabled selected>Pilih salah satu</option>
                                                <option value="APV">APV</option>
                                                <option value="CLAIM_DOC">CLAIM_DOC</option>
                                                <option value="INSCO RJC">INSCO RJC</option>
                                                <option value="INSCO APV">INSCO APV</option>
                                                <option value="NEW">NEW</option>
                                                <option value="REQ">REQ</option>
                                                <option value="RJC">RJC</option>
                                                <option value="RCV FROM INSCO">RCV FROM INSCO</option>
                                                <option value="RTN">RTN</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">File surat keputusan
                                            </label>
                                            <input {...register("file_surat_keputusan")}
                                                   placeholder="ex: 52023102008234.pdf"
                                                   className="form-control"
                                                   type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Is Hit Confins
                                            </label>
                                            <input {...register("is_hit_confins")}
                                                   className="form-control"
                                                   type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Is Error Hit Confins
                                            </label>
                                            <input {...register("is_error_hit_confins")}
                                                   className="form-control"
                                                   type="text"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 text-center">
                                    <button
                                        className="btn btn-dribbble"
                                        type="submit">Submit
                                    </button>
                                </div>
                            </form>}
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}