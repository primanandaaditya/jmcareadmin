import axios from "axios";
import Endpoint from "../helper/Endpoint";
import Konstan from "../helper/Konstan";
import * as stream from "node:stream";
import {useEffect, useState} from "react";
import {set} from "react-hook-form";

const eContractController = (no_agreement) => {
    const [hasil,setHasil] = useState({})
    useEffect(()=>{
        console.clear()
        console.log("Polos...")
        let param = {"agreement_no":no_agreement}
        axios.post(Endpoint.BASE_URL + Endpoint.user_econtract, param,{timeout : Konstan.tag_timeout})
            .then(res => {
                console.log(res.data)
                if (res.data.isSuccess === true) {
                    setHasil(res.data.payload)
                }else{
                    // eslint-disable-next-line no-undef
                    errorToast(res.data.payload)
                }
            }).catch(function (error) {
            // eslint-disable-next-line no-undef
            errorToast(error)
        })
    }, [no_agreement, setHasil])
}

// export async function getEContract(no_agreement) {
//     let param = {"agreement_no":no_agreement}
//     axios.post(Endpoint.BASE_URL + Endpoint.user_econtract, param,{timeout : Konstan.tag_timeout})
//         .then(res => {
//             console.log(res.data)
//             if (res.data.isSuccess === true) {
//                 window.open(res.data.payload)
//             }else{
//                 // eslint-disable-next-line no-undef
//                 errorToast(res.data.payload)
//             }
//         }).catch(function (error) {
//         // eslint-disable-next-line no-undef
//         errorToast(error)
//     })
// }