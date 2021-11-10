import About from "./About";
import Dashboard from "./Dashboard";

export const AdminRoute = [
    {
        path: '/admin/dashboard',
        label: 'Dash board',
        component: <Dashboard/>,
    },
    {
        path: '/admin/about',
        label: 'About',
        component: <About/>,
    }
]