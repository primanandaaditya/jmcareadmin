import ContentWrapper from "../../component/ContentWrapper";
import {Link, useParams, useHistory} from "react-router-dom";
import {useState, useEffect, useRef} from "react";
import {useForm} from "react-hook-form";
import Konstan from "../../helper/Konstan";
import axios from "axios";
import Endpoint from "../../helper/Endpoint";
import Loading from "../../component/Loading/001/Loading";
import Rute from "../../helper/Rute";

export default function InsertFAQ(){
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({});
    let { id } = useParams();
    const [loading,setLoading] = useState(false)
    const history = useHistory();

    useEffect( () => {
        console.clear()
        console.log(id)
        if (id !== Konstan.tag_insert){
            console.log(atob(id))
            let jso = JSON.parse(atob(id));
            setValue("pertanyaan", jso.pertanyaan)
            setValue("jawaban", jso.jawaban)
            setValue("id", jso.id)
            setValue("isInsert","0")
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