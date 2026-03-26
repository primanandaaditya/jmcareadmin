import Loading from "../../component/Loading/001/Loading";
import ContentWrapper from "../../component/ContentWrapper";
import {useState, useEffect, useRef} from "react";
import {Link, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from "axios";
import Endpoint from "../../helper/Endpoint"

export default function Grafik(){

    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({});
    const [loading,setLoading]=useState(false);
    let { jenis } = useParams();
    const namagrafik = useRef('')
    const format = useRef('')
    const [realdata, setRealdata] = useState([])
    const [data,setData] = useState([])
    const [modelcek,setModelcek] = useState([])
    const tmpcek = useRef([])

    useEffect( () => {
        // setup()
        getData()
    },[])

    const setup = (e) => {
        console.log("buka " + e.target.value)
        let j = e.target.value
        if (j === '1'){
            namagrafik.current = "User Per Bulan"
            format.current = '1'
        }
        if (j === '2'){
            namagrafik.current = "User Per Tahun"
            format.current = '2'
        }
        if (j === '3'){
            namagrafik.current = "User Per Cabang"
            format.current = '3'
        }
        getData()
    }

    async function getData  () {
        console.clear()
        let param = {
            "format":format.current
        }
        console.log(JSON.stringify(param))
        setLoading(true)
        axios.post(Endpoint.BASE_URL + Endpoint.grafik_user, param)
            .then(res => {
                setLoading(false)
                console.log(res.data)
                if (res.data.isSuccess === true) {
                    setRealdata(res.data.payload)
                    setData(res.data.payload)
                    setTimeout(() => {
                        // setupChart()
                        var ar_sumbu_x = []
                        var ar_sumbu_y = []
                        setModelcek([])
                        tmpcek.current = []
                        let arrayLength = res.data.payload.length;
                        for (var i = 0; i < arrayLength; i++) {
                            let param = {
                                "cek":true,
                                "sumbu_x": res.data.payload[i].sumbu_x,
                                "sumbu_y": res.data.payload[i].sumbu_y
                            }
                            tmpcek.current.push(param)
                            ar_sumbu_x.push(res.data.payload[i].sumbu_x)
                            ar_sumbu_y.push(res.data.payload[i].sumbu_y)
                        }
                        console.log("tmpcek")
                        console.log(tmpcek.current.length)
                        setModelcek(tmpcek)
                        console.log("modelcek")
                        tmpcek.current.forEach(x => {

                        })
                        console.log(modelcek)
                        let max_sumbu_y = Math.max.apply(null, ar_sumbu_y)
                        let lebar = (arrayLength * 75).toString() + "px"
                        let tinggi = (max_sumbu_y).toString() + "px"
                        console.log("tinggi " + tinggi)
                        var dataRoundedLineChart = {
                            labels: ar_sumbu_x,
                            series: [
                                ar_sumbu_y
                            ]
                        };
                        // eslint-disable-next-line no-undef
                        chartLine(dataRoundedLineChart, max_sumbu_y, tinggi, lebar)

                        var dataBar = {
                            labels: ar_sumbu_x,
                            series: [
                                ar_sumbu_y
                            ]
                        };
                        // eslint-disable-next-line no-undef
                        chartBar(dataBar, max_sumbu_y, tinggi, lebar)
                    }, 0);

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
            <br/>
            <ContentWrapper title='Grafik'>
                <div className="card">
                    <div className="card-header card-header-icon" data-background-color="rose">
                        <i className="material-icons">apps</i>
                    </div>
                    <div className="card-content">
                        <div className="row">
                            <div className="col-lg-8">
                                <h4 className="card-title">{"Grafik " + namagrafik.current}</h4>
                            </div>
                            <div className="col-lg-3 text-right">
                                <select
                                    onChangeCapture={(e) => setup(e)}
                                    name="cars"
                                        id="cars"
                                        className="form-control"
                                        data-style="btn btn-primary btn-round">
                                    <option value="0">Pilih</option>
                                    <option value="1">Grafik User Per Bulan</option>
                                    <option value="2">Grafik User Per Tahun</option>
                                    <option value="3">Grafik User Per Cabang</option>
                                </select>
                            </div>
                        </div>


                        <div>
                            <ul className="nav nav-pills nav-pills-success">
                                <li className="active">
                                    <a href="#pillGrafikGaris" data-toggle="tab">Grafik Garis</a>
                                </li>
                                <li>
                                <a href="#pillGrafikBatang" data-toggle="tab">Grafik Batang</a>
                                </li>
                                <li>
                                    <a href="#pill2" data-toggle="tab">Tabel Data</a>
                                </li>

                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="pillGrafikGaris">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            {loading ? <Loading/> :
                                                <div className="chart-div">
                                                    <div id="roundedLineChart" className="ct-chart"></div>
                                                </div>}
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="pillGrafikBatang">
                                    {loading ? <Loading/> :
                                        <div className="chart-div">
                                            <div id="simpleBarChart" className="ct-chart"></div>
                                        </div>}
                                </div>
                                <div className="tab-pane" id="pill2">
                                    <div className="table-responsive table-bordered">
                                        <table className="table table-responsive table-bordered table-striped">
                                            <thead className="text-primary text-center">
                                            <th className="text-center">Data</th>
                                            <th className="text-center">Jumlah</th>
                                            </thead>
                                            <tbody>
                                            {loading ? <Loading/> : data.map(x => (
                                                <tr>
                                                    <td className="text-center">{x.sumbu_x}</td>
                                                    <td className="text-center">{x.sumbu_y}</td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane" id="pill3">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}