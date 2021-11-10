import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AdminRouter from "./AdminRouter";

export default function BasicExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/admin">Admin</Link>
                    </li>
                    <li>
                        <Link to="/404">404</Link>
                    </li>
                </ul>

                <hr />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route> 
                    <Route path="/admin">
                        <AdminRouter />
                    </Route> 
                    <Route path="*">
                        <NotFound />
                    </Route> 
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <div>
        <h2>Home</h2>
        </div>
    );
}

function NotFound() {
    return (
        <div>
        <h2>404 Not Found</h2>
        </div>
    );
}
