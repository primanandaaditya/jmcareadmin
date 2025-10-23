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
        <Router>
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
            </Switch>
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
