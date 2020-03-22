import SignIn from "../Pages/SignIn"
import SignUp from "../Pages/SignUp"
import Dashboard from "../Pages/Dashboard"
import Minimal from "./../layouts/Minimal/Minimal"
import Main from "../layouts/Main/Main"
import AdminDashboard from "../Pages/AdminDashboard/AdminDashboard"

export interface RouteRedirect {
    roleId: number
    to: string
}

export interface IRoute {
    Component: ((props: any) => JSX.Element) | React.SFC<any>
    Layout: ((props: any) => JSX.Element) | React.SFC<any>
    exact: boolean
    path: string
    Protected: boolean
    redirect?: RouteRedirect[]
}

const routes: IRoute[] = [
    {
        Component: SignUp,
        Layout: Minimal,
        exact: true,
        path: "/sign-up",
        Protected: false
    },
    {
        Component: SignIn,
        Layout: Minimal,
        exact: true,
        path: "/sign-in",
        Protected: false
    },
    {
        Component: Dashboard,
        Layout: Main,
        exact: true,
        path: "/",
        Protected: true,
        redirect: [{ roleId: 3, to: "/admin" }]
    },
    {
        Component: AdminDashboard,
        Layout: Main,
        exact: true,
        path: "/admin",
        Protected: true,
        redirect: [{ roleId: 1, to: "/" }]
    }
]

export default routes
