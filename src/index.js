import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from "./screen/login/login";
import Home from "./screen/home/home";
import Konstan from "./helper/Konstan";
import FAQ from "./screen/faq/faq";
import Rute from "./helper/Rute";
import Updatefaq from "./screen/faq/updatefaq";
import InsertFAQ from "./screen/faq/insertfaq";
import Listuser from "./screen/user/list";
import Detailuser from "./screen/user/detailuser";
import Updateuser from "./screen/user/updateuser";
import Gantipassword from "./screen/user/gantipassword";
import Kontrak from "./screen/user/kontrak";
import Agreementcard from "./screen/user/agreementcard";
import WebsiteArtikeList from "./screen/website/artikel/list";
import UpsertWebsiteArtikel from "./screen/website/artikel/upsert";
import WebsiteBannerList from "./screen/website/banner/list";
import UpsertWebsiteBanner from "./screen/website/banner/upsert";
import WebsiteProduk from "./screen/website/produk/list";
import UpsertWebsiteProduk from "./screen/website/produk/upsert";
import PengaduaneContract from "./screen/eContract/list";
import KlaimAsuransi from "./screen/user/klaimasuransi";
import PengaduanKlaimAsuransi from "./screen/klaim_asuransi/list";
import DetailFormLanjutan from "./screen/klaim_asuransi/detail";
import UpdateKlaimAsuransiFormAwal from "./screen/klaim_asuransi/update";
import UpdateKlaimAsuransiFormLanjutan from "./screen/klaim_asuransi/update_formlanjutan";
import Grafik from "./screen/grafik/grafik";
import PetaUser from "./screen/user/petauser";

function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                localStorage.getItem(Konstan.KEY_ISLOGIN) === Konstan.KEY_LOGIN_SUKSES ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}


ReactDOM.render(
  <React.StrictMode>
        <Router basename="/JMCareAdmin">
            <Switch>
                <Route exact path="/">
                    <Login/>
                </Route>
                <PrivateRoute exact path="/home">
                    <Home/>
                </PrivateRoute>
                <PrivateRoute exact path={Rute.faq}>
                    <FAQ/>
                </PrivateRoute>
                <PrivateRoute exact path={Rute.faq_update}>
                    <Updatefaq/>
                </PrivateRoute>
                <PrivateRoute exact path={"/insert_faq/:id"}>
                    <InsertFAQ/>
                </PrivateRoute>
                <PrivateRoute exact path={"/user/:jenis"}>
                    <Listuser/>
                </PrivateRoute>
                <PrivateRoute exact path={"/detailuser/:id"}>
                    <Detailuser/>
                </PrivateRoute>
                <PrivateRoute exact path={"/updateuser/:idParam"}>
                    <Updateuser/>
                </PrivateRoute>
                <PrivateRoute exact path={"/gantipassword/:id"}>
                    <Gantipassword/>
                </PrivateRoute>
                <PrivateRoute exact path={"/kontrak/:jenis/:idParam"}>
                    <Kontrak/>
                </PrivateRoute>
                <PrivateRoute exact path={"/agreementcard/:idParam"}>
                    <Agreementcard/>
                </PrivateRoute>
                <PrivateRoute exact path={"/website_artikel"}>
                    <WebsiteArtikeList/>
                </PrivateRoute>
                <PrivateRoute exact path={"/update_website_artikel/:susu/:id"}>
                    <UpsertWebsiteArtikel/>
                </PrivateRoute>
                <PrivateRoute exact path={"/website_banner"}>
                    <WebsiteBannerList/>
                </PrivateRoute>
                <PrivateRoute exact path={"/update_website_banner/:id"}>
                    <UpsertWebsiteBanner/>
                </PrivateRoute>
                <PrivateRoute exact path={"/website_produk"}>
                    <WebsiteProduk/>
                </PrivateRoute>
                <PrivateRoute exact path={"/update_website_produk/:susu/:idParam"}>
                    <UpsertWebsiteProduk/>
                </PrivateRoute>
                <PrivateRoute exact path={"/eContract/list_pengaduan"}>
                    <PengaduaneContract/>
                </PrivateRoute>
                <PrivateRoute exact path={"/klaim_asuransi/:idParam"}>
                    <KlaimAsuransi/>
                </PrivateRoute>
                <PrivateRoute exact path={"/pengaduan_klaim_asuransi"}>
                    <PengaduanKlaimAsuransi/>
                </PrivateRoute>
                <PrivateRoute exact path={"/detail_form_lanjutan/:idParam"}>
                    <DetailFormLanjutan/>
                </PrivateRoute>
                <PrivateRoute exact path={"/update_klaim_asuransi_formawal/:idParam"}>
                    <UpdateKlaimAsuransiFormAwal/>
                </PrivateRoute>
                <PrivateRoute exact path={"/update_klaim_asuransi_formlanjutan/:idParam"}>
                    <UpdateKlaimAsuransiFormLanjutan/>
                </PrivateRoute>
                <PrivateRoute exact path={"/grafik/:jenis"}>
                    <Grafik/>
                </PrivateRoute>
                <PrivateRoute exact path={"/peta_user"}>
                    <PetaUser/>
                </PrivateRoute>
            </Switch>
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
