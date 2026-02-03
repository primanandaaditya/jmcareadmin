import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import axios from "axios";
import Endpoint from "../../helper/Endpoint";
import ContentWrapper from "../../component/ContentWrapper";
import Loading from "../../component/Loading/001/Loading";


export default function PengaduaneContract(){
    const { register, handleSubmit, reset, formState: { errors } } = useForm({});
    const [loading, setLoading] = useState(false)
    const [data,setData] = useState([])
    const [del, setDel] = useState([])
    const [ardel, setArdel] = useState([])

    useEffect( () => {

    },[])

    const resetForm = () => {
        reset({
                "nama_lengkap":"",
                "nomor_hp":"",
                "agreement_no":"",
                "email":"",
                "pesan":"",
                "tgl":""}
        );
    }

    const cekAll = event => {
        console.clear()
        //jika dicek, maka centang semua checkbox di view
        //juga masukkan semua id ke array
        if (event.target.checked) {
            //kosongkan array tampungan dulu
            setDel([])
            data.forEach(function (item, index) {
                //cek semua checkbox di view
                document.getElementById("cek_" + item.id).checked = true;
                //isi array tampungan dengan id
                let element = {
                    "id":item.id
                }
                del.push(element)
            });
            setArdel(del)

            console.log("cek semua " + JSON.stringify(del))
        }else{
            //kosongkan array tampungan dulu
            setDel([])
            data.forEach(function (item, index) {
                //cek semua checkbox di view
                document.getElementById("cek_" + item.id).checked = false;
            });
            console.log("uncek semua " + JSON.stringify(del))
            setArdel(del)
        }
        console.log("hasil akhir del " + del)
    };

    function handleCek(event, id){
        // console.log(event.target);
        // 👇️ this is the checked value of the field
        console.clear()
        console.log(id + " " + event.target.checked);
        let element = {
            "id":id
        }
        if (event.target.checked) {
            del.push(element)
            console.log(del)
        }else{
            const foundItem = del.findIndex(item => item.id === id);
            console.log(foundItem); // Output: { name: "bananas", quantity: 0 }
            del.splice(foundItem, 1);
            console.log(del)
        }
        setArdel(del)
    }

    const searchData = data => {
        console.log(JSON.stringify(data))
        setLoading(true)
        axios.post(Endpoint.BASE_URL + Endpoint.eContract_list_pengaduan, data)
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

    const submitDelete = () => {
        console.clear()
        console.log(JSON.stringify(ardel))
        if (ardel.length === 0 ){
            alert('Minimal 1 data harus dipilih')
        }else{
            axios.post(Endpoint.BASE_URL + Endpoint.eContract_delete_pengaduan, ardel)
                .then(res => {
                    setLoading(false)
                    console.log(res.data)
                    if (res.data.isSuccess === true) {
                        setDel([])
                        setArdel([])
                        resetForm()
                        setData([])
                        // eslint-disable-next-line no-undef
                        suksesToast(res.data.payload)
                    }else{
                        alert(res.data.message)
                    }
                }).catch(function (error) {
                alert(error)
                setLoading(false)
            })
        }
    }

    return(
        <div>
            <ContentWrapper title="Pengaduan eContract">
                <br/>
                <div className="card">
                    <div className="card-header card-header-icon" data-background-color="rose">
                        <i className="material-icons">apps</i>
                    </div>

                    <div className="card-content">
                        <h4 className="card-title">Pengaduan eContract</h4>

                        <div className="row">
                            <div className="col-lg-6">
                                <h3>Pencarian</h3>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit(searchData)}>
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="form-group label-floating">
                                        <label className="control-label">Nama Lengkap
                                        </label>
                                        <input {...register("nama_lengkap")}
                                               className="form-control"
                                               type="text"/>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="form-group label-floating">
                                        <label className="control-label">Nomor HP
                                        </label>
                                        <input {...register("nomor_hp")}
                                               className="form-control"
                                               type="number"/>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="form-group label-floating">
                                        <label className="control-label">Nomor Kontrak
                                        </label>
                                        <input {...register("agreement_no")}
                                               className="form-control"
                                               type="number"/>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="form-group label-floating">
                                        <label className="control-label">Email
                                        </label>
                                        <input {...register("email")}
                                               className="form-control"
                                               type="email"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="form-group label-floating">
                                        <label className="control-label">Pesan
                                        </label>
                                        <input {...register("pesan")}
                                               className="form-control"
                                               type="text"/>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="form-group label-floating">
                                        <label className="control-label">Tanggal
                                        </label>
                                        <input {...register("tgl")}
                                               className="form-control"
                                               type="date"/>
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
                                    <th className="text-center">ID</th>
                                    <th className="text-center">ID JMCare</th>
                                    <th className="text-center">Nama Lengkap</th>
                                    <th className="text-center">Nomor Agreement</th>
                                    <th className="text-center">Nomor HP</th>
                                    <th className="text-center">Email</th>
                                    <th className="text-center">Pesan</th>
                                    <th className="text-center">Tanggal</th>
                                    <th className="text-center">Dibuat Oleh</th>
                                    <th className="text-center">Tanggal update</th>
                                    <th className="text-center">Update Oleh</th>
                                    <th className="td-actions text-center">
                                        <button
                                            onClick={() => submitDelete()}
                                            type="button"
                                            className="btn btn-danger">Hapus
                                        </button>
                                        <hr/>
                                        <input
                                            type="checkbox"
                                            onChange={(e) => cekAll(e)}
                                        />
                                    </th>
                                    </thead>
                                    <tbody>
                                    {data.map(x => (
                                        <tr>
                                            <td className="text-center">{x.id}</td>
                                            <td>{x.login_user_id}</td>
                                            <td>{x.nama_lengkap}</td>
                                            <td>{x.agreement_no}</td>
                                            <td>{x.nomor_hp}</td>
                                            <td>{x.email}</td>
                                            <td>{x.pesan}</td>
                                            <td>{x.create_date}</td>
                                            <td>{x.create_by}</td>
                                            <td>{x.update_date}</td>
                                            <td>{x.update_by}</td>
                                            <td className="td-actions text-center">
                                                <input
                                                    type="checkbox"
                                                    id= {"cek_" + x.id}
                                                    onChange={(e) => handleCek(e, x.id)}
                                                />
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