import React from "react"

import Minimal from "./../layouts/Minimal/Minimal"
import Main from "../layouts/Main/Main"

const Settings = React.lazy(() => import("../Pages/Settings/Settings"))
const Class = React.lazy(() => import("../Pages/Teacher/Class/Class"))
const Course = React.lazy(() => import("../Pages/Admin/Course"))
const Dashboard = React.lazy(() => import("../Pages/Teacher/Dashboard"))
const SignUp = React.lazy(() => import("../Pages/SignUp"))
const SignIn = React.lazy(() => import("../Pages/SignIn"))

export interface RouteRedirect {
    roleId: number
    to: string
}

export interface IRoute {
    Component: ((props: any) => JSX.Element) | React.SFC<any>
    Layout: ((props: any) => JSX.Element) | React.SFC<any>
    Loading: ((props: any) => JSX.Element) | React.SFC<any> | null
    exact: boolean
    path: string
    Protected: boolean
    redirect?: RouteRedirect[]
}

const routes: IRoute[] = [
    {
        Component: SignUp,
        Layout: Minimal,
        Loading: null,
        exact: true,
        path: "/sign-up",
        Protected: false,
    },
    {
        Component: SignIn,
        Layout: Minimal,
        Loading: null,
        exact: true,
        path: "/sign-in",
        Protected: false,
    },

    {
        Component: Settings,
        Layout: Main,
        exact: true,
        Loading: null,

        path: "/settings",
        Protected: false,
    },

    /* -------------------------------------------------------------------------- */
    /*                                  NOTE ALL                                  */
    /* -------------------------------------------------------------------------- */

    {
        Component: Dashboard,
        Loading: null,
        Layout: Main,
        exact: true,
        path: "/",
        Protected: true,
        redirect: [{ roleId: 3, to: "/course" }],
    },
    {
        Component: Class,
        Layout: Main,
        exact: true,
        Loading: null,
        path: "/class",
        Protected: true,
        redirect: [{ roleId: 3, to: "/course" }],
    },

    /* -------------------------------------------------------------------------- */
    /*                                 NOTE ADMIN                                 */
    /* -------------------------------------------------------------------------- */

    {
        Component: Course,
        Loading: null,
        Layout: Main,
        exact: true,
        path: "/course",
        Protected: true,
        redirect: [{ roleId: 1, to: "/" }],
    },
]

export default routes
