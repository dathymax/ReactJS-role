import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import { AdminRoute } from "./AdminRoute";

  export default function AdminRouter() {
    return (
        <div>
            <ul>
                {
                    AdminRoute.map((item, index) => {
                        return <Menu item={item} key={index}/>
                    })
                }
            </ul>

            <hr />
            <Switch>
                {
                    AdminRoute.map(item => {
                        return <Route path={item.path}>
                        {item.component}
                    </Route>
                    })
                }
            </Switch>
        </div>
    );
}

function Menu ({ item }) {
    let match = useRouteMatch({
        path: item.path
    })

    return <li className={match ? "active" : "inactive"}>
        {match ? ">" : "-"} <Link to={item.path}>{item.label}</Link>
    </li>
}