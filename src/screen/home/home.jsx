import ContentWrapper from "../../component/ContentWrapper";
import {useEffect, useState} from "react";
import Loading from "../../component/Loading/001/Loading";
import {Link} from "react-router-dom";
import axios from "axios";
import Endpoint from "../../helper/Endpoint";

export default function Home() {

    const panjang = 10
    const [index,setIndex] = useState(1)
    const [loading, setLoading] = useState(false)
    const [loadinggrafik,setLoadinggrafik] = useState(false)
    const [data,setData] = useState({})
    const [datagrafik,setDatagrafik] = useState([])

    useEffect( () => {
        getDashboard()
        getGrafik()
    },[])


    async function getDashboard  () {
        setLoading(true)
        axios.get(Endpoint.BASE_URL + Endpoint.dashboarduser)
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

    async function getGrafik  () {
        console.clear()
        let param = {
            "format":"1"
        }
        console.log(JSON.stringify(param))
        setLoadinggrafik(true)
        axios.post(Endpoint.BASE_URL + Endpoint.grafik_user, param)
            .then(res => {
                setLoadinggrafik(false)
                console.log(res.data)
                if (res.data.isSuccess === true) {
                    setDatagrafik(res.data.payload)
                    setTimeout(() => {
                        // setupChart()
                        var ar_sumbu_x = []
                        var ar_sumbu_y = []
                        let arrayLength = res.data.payload.length;
                        if (arrayLength >= 6){ //ambil 6 data terakhir
                            for (var i = arrayLength - 6; i < arrayLength; i++) {
                                let param = {
                                    "cek":true,
                                    "sumbu_x": res.data.payload[i].sumbu_x,
                                    "sumbu_y": res.data.payload[i].sumbu_y
                                }
                                ar_sumbu_x.push(res.data.payload[i].sumbu_x)
                                ar_sumbu_y.push(res.data.payload[i].sumbu_y)
                            }
                        }else{
                            for (var i = 0; i < arrayLength; i++) {
                                let param = {
                                    "cek":true,
                                    "sumbu_x": res.data.payload[i].sumbu_x,
                                    "sumbu_y": res.data.payload[i].sumbu_y
                                }
                                ar_sumbu_x.push(res.data.payload[i].sumbu_x)
                                ar_sumbu_y.push(res.data.payload[i].sumbu_y)
                            }
                        }
                        let max_sumbu_y = Math.max.apply(null, ar_sumbu_y)
                        let lebar = (arrayLength * 20).toString() + "px"
                        let tinggi = (max_sumbu_y * 10).toString() + "px"
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

    const addindex = () => {
        console.log(panjang)
        console.log(index)
        var vIndex = Number(index)
        var vPanjang = Number(panjang)


        if (vIndex <= vPanjang - 2 ) {
            setIndex(index + 1)
        }else{
            alert("Tinggal 1 huruf")
        }
    }

    const all = () => {
        setIndex(panjang)
    }

    return(
        <div>
            <ContentWrapper title={"Selamat Datang"}>
                {/*<h2>{"PENGADILAN".substring(0, index)}</h2>*/}
                {/*<br/>*/}
                {/*<button onClick={addindex} type="button">+</button>*/}
                {/*<button onClick={all} type="button">vV</button>*/}
                <br/>
                <div className="card">
                    <div className="card-content">
                        <h4 className="card-title">Dashboard JMCare</h4>
                        <br/>
                        <br/>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                {loading ? <Loading/> :
                                    <div className="card card-stats">
                                        <div className="card-header" data-background-color="green">
                                            <i className="material-icons">person</i>
                                        </div>
                                        <div className="card-content">
                                            <p className="category">Debitur</p>
                                            <h3 className="card-title">{data.jml_debitur}</h3>
                                        </div>
                                        <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons">local_offer</i> Jumlah debitur aktif saat
                                                ini
                                            </div>
                                        </div>
                                    </div>}
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                {loading ? <Loading/> :
                                    <div className="card card-stats">
                                        <div className="card-header" data-background-color="orange">
                                            <i className="material-icons">person</i>
                                        </div>
                                        <div className="card-content">
                                            <p className="category">Non Debitur</p>
                                            <h3 className="card-title">{data.jml_nondebitur}</h3>
                                        </div>
                                        <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons">local_offer</i> Jumlah non debitur aktif
                                                saat ini
                                            </div>
                                        </div>
                                    </div>}
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                {loading ? <Loading/> :
                                    <div className="card card-stats">
                                        <div className="card-header" data-background-color="blue">
                                            <i className="material-icons">person</i>
                                        </div>
                                        <div className="card-content">
                                            <p className="category">User Aktif</p>
                                            <h3 className="card-title">{data.jml_user_aktif}</h3>
                                        </div>
                                        <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons">local_offer</i> Total jumlah user aktif
                                                saat ini
                                            </div>
                                        </div>
                                    </div>}
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                {loading ? <Loading/> :
                                    <div className="card card-stats">
                                        <div className="card-header" data-background-color="rose">
                                            <i className="material-icons">person</i>
                                        </div>
                                        <div className="card-content">
                                            <p className="category">User Non Aktif</p>
                                            <h3 className="card-title">{data.jml_user_nonaktif}</h3>
                                        </div>
                                        <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons">local_offer</i> Total jumlah user non
                                                aktif saat ini
                                            </div>
                                        </div>
                                    </div>}
                            </div>
                        </div>

                        <br/>
                        <br/>
                        <h4 className="card-title">Grafik Pertumbuhan User (6 Bulan Terakhir)</h4>
                        {loadinggrafik ? <Loading/> :
                            <div className="chart-div">
                                <div id="roundedLineChart" className="ct-chart"></div>
                            </div>}
                    </div>
                </div>

            </ContentWrapper>
        </div>
    )
}