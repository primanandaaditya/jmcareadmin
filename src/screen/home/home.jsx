import ContentWrapper from "../../component/ContentWrapper";
import {useState} from "react";

export default function Home() {

    const panjang = 10
    const [index,setIndex] = useState(1)

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
                <h2>{"PENGADILAN".substring(0, index)}</h2>
                <br/>
                <button onClick={addindex} type="button">+</button>
                <button onClick={all} type="button">vV</button>
            </ContentWrapper>
        </div>
    )
}