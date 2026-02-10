import {useForm} from "react-hook-form";
import {Link, useHistory, useParams} from "react-router-dom";
import {use, useEffect, useState} from "react";
import axios from "axios";
import Endpoint from "../../helper/Endpoint";
import ContentWrapper from "../../component/ContentWrapper";
import Loading from "../../component/Loading/001/Loading";
import Konstan from "../../helper/Konstan";
import base64 from "react-native-base64";
import HeaderBack from "../../component/HeaderBack";


export default function Kontrak(){
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({});
    let { idParam } = useParams()
    let { jenis } = useParams()
    const [loading,setLoading] = useState(false)
    const history = useHistory();
    const [data,setData] = useState([])
    const [cabang, setCabang] = useState('')
    const [link,setLink] = useState('')

    useEffect( () => {
        console.clear()
        getKontrak()
        // setValue("login_user_id", jso.login_user_id)
    },[])
    async function getKontrak  () {
        setLoading(true)
        let jso = JSON.parse(base64.decode(idParam));
        let ktp =  btoa(unescape(encodeURIComponent(jso.no_ktp )))
        let param = {"KTPNO": ktp}
        axios.post(Endpoint.BASE_URL + Endpoint.user_kontrak, param,{timeout : Konstan.tag_timeout})
            .then(res => {
                setLoading(false)
                console.log(res.data)
                if (res.data.isSuccess === true) {
                    setData(res.data.payload)
                    if (res.data.payload.length !== 0){
                        setCabang(res.data.payload[0].OFFICE_NAME)
                    }
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
    async function getEpolis(no_agreement) {
        setLoading(true)
        let param = {
            "AgreementNo": no_agreement,
            "Userid":""
        }
        axios.post(Endpoint.BASE_URL + Endpoint.user_epolis, param,{timeout : Konstan.tag_timeout})
            .then(res => {
                setLoading(false)
                console.log(res.data)
                if (res.data.isSuccess === true) {
                    setLink(res.data.payload.fileurl)
                    window.open(res.data.payload.fileurl)
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
    async function getEContract(no_agreement) {
        setLoading(true)
        let param = {"agreement_no":no_agreement}
        axios.post(Endpoint.BASE_URL + Endpoint.user_econtract, param,{timeout : Konstan.tag_timeout})
            .then(res => {
                setLoading(false)
                console.log(res.data)
                if (res.data.isSuccess === true) {
                    setLink(res.data.payload)
                    window.open(res.data.payload)
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

    const goback = () => {
        history.goBack()
    }

    return(
        <div>
            <ContentWrapper title="Kontrak/Agreement">
                <br/>
                <br/>
                <div className="navbar-form navbar-right" role="search">
                    <div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header card-header-icon" data-background-color="rose">
                        <i className="material-icons">apps</i>
                    </div>

                    <div className="card-content table-responsive">
                        <HeaderBack title="Kontrak/Agreement"></HeaderBack>
                        {loading ? <Loading/> :
                            <table className="table table-striped table-bordered">
                                <thead className="text-primary">
                                    <th className="">Agrmnt ID</th>
                                    <th className="">No.<br/> Agreement</th>
                                    <th className="">No. APP</th>
                                    <th className="">Serial No. 1<br/>Serial No. 2</th>
                                    <th className="">Tahun</th>
                                    <th className="">No. Plat</th>
                                    <th className="">
                                        Merk/
                                        <br/>
                                        Tipe/
                                        <br/>
                                        Warna
                                    </th>
                                    <th className="">Terlambat (hari)/<br/>Denda (Rp.)</th>
                                    <th className="td-actions text-center">Aksi</th>
                                </thead>
                                <tbody>
                                {data.map(x => (
                                    <tr>
                                        <td className="">{x.AGRMNT_ID}</td>
                                        <td>{x.AGRMNT_NO}</td>
                                        <td>{x.APP_NO}</td>
                                        <td className="">{x.SERIAL_NO_1}<br/>{x.SERIAL_NO_2}</td>
                                        <td className="">{x.MANUFACTURING_YEAR}</td>
                                        <td className="">{x.PLAT_NO}</td>
                                        <td className="">{x.merk_type}<br/>/{x.warna === null || x.warna === '' ? '-' : x.warna}</td>
                                        <td className="">{x.keterlambatan_hari}<br/>{x.denda === null || x.denda === '' ? '-' : x.denda}</td>
                                        <td className="td-actions">
                                            {
                                                jenis === ''
                                                    ? <div></div>
                                                    : <div></div>
                                            }
                                            {
                                                jenis === 'agreementcard'
                                                    ? <div>
                                                            <Link
                                                            to={"/agreementcard/" + x.AGRMNT_ID}
                                                            type="button" rel="tooltip"
                                                            className="btn btn-default">
                                                            Agreement Card
                                                        </Link>
                                                    </div>
                                                    : <div></div>
                                            }
                                            {
                                                jenis === 'epolis'
                                                    ? <div>
                                                        <button
                                                            onClick={() => getEpolis(x.AGRMNT_NO)}
                                                            className="btn btn-sm btn-default">Download ePolis</button>
                                                    </div>
                                                    : <div></div>
                                            }
                                            {
                                                jenis === 'econtract'
                                                    ? <div>
                                                        <button
                                                            onClick={() => getEContract(x.AGRMNT_NO)}
                                                            className="btn btn-sm btn-default">Download eContract</button>
                                                    </div>
                                                    : <div></div>
                                            }

                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        }
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}