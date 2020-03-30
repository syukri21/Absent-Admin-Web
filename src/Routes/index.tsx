import SignIn from "../Pages/SignIn"
import SignUp from "../Pages/SignUp"
import Dashboard from "../Pages/Teacher/Dashboard"
import Minimal from "./../layouts/Minimal/Minimal"
import Main from "../layouts/Main/Main"
import Course from "../Pages/Admin/Course"
import Class from "../Pages/Teacher/Class/Class"
import Settings from "../Pages/Settings/Settings"

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
        Component: Settings,
        Layout: Main,
        exact: true,
        path: "/settings",
        Protected: false
    },

    /* -------------------------------------------------------------------------- */
    /*                                  NOTE ALL                                  */
    /* -------------------------------------------------------------------------- */

    {
        Component: Dashboard,
        Layout: Main,
        exact: true,
        path: "/",
        Protected: true,
        redirect: [{ roleId: 3, to: "/course" }]
    },
    {
        Component: Class,
        Layout: Main,
        exact: true,
        path: "/class",
        Protected: true,
        redirect: [{ roleId: 3, to: "/course" }]
    },

    /* -------------------------------------------------------------------------- */
    /*                                 NOTE ADMIN                                 */
    /* -------------------------------------------------------------------------- */

    {
        Component: Course,
        Layout: Main,
        exact: true,
        path: "/course",
        Protected: true,
        redirect: [{ roleId: 1, to: "/" }]
    }
]

export default routes
