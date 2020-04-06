import React, { useState } from "react"
import { Route, Redirect } from "react-router-dom"
import { useEffect } from "reactn"
import Api from "../../reactn/api/api"
import { getUser } from "../../provider/User"
import jwt_decode from "jwt-decode"
import { RouteRedirect } from "../../Routes/index"

export interface RouteWithLayoutProps {
    component: React.SFC<any>
    layout: React.SFC<any>
    loading: ((props: any) => JSX.Element) | React.SFC<any> | null
    path: string
    exact: boolean
    protect: boolean
    redirect: RouteRedirect[] | undefined
}

const RouteWithLayout: React.SFC<RouteWithLayoutProps> = (props) => {
    const { layout: Layout, component: Component, protect, redirect, loading: Loading } = props
    const [to, setTo] = useState<string | undefined>()

    const token = Api.getToken() || false
    useEffect(() => {
        if (protect && token) {
            getUser()

            // parse Token
            let parseToken: any = jwt_decode(token || "")
            if (typeof redirect !== "undefined") {
                const to = redirect.find((val) => val.roleId === parseToken.role_id)?.to
                setTo(to)
            }
        }
        // eslint-disable-next-line
    }, [])

    return (
        <Route
            render={(matchProps) => {
                if (!token && protect) return <Redirect to='/sign-in'></Redirect>

                if (to) return <Redirect to={to}></Redirect>

                return (
                    <Layout>
                        <React.Suspense fallback={Loading}>
                            <Component {...matchProps} />
                        </React.Suspense>
                    </Layout>
                )
            }}
        />
    )
}

export default RouteWithLayout
