import React from "react"
import { Route } from "react-router-dom"

export interface RouteWithLayoutProps {
    component: React.SFC<any>
    layout: React.SFC<any>
    path: string
    exact: boolean
}

const RouteWithLayout: React.SFC<RouteWithLayoutProps> = props => {
    const { layout: Layout, component: Component } = props

    return (
        <Route
            render={matchProps => (
                <Layout>
                    <Component {...matchProps} />
                </Layout>
            )}
        />
    )
}

export default RouteWithLayout
