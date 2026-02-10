import {useForm} from "react-hook-form";
import {Link, useHistory, useParams} from "react-router-dom";
import {use, useEffect, useState} from "react";
import axios from "axios";
import Endpoint from "../../helper/Endpoint";
import ContentWrapper from "../../component/ContentWrapper";
import Loading from "../../component/Loading/001/Loading";
import Konstan from "../../helper/Konstan";
import HeaderBack from "../../component/HeaderBack";
export default function Agreementcard(){

    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({});
    let { idParam } = useParams()
    let { jenis } = useParams()
    const [loading,setLoading] = useState(false)
    const history = useHistory();
    const [data,setData] = useState([])
    const [cabang, setCabang] = useState('')
    const [agrno,setAgrno] = useState('')
    const [bussdate,setBussdate] = useState('')
    const [contractstate,setContractstate] = useState('')
    const [currname,setCurrname] = useState('')
    const [custname, setCustname] = useState('')

    useEffect( () => {
        console.clear()
        console.log("idParam " + idParam)
        getAgreementCard()
        // setValue("login_user_id", jso.login_user_id)
    },[])

    async function getAgreementCard() {
        setLoading(true)
        let param = {"AgrmntId": idParam}
        axios.post(Endpoint.BASE_URL + Endpoint.user_agreement_card, param,{timeout : Konstan.tag_timeout})
            .then(res => {
                setLoading(false)
                console.log(res.data)
                if (res.data.isSuccess === true) {
                    setData(res.data.payload)
                    if (res.data.payload.length !== 0){
                        setCabang(res.data.payload[0].OFFICE_NAME)
                        setAgrno(res.data.payload[0].AGRMNT_NO)
                        setBussdate(res.data.payload[0].BUSSDATE)
                        setContractstate(res.data.payload[0].CONTRACT_STAT)
                        setCurrname(res.data.payload[0].CURRNAME)
                        setCustname(res.data.payload[0].CUST_NAME)
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

    const goback = () => {
        history.goBack()
    }

    return(
        <div>
            <ContentWrapper title="Agreement Card">
                <br/>
                <br/>
                <div className="navbar-form navbar-right" role="search">
                    <div></div>
                </div>
                <div className="card">
                    <div className="card-header card-header-icon" data-background-color="rose">
                        <i className="material-icons">apps</i>
                    </div>

                    <div className="card-content table-responsive">
                        <HeaderBack title="Agreement Card"></HeaderBack>
                        {/*<div className="row">*/}
                        {/*    <div className="col-lg-8">*/}
                        {/*        <h4 className="card-title">Agreement Card</h4>*/}
                        {/*    </div>*/}
                        {/*    <div className="col-lg-4 text-right">*/}
                        {/*        <button*/}
                        {/*            className="btn btn-primary btn-simple btn-sm"*/}
                        {/*            onClick={goback}>*/}
                        {/*            &larr;Kembali*/}
                        {/*        </button>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className="card card-stats">
                                    <div className="card-header" data-background-color="orange">
                                    </div>
                                    <div className="card-content">
                                        <p className="category">Agreement ID</p>
                                        <small className="card-title">{idParam}</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className="card card-stats">
                                    <div className="card-header" data-background-color="orange">
                                    </div>
                                    <div className="card-content">
                                        <p className="category">Agreement No.</p>
                                        <small className="card-title">{agrno}</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className="card card-stats">
                                    <div className="card-header" data-background-color="orange">
                                    </div>
                                    <div className="card-content">
                                        <p className="category">Buss Date</p>
                                        <small className="card-title">{bussdate}</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className="card card-stats">
                                    <div className="card-header" data-background-color="orange">
                                    </div>
                                    <div className="card-content">
                                        <p className="category">Contract Stat</p>
                                        <small className="card-title">{contractstate}</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className="card card-stats">
                                    <div className="card-header" data-background-color="orange">
                                    </div>
                                    <div className="card-content">
                                        <p className="category">Currency</p>
                                        <small className="card-title">{currname}</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className="card card-stats">
                                    <div className="card-header" data-background-color="orange">
                                    </div>
                                    <div className="card-content">
                                        <p className="category">Cust Name</p>
                                        <small className="card-title">{custname}</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className="card card-stats">
                                    <div className="card-header" data-background-color="orange">
                                    </div>
                                    <div className="card-content">
                                        <p className="category">Cabang</p>
                                        <small className="card-title">{cabang}</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <br/>
                        {loading ? <Loading/> :
                            <table className="table table-striped table-bordered">
                                <thead className="text-primary">
                                <th className="">NO.</th>
                                <th className="">DUE DATE</th>
                                <th className="">INST AMT</th>
                                <th className="">INST PAID AMT</th>
                                <th className="">PREPAID AMT</th>
                                <th className="">INST PAID DATE</th>
                                <th className="">LC INST PAID AMT</th>
                                <th className="">LC INST PAID AMT AAM</th>

                                <th className="">VISIT FEE</th>
                                <th className="">REPO FEE</th>
                                <th className="">PICKUP FEE</th>
                                <th className="">OS LC INST</th>

                                <th className="">OUTSTANDING</th>
                                <th className="">LC DAY</th>

                                </thead>
                                <tbody>
                                {data.map(x => (
                                    <tr>
                                        <td className="text-center">{x.INST_SEQ_NO}</td>
                                        <td className="text-center">{x.DUE_DT}</td>
                                        <td className="text-right">{x.INST_AMT.toLocaleString()}</td>
                                        <td className="text-right">{x.INST_PAID_AMT.toLocaleString()}</td>
                                        <td className="text-right">{x.PREPAID_AMT.toLocaleString()}</td>
                                        <td className="">{x.INST_PAID_DATE}</td>
                                        <td className="text-right">{x.LC_INST_PAID_AMT.toLocaleString()}</td>
                                        <td className="text-right">{x.LC_INST_PAID_AMT_AAM.toLocaleString()}</td>
                                        <td className="text-right">{x.VISIT_FEE.toLocaleString()}</td>
                                        <td className="text-right">{x.REPO_FEE.toLocaleString()}</td>
                                        <td className="text-right">{x.PICKUP_FEE.toLocaleString()}</td>
                                        <td className="text-right">{x.OS_LC_INST.toLocaleString()}</td>
                                        <td className="text-right">{x.OUTSTANDING.toLocaleString()}</td>
                                        <td className="text-right">{x.LC_DAY.toLocaleString()}</td>
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