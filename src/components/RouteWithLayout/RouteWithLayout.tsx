import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useEffect } from "reactn"
import UserService from "../../reactn/service/UserService"
import Api from "../../reactn/api/api"

export interface RouteWithLayoutProps {
    component: React.SFC<any>
    layout: React.SFC<any>
    path: string
    exact: boolean
    protect: boolean
}

const RouteWithLayout: React.SFC<RouteWithLayoutProps> = props => {
    const { layout: Layout, component: Component, protect } = props
    const token = Api.getToken() ? true : false

    useEffect(() => {
        if (protect) {
            UserService.handleGetUser()
        }
    }, [])

    return (
        <Route
            render={matchProps =>
                !token && protect ? (
                    <Redirect to='/sign-in'></Redirect>
                ) : (
                    <Layout>
                        <Component {...matchProps} />
                    </Layout>
                )
            }
        />
    )
}

export default RouteWithLayout
