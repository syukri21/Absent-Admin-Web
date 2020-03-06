import SignIn from "../Pages/SignIn"
import SignUp from "../Pages/SignUp"
import Home from "../Pages/Home"

export interface IRoute {
    component: ((props: any) => JSX.Element) | React.SFC<any>
    exact: boolean
    path: string
}

const routes: IRoute[] = [
    {
        component: SignUp,
        exact: true,
        path: "/sign-up"
    },
    {
        component: SignIn,
        exact: true,
        path: "/sign-in"
    },
    {
        component: Home,
        exact: true,
        path: "/"
    }
]

export default routes
