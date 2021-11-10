import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation,
    useRouteMatch,
    useParams,
    useHistory
  } from "react-router-dom";

export default function RouterParams() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about?name=Dat&id=dat">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/Dat/09">Dash board</Link>
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
                    <Route path="/about">
                        <About />
                    </Route> 
                    <Route path="/dashboard/:name/:id">
                        <Dashboard />
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

function About() {
    let location = useLocation()
    console.log(location)
    let query = new URLSearchParams(location.search)

    return (
        <div>
            <h2>About {query.get("name")} - {query.get("id")}</h2>
        </div>
    );
}

function Dashboard() {
    let {name, id} = useParams()

    return (
        <div>
            <h2>Dashboard {name} - {id}</h2>
        </div>
    );
}

function NotFound() {
    let location = useLocation()
    console.log(location)

    let match = useRouteMatch()
    console.log(match)

    let history = useHistory()
    return (
        <div>
            <h2>{location.pathname} 404 Not Found</h2>
            <button onClick={() => history.goBack()}>Back</button>
        </div>
    );
}
