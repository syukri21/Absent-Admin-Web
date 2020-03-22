import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useEffect } from "reactn"
import Api from "../../reactn/api/api"
import { getUser } from "../../provider/User"
import User from "../../provider/User"

export interface RouteWithLayoutProps {
    component: React.SFC<any>
    layout: React.SFC<any>
    path: string
    exact: boolean
    protect: boolean
    previlage: "admin" | "teacher"
}

const RouteWithLayout: React.SFC<RouteWithLayoutProps> = props => {
    const { layout: Layout, component: Component, protect, previlage } = props
    const token = Api.getToken() ? true : false
    const [user] = User.useGlobal()
    console.log("user", user)

    useEffect(() => {
        if (protect) getUser()
        // eslint-disable-next-line
    }, [])

    return (
        <Route
            render={matchProps => {
                if (!token && protect) return <Redirect to='/sign-in'></Redirect>

                if (previlage === "admin") return <Redirect to='/'></Redirect>

                return (
                    <Layout>
                        <Component {...matchProps} />
                    </Layout>
                )
            }}
        />
    )
}

export default RouteWithLayout
