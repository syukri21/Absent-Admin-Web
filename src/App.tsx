import React from "react"
import { ThemeProvider } from "@material-ui/styles"
import theme from "./theme"
import SignIn from "./Pages/SignIn/SignIn"
import { Router, Switch } from "react-router-dom"
import { createBrowserHistory } from "history"
import routes, { IRoute } from "./Routes"
import RouteWithLayout from "./components/RouteWithLayout"
import ReactnProvider from "./reactn/ReactnProvider"

import "react-perfect-scrollbar/dist/css/styles.css"
import "./assets/scss/index.scss"
import Api from "./reactn/api/api"

const browserHistory = createBrowserHistory()

function App() {
    const token = Api.getToken() ? true : false
    console.log("App -> Api.getToken() ", Api.getToken())
    console.log("App -> token", token)

    return (
        <ThemeProvider theme={theme}>
            <Router history={browserHistory}>
                <ReactnProvider isLogin={token}>
                    <Switch>
                        {routes.map((route: IRoute, key: number) => {
                            const Component = route.Component
                            const Layout = route.Layout
                            return (
                                <RouteWithLayout
                                    key={key}
                                    component={Component}
                                    exact={route.exact}
                                    layout={Layout}
                                    path={route.path}
                                    redirect={route.Protected && !token}
                                />
                            )
                        })}
                        <SignIn></SignIn>
                    </Switch>
                </ReactnProvider>
            </Router>
        </ThemeProvider>
    )
}

export default App
