import SignIn from "../Pages/SignIn"
import SignUp from "../Pages/SignUp"
import Home from "../Pages/Dashboard"
import Minimal from "./../layouts/Minimal/Minimal"
import Main from "../layouts/Main/Main"

export interface IRoute {
    Component: ((props: any) => JSX.Element) | React.SFC<any>
    Layout: ((props: any) => JSX.Element) | React.SFC<any>
    exact: boolean
    path: string
}

const routes: IRoute[] = [
    {
        Component: SignUp,
        Layout: Minimal,
        exact: true,
        path: "/sign-up"
    },
    {
        Component: SignIn,
        Layout: Minimal,
        exact: true,
        path: "/sign-in"
    },
    {
        Component: Home,
        Layout: Main,
        exact: true,
        path: "/"
    }
]

export default routes
