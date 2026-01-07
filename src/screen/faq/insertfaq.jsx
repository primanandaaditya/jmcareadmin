import ContentWrapper from "../../component/ContentWrapper";
import {Link, useParams, useHistory} from "react-router-dom";
import {useState, useEffect, useRef} from "react";
import {useForm} from "react-hook-form";
import Konstan from "../../helper/Konstan";
import axios from "axios";
import Endpoint from "../../helper/Endpoint";
import Loading from "../../component/Loading/001/Loading";
import Rute from "../../helper/Rute";
import base64 from "react-native-base64";

export default function InsertFAQ(){
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({});
    let { id } = useParams();
    const [loading,setLoading] = useState(false)
    const [data,setData] = useState({})
    const history = useHistory();

    async function getDetailFAQ  () {
        let param = {
            "id": id
        }
        // console.log(JSON.stringify(param))
        setLoading(true)
        axios.post(Endpoint.BASE_URL + Endpoint.faq_detail, param)
            .then(res => {
                setLoading(false)
                console.log(res.data)
                if (res.data.isSuccess === true) {
                    setData(res.data.payload)
                    setValue("pertanyaan", res.data.payload.pertanyaan)
                    setValue("jawaban", res.data.payload.jawaban)
                    setValue("id", res.data.payload.id)
                    setValue("isInsert","0")
                }else{
                    alert(res.data.message)
                }
            }).catch(function (error) {
            alert(error)
            setLoading(false)
        })
    }

    useEffect( () => {
        console.clear()
        console.log('1')
        if (id !== Konstan.tag_insert){
            getDetailFAQ()
        }else{
            setValue("id", 0)
            setValue("isInsert","1")
        }
    },[])

    const doInsert = data => {
        setLoading(true)
        axios.post(Endpoint.BASE_URL + Endpoint.faq_update, data)
            .then(res => {
                setLoading(false)
                console.log(res.data)
                if (res.data.isSuccess === true) {
                    // eslint-disable-next-line no-undef
                    suksesToast(res.data.payload)
                    history.push("/faq");
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

    return(
        <div>
            { loading ? <Loading/> :
            <ContentWrapper title={ id === 'insert' ? 'Insert FAQ' : 'Update FAQ'}>
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
                        <h4 className="card-title">{id === Konstan.tag_insert ? 'Tambah FAQ' : 'Update FAQ'}</h4>
                        <form onSubmit={handleSubmit(doInsert)}>
                            <input
                                value={Konstan.tag_administrator}
                                type="hidden" {...register("create_by")}
                            />

                            <input
                                value={0}
                                type="hidden" {...register("id")}
                            />
                            <input
                                value={"1"}
                                type="hidden" {...register("isInsert")}
                            />
                            <div className="form-group label-floating">
                                <label className="control-label">Pertanyaan
                                    <star>*</star>
                                </label>
                                <input {...register("pertanyaan",{required:true})}
                                       className="form-control"
                                       type="text"
                                       required="true"/>
                                {errors.pertanyaan && <span>{Konstan.tag_wajib_diisi}</span>}
                            </div>
                            <div className="form-group label-floating">
                                <label className="control-label">Jawaban
                                    <star>*</star>
                                </label>
                                <textarea {...register("jawaban",{required:true})}
                                       className="form-control"
                                          rows="5"
                                       required="true"/>
                                {errors.jawaban && <span>{Konstan.tag_wajib_diisi}</span>}
                            </div>
                            <div className="category form-category">
                                <star>*</star>
                                Wajib diisi
                            </div>
                            <div className="text-center">
                                <Link to={Rute.faq} className="btn btn-primary btn-simple">Kembali</Link>
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