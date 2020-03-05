import SignIn from "../Pages/SignIn/SignIn"

export interface IRoute {
    component: (props: any) => JSX.Element
    exact: boolean
    path: string
}

const routes: IRoute[] = [
    {
        component: SignIn,
        exact: true,
        path: "/signin"
    },
    {
        component: SignIn,
        exact: true,
        path: "/"
    }
]

export default routes
