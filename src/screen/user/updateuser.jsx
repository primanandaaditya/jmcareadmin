import ContentWrapper from "../../component/ContentWrapper";
import {useForm} from "react-hook-form";
import Konstan from "../../helper/Konstan";
import axios from "axios";
import Endpoint from "../../helper/Endpoint";
import Loading from "../../component/Loading/001/Loading";
import Rute from "../../helper/Rute";
import {Link, useHistory, useParams} from "react-router-dom";
import {useEffect, useState} from "react";


export default function Updateuser(){

    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({});
    let { id } = useParams();
    const [loading,setLoading] = useState(false)
    const [loadpekerjaan,setLoadpekerjaan] = useState({})
    const [datapekerjaan,setDatapekerjaan] = useState([])
    const [datapropinsi,setDatapropinsi] = useState([])
    const [loadpropinsi, setLoadpropinsi] = useState(false)
    const [datakabupaten,setDatakabupaten] = useState([])
    const [strkabupaten,setStrkabupaten] = useState("")
    const [loadkabupaten,setLoadkabupaten] = useState(false)
    const [datakecamatan,setDatakecamatan] = useState([])
    const [loadkecamatan,setLoadkecamatan] = useState(false)
    const [datakelurahan,setDatakelurahan] = useState([])
    const [loadkelurahan,setLoadkelurahan] = useState(false)
    const [datakodepos,setDatakodepos] = useState("")
    const [loadkodepos,setLoadkodepos] = useState(false)
    const [loadpendidikan,setLoadpendidikan] = useState(false)
    const [datapendidikan,setDatapendidikan] = useState([])
    const [loadnikah,setLoadnikah] = useState(false)
    const [datanikah,setDatanikah] = useState([])
    const history = useHistory();

    useEffect( () => {
        console.clear()
        console.log(id)
        getPekerjaan()
        getPropinsi()
        getPendidikanterakhir()
        getStatusPernikahan()
        if (id !== Konstan.tag_insert){
            // console.log(atob(id))
            // let jso = JSON.parse(atob(id));
            // setValue("pertanyaan", jso.pertanyaan)
            // setValue("jawaban", jso.jawaban)
            // setValue("id", jso.id)
            // setValue("isInsert","0")
        }else{
            // setValue("id", 0)
            // setValue("isInsert","1")
        }
    },[])

    const doUpdate = data => {
        console.clear()
        console.log(JSON.stringify(data))
        setLoading(true)
        axios.post(Endpoint.BASE_URL + Endpoint.user_update, data)
            .then(res => {
                setLoading(false)
                console.log(res.data)
                if (res.data.isSuccess === true) {
                    // eslint-disable-next-line no-undef
                    suksesToast(res.data.payload)
                    history.push("/user/list");
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
    async function getPekerjaan() {
        setLoadpekerjaan(true)
        axios.post(Endpoint.BASE_URL + Endpoint.pekerjaan)
            .then(res => {
                setLoadpekerjaan(false)
                console.log(res.data)
                if (res.data.isSuccess === true) {
                    setDatapekerjaan(res.data.payload)
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
    async function getPendidikanterakhir() {
        setLoadpendidikan(true)
        const param = {
            "branchid":"555",
            "tipeparam":"pendidikanterakhir",
            "source":""
        }
        axios.post(Endpoint.BASE_URL + Endpoint.pendidikan, param)
            .then(res => {
                setLoadpendidikan(false)
                console.log(res.data)
                if (res.data.isSuccess === true) {
                    setDatapendidikan(res.data.payload)
                }else{
                    // eslint-disable-next-line no-undef
                    errorToast(res.data.message)
                }
            }).catch(function (error) {
            // eslint-disable-next-line no-undef
            errorToast(error)
            setLoadpendidikan(false)
        })
    }
    async function getStatusPernikahan() {
        setLoadnikah(true)
        const param = {
            "branchid":"510",
            "type":"statuspernikahan",
            "keyword":"0"
        }
        axios.post(Endpoint.BASE_URL + Endpoint.getviewlistwo, param)
            .then(res => {
                setLoadnikah(false)
                console.log(res.data)
                if (res.data.isSuccess === true) {
                    setDatanikah(res.data.payload)
                }else{
                    // eslint-disable-next-line no-undef
                    errorToast(res.data.message)
                }
            }).catch(function (error) {
            // eslint-disable-next-line no-undef
            errorToast(error)
            setLoadnikah(false)
        })
    }
    async function getPropinsi() {
        setLoadpropinsi(true)

        const param = {
            "jenis":"propinsi",
            "id_master":0
        }
        axios.post(Endpoint.BASE_URL + Endpoint.wilayah, param)
            .then(res => {
                setLoadpropinsi(false)

                console.log(res.data)
                if (res.data.isSuccess === true) {
                    setDatapropinsi(res.data.payload)
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
    async function getKabupaten(id) {
        setLoadkabupaten(true)
        setValue("kabupaten","-1")
        setValue("kelurahan","-1")
        setValue("kecamatan","-1")
        setValue('kodepos','')
        const param = {
            "jenis":"kabupaten",
            "id_master":id
        }
        axios.post(Endpoint.BASE_URL + Endpoint.wilayah, param)
            .then(res => {
                setLoadkabupaten(false)
                console.log(res.data)
                if (res.data.isSuccess === true) {
                    setDatakabupaten(res.data.payload)
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
    async function getKecamatan(id) {
        setLoadkecamatan(true)
        setValue("kelurahan","-1")
        setValue("kecamatan","-1")
        setValue('kodepos','')
        const param = {
            "jenis":"kecamatan",
            "id_master":id
        }
        axios.post(Endpoint.BASE_URL + Endpoint.wilayah, param)
            .then(res => {
                setLoadkecamatan(false)
                console.log(res.data)
                if (res.data.isSuccess === true) {
                    setDatakecamatan(res.data.payload)
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
    async function getKelurahan(id) {
        setLoadkelurahan(true)
        setValue("kelurahan","-1")
        setValue('kodepos','')
        const param = {
            "jenis":"kelurahan",
            "id_master":id
        }
        axios.post(Endpoint.BASE_URL + Endpoint.wilayah, param)
            .then(res => {
                setLoadkelurahan(false)
                console.log(res.data)
                if (res.data.isSuccess === true) {
                    setDatakelurahan(res.data.payload)
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
    async function getKodepos(id) {
        setLoadkodepos(true)
        const param = {
            "jenis":"kodepos",
            "id_master":id
        }
        axios.post(Endpoint.BASE_URL + Endpoint.wilayah, param)
            .then(res => {
                setLoadkodepos(false)
                console.log(res.data)
                if (res.data.isSuccess === true) {
                    setValue('kodepos',res.data.payload[0].nama)
                    setDatakodepos(res.data.payload[0].nama)
                    console.log("kodepos " + res.data.payload[0].nama)
                }else{
                    // eslint-disable-next-line no-undef
                    errorToast(res.data.message)
                    setValue('kodepos','')
                }
            }).catch(function (error) {
            // eslint-disable-next-line no-undef
            errorToast(error)
            setLoading(false)
        })
    }
    function handlePropinsi(event) {
        console.log(event.target.value)
        getKabupaten(event.target.value)
    }
    function handleKabupaten(event) {
        console.log(event.target.value)
        getKecamatan(event.target.value)
    }
    function handleKecamatan(event) {
        console.log(event.target.value)
        getKelurahan(event.target.value)
    }
    function handleKelurahan(event) {
        console.log(event.target.value)
        getKodepos(event.target.value)
    }

    return (
        <div>
            {loading ? <Loading/> :
                <ContentWrapper title={id === 'insert' ? 'Tambah User' : 'Edit User'}>
                    <br/>
                    <br/>
                    <div className="navbar-form navbar-right" role="search">
                        <div></div>
                    </div>
                    <div className="card">
                        <div className="card-header card-header-icon" data-background-color="rose">
                            <i className="material-icons">apps</i>
                        </div>
                        <div className="card-content">
                            <h4 className="card-title">{id === Konstan.tag_insert ? 'Tambah User' : 'Update User'}</h4>
                            <form onSubmit={handleSubmit(doUpdate)}>
                                <input
                                    value={Konstan.tag_administrator}
                                    type="hidden" {...register("crtby")}
                                />
                                <input
                                    value={0}
                                    type="hidden" {...register("id")}
                                />
                                <input
                                    value={id === "insert" ? "1" : "0"}
                                    type="hidden" {...register("isInsert")}
                                />

                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Nama lengkap
                                                <star>*</star>
                                            </label>
                                            <input {...register("nama", {required: true})}
                                                   className="form-control"
                                                   type="text"
                                                   required="true"/>
                                            {errors.nama && <span>{Konstan.tag_wajib_diisi}</span>}
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group label-floating">
                                            <label className="control-label">No. KTP
                                            </label>
                                            <input {...register("no_ktp")}
                                                   className="form-control"
                                                   type="number"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group label-floating">
                                            <label className="control-label">No. HP
                                                <star>*</star>
                                            </label>
                                            <input {...register("no_hp", {required: true})}
                                                   className="form-control"
                                                   type="number"
                                                   required="true"/>
                                            {errors.no_hp && <span>{Konstan.tag_wajib_diisi}</span>}
                                        </div>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Email
                                                <star>*</star>
                                            </label>
                                            <input {...register("email", {required: true})}
                                                   className="form-control"
                                                   type="text"
                                                   required="true"/>
                                            {errors.email && <span>{Konstan.tag_wajib_diisi}</span>}
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Alamat
                                            </label>
                                            <input {...register("alamat")}
                                                   className="form-control"
                                                   type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group label-floating">
                                            <label className="control-label">RT
                                            </label>
                                            <input {...register("alamat_rt", {required: true})}
                                                   className="form-control"
                                                   type="number"/>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group label-floating">
                                            <label className="control-label">RW
                                            </label>
                                            <input maxLength="3" {...register("alamat_rw")}
                                                   className="form-control"
                                                   type="number"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Propinsi
                                            </label>
                                            {loadpropinsi ? <div>Loading...</div> :
                                                <select
                                                    onChangeCapture={(e) => handlePropinsi(e)}
                                                    {...register("provinsi")} className="form-control">
                                                    <option value="-1" disabled selected>Pilih salah satu</option>
                                                    {datapropinsi.map(x => (
                                                        <option value={x.id}>{x.nama}</option>
                                                    ))}
                                                </select>}
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Kabupaten/kotamadya
                                            </label>
                                            {loadkabupaten ? <div>Loading...</div> :
                                                <select

                                                    onChangeCapture={(e) => handleKabupaten(e)}
                                                    {...register("kabupaten")} className="form-control">
                                                    <option value="-1" disabled selected>Pilih salah satu</option>
                                                    {datakabupaten.map(x => (
                                                        <option value={x.id}>{x.nama}</option>
                                                    ))}
                                                </select>}
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Kecamatan
                                            </label>
                                            {loadkecamatan ? <div>Loading...</div> :
                                                <select

                                                    onChangeCapture={(e) => handleKecamatan(e)}
                                                    {...register("kecamatan")} className="form-control">
                                                    <option value="-1" disabled selected>Pilih salah satu</option>
                                                    {datakecamatan.map(x => (
                                                        <option value={x.id}>{x.nama}</option>
                                                    ))}
                                                </select>}
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Kelurahan
                                            </label>
                                            {loadkelurahan ? <div>Loading...</div> :
                                                <select

                                                    onChangeCapture={(e) => handleKelurahan(e)}
                                                    {...register("kelurahan")} className="form-control">
                                                    <option value="-1" disabled selected>Pilih salah satu</option>
                                                    {datakelurahan.map(x => (
                                                        <option value={x.id}>{x.nama}</option>
                                                    ))}
                                                </select>}
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Kodepos
                                            </label>
                                            {loadkodepos ? <div>Loading...</div> :
                                                <input
                                                    {...register("kodepos")}
                                                    className="form-control"
                                                    type="number"/>}
                                        </div>
                                    </div>

                                </div>

                                <div className="row">

                                    <div className="col-md-4">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Tempat lahir
                                            </label>
                                            <input {...register("tempat")}
                                                   className="form-control"
                                                   type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Tanggal lahir
                                            </label>
                                            <input {...register("tgllahir")}
                                                   aria-label="Date and time" type="date"
                                                   className="form-control"/>

                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Jenis kelamin
                                            </label>
                                            <select
                                                className="selectpicker"
                                                {...register("jeniskelamin")} className="form-control">
                                                <option disabled selected>Pilih salah satu</option>
                                                <option value="M">Laki-laki</option>
                                                <option value="F">Perempuan</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Pekerjaan
                                            </label>
                                            {loadpekerjaan ? <div>Loading...</div> :
                                                <select
                                                    className="selectpicker"
                                                    {...register("pekerjaan")} className="form-control">
                                                    <option disabled selected>Pilih salah satu</option>
                                                    {datapekerjaan.map(x => (
                                                        <option value={x.nama}>{x.nama}</option>
                                                    ))}
                                                </select>}
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Grade
                                            </label>
                                            <select
                                                {...register("grade")} className="form-control">
                                                <option disabled selected>Pilih salah satu</option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                                <option value="D">D</option>
                                                <option value="E">E</option>
                                                <option value="F">F</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Jenis debitur
                                            </label>
                                            <select {...register("jenisdebitur")} className="form-control">
                                                <option disabled selected>Pilih salah satu</option>
                                                <option value="1">Debitur</option>
                                                <option value="2">Non debitur</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group label-floating">
                                            <label className="control-label">NPWP
                                            </label>
                                            <input {...register("npwp")}
                                                   className="form-control"
                                                   type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Nama ibu kandung
                                            </label>
                                            <input {...register("nama_ibu_kandung")}
                                                   className="form-control"
                                                   type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Pendidikan terakhir
                                            </label>
                                            {loadpekerjaan ? <div>Loading...</div> :
                                                <select
                                                    {...register("pendidikan_terakhir")}
                                                    className="form-control">
                                                    <option disabled selected>Pilih salah satu</option>
                                                    {datapendidikan.map(x => (
                                                        <option value={x.id}>{x.name}</option>
                                                    ))}
                                                </select>}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Status pernikahan
                                            </label>
                                            {loadnikah ? <div>Loading...</div> :
                                                <select
                                                    {...register("status_pernikahan")}
                                                    className="form-control">
                                                    <option disabled selected>Pilih salah satu</option>
                                                    {datanikah.map(x => (
                                                        <option value={x.id}>{x.name}</option>
                                                    ))}
                                                </select>}
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Kewarganegaraan
                                            </label>
                                            <select {...register("kewarganegaraan")} className="form-control">
                                                <option disabled selected>Pilih salah satu</option>
                                                <option value="WNI">Warga Negara Indonesia (WNI)</option>
                                                <option value="WNA">Warga Negara Asing (WNA)</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Jumlah tanggungan
                                            </label>
                                            <input {...register("jumlah_tanggungan")}
                                                   className="form-control"
                                                   type="number"/>
                                        </div>
                                    </div>

                                </div>
                                <div className="row">

                                    <div className="col-md-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Alamat kantor
                                            </label>
                                            <input {...register("alamat_kantor")}
                                                   className="form-control"
                                                   type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group label-floating">
                                        <label className="control-label">No. telepon kantor
                                            </label>
                                            <input {...register("telp_kantor")}
                                                   className="form-control"
                                                   type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Menyetujui penawaran
                                            </label>
                                            <select {...register("setuju_penawaran")} className="form-control">
                                                <option disabled selected>Pilih salah satu</option>
                                                <option value="1">Ya</option>
                                                <option value="2">Tidak</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Bisa login JMCare
                                            </label>
                                            <select {...register("is_active")} className="form-control">
                                                <option disabled selected>Pilih salah satu</option>
                                                <option value="1">Ya</option>
                                                <option value="2">Tidak</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <Link to={"/user/list"} className="btn btn-primary btn-simple">Kembali</Link>
                                    <button
                                        type="submit"
                                        className="btn btn-rose btn-fill btn-wd">Submit
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </ContentWrapper>}
        </div>
    )
}