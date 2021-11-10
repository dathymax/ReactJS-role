import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    Redirect
  } from "react-router-dom";
import AdminTemplate from "./AdminTemplate";
import LoginHook from "./LoginHook";

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/admin" render={() => {
                    return localStorage.getItem('accessToken') ? <AdminTemplate/> : <Redirect to="/login"/>
                }}>
                    
                </Route>
                <Route path="*">
                    <LoginHook/>
                </Route>
            </Switch>
        </Router>
    )
}

function Admin() {
    let history = useHistory()
    let logout = () => {
        localStorage.removeItem("accessToken")
        history.replace("/login")
    }

    return <div>
        <h2>Admin</h2>
        <button onClick={logout}>Logout</button>
    </div>
}

function Login() {
    let history = useHistory()
    let login = () => {
        localStorage.setItem("accessToken", true)
        history.replace("/admin")
    }

    return <div>
        <h2>Login</h2>
        <button onClick={login}>Login</button>
    </div>
}