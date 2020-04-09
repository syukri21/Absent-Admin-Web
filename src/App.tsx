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
import GlobalSnackbar from "./components/GlobalSnackbar"
import { getUser } from "./provider/User"

const browserHistory = createBrowserHistory()

function App() {
    React.useMemo(() => {
        getUser()
    }, [])
    return (
        <ThemeProvider theme={theme}>
            <Router history={browserHistory}>
                <GlobalSnackbar></GlobalSnackbar>
                <ReactnProvider>
                    <Switch>
                        {routes.map((route: IRoute, key: number) => {
                            const Component = route.Component
                            const Layout = route.Layout
                            const Loading = route.Loading
                            const protect = route.Protected
                            return (
                                <RouteWithLayout
                                    key={key}
                                    component={Component}
                                    exact={route.exact}
                                    loading={Loading}
                                    layout={Layout}
                                    path={route.path}
                                    protect={protect}
                                    redirect={route.redirect}
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
