import React from "react"
import { Route, Redirect } from "react-router-dom"

export interface RouteWithLayoutProps {
    component: React.SFC<any>
    layout: React.SFC<any>
    path: string
    exact: boolean
    redirect: boolean
}

const RouteWithLayout: React.SFC<RouteWithLayoutProps> = props => {
    const { layout: Layout, component: Component, redirect } = props

    return (
        <Route
            render={matchProps =>
                redirect ? (
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
