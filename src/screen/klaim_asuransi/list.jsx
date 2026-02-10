import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import axios from "axios";
import Endpoint from "../../helper/Endpoint";
import ContentWrapper from "../../component/ContentWrapper";
import Loading from "../../component/Loading/001/Loading";
import {Link} from "react-router-dom";

export default function PengaduanKlaimAsuransi(){

    const { register, handleSubmit, reset, formState: { errors } } = useForm({});
    const [loading, setLoading] = useState(false)
    const [data,setData] = useState([])
    const [loadcabang,setLoadcabang] = useState(false)
    const [datacabang,setDatacabang] = useState([])

    useEffect( () => {
        getDropdownCabang()
    },[])

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

    const searchData = data => {
        console.log(JSON.stringify(data))
        setLoading(true)
        axios.post(Endpoint.BASE_URL + Endpoint.klaim_asuransi_list, data)
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

    const getDropdownCabang = () => {
        setLoadcabang(true)
        axios.get(Endpoint.BASE_URL + Endpoint.dropdown_cabang)
            .then(res => {
                setLoadcabang(false)
                console.log(res.data)
                if (res.data.isSuccess === true) {
                    setDatacabang(res.data.payload)
                }else{
                    alert(res.data.message)
                }
            }).catch(function (error) {
            alert(error)
            setLoadcabang(false)
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
                        <h4 className="card-title">Klaim Asuransi</h4>
                        <div className="row">
                            <div className="col-lg-6">
                                <h3>Pencarian</h3>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit(searchData)}>
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="form-group label-floating">
                                        <label className="control-label">Nomor registrasi
                                        </label>
                                        <input {...register("no_registrasi")}
                                               className="form-control"
                                               type="text"/>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="form-group label-floating">
                                        <label className="control-label">Tanggal lapor
                                        </label>
                                        <input {...register("tgl_lapor")}
                                               className="form-control"
                                               type="date"/>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="form-group label-floating">
                                        <label className="control-label">Nomor kontrak
                                        </label>
                                        <input {...register("agreement_no")}
                                               className="form-control"
                                               type="text"/>
                                    </div>
                                </div>
                                {/*<div className="col-lg-3">*/}
                                {/*    <div className="form-group label-floating">*/}
                                {/*        <label className="control-label">Nomor agreement*/}
                                {/*        </label>*/}
                                {/*        <input {...register("agreement_no")}*/}
                                {/*               className="form-control"*/}
                                {/*               type="text"/>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>

                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="form-group label-floating">
                                        <label className="control-label">Nomor app
                                        </label>
                                        <input {...register("app_no")}
                                               className="form-control"
                                               type="text"/>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="form-group label-floating">
                                        <label className="control-label">Nama lengkap customer
                                        </label>
                                        <input {...register("cust_full_name")}
                                               className="form-control"
                                               type="text"/>
                                    </div>
                                </div>
                                {/*<div className="col-lg-3">*/}
                                {/*    <div className="form-group label-floating">*/}
                                {/*        <label className="control-label">Email*/}
                                {/*        </label>*/}
                                {/*        <input {...register("email")}*/}
                                {/*               className="form-control"*/}
                                {/*               type="email"/>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <div className="col-lg-3">
                                    <div className="form-group label-floating">
                                        <label className="control-label">Merk kendaraan
                                        </label>
                                        <input {...register("merk_kendaraan")}
                                               className="form-control"
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
                                               type="number"/>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="form-group label-floating">
                                        <label className="control-label">Nomor rangka
                                        </label>
                                        <input {...register("nomor_rangka")}
                                               className="form-control"
                                               type="text"/>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="form-group label-floating">
                                        <label className="control-label">Nomor mesin
                                        </label>
                                        <input {...register("nomor_mesin")}
                                               className="form-control"
                                               type="text"/>
                                    </div>
                                </div>
                                {/*<div className="col-lg-3">*/}
                                {/*    <div className="form-group label-floating">*/}
                                {/*        <label className="control-label">Merk kendaraan*/}
                                {/*        </label>*/}
                                {/*        <input {...register("merk_kendaraan")}*/}
                                {/*               className="form-control"*/}
                                {/*               type="text"/>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>

                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="form-group label-floating">
                                        <label className="control-label">Nomor plat
                                        </label>
                                        <input {...register("nomor_plat")}
                                               className="form-control"
                                               type="text"/>
                                    </div>
                                </div>
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
                                <div className="col-lg-1">
                                    <button
                                        className="btn btn-dribbble"
                                        type="submit">Cari
                                    </button>
                                </div>
                                <div className="col-lg-1">
                                    <button
                                        onClick={() => resetForm()}
                                        className="btn btn-default"
                                        type="button">Reset
                                    </button>
                                </div>
                            </div>
                        </form>

                        <br/>
                        <br/>
                        <div className="row">
                            <div className="col-lg-6">
                                <h3>Hasil Pencarian</h3>
                            </div>
                        </div>

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
                                    <th className="text-center">Is Hit Confins</th>
                                    <th className="text-center">Is Error Hit Confins</th>
                                    <th className="text-center">Create Date</th>
                                    <th className="text-center">Dibuat Oleh</th>
                                    <th className="td-actions text-center">
                                        Aksi
                                    </th>
                                    </thead>

                                    <tbody>
                                    { data.length === 0 ? <p className="text-center">Tidak ada data</p> : <div></div>}
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
                                            <td className="text-center">{x.is_hit_confins}</td>
                                            <td className="text-center">{x.is_error_hit_confins}</td>
                                            <td>{x.create_date}</td>
                                            <td className="text-center">{x.create_by}</td>
                                            <td className="td-actions text-center">
                                                <Link to={"/detail_form_lanjutan/" + x.id}
                                                      type="button" rel="tooltip"
                                                      className="btn btn-info btn-simple">
                                                    <i className="material-icons">info</i>
                                                </Link>
                                                <Link to={"/update_klaim_asuransi_formawal/" + x.id}
                                                      type="button" rel="tooltip"
                                                      className="btn btn-success btn-simple">
                                                    <i className="material-icons">edit</i>
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