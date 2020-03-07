import React from "react"
import { ThemeProvider } from "@material-ui/styles"
import theme from "./theme"
import SignIn from "./Pages/SignIn/SignIn"
import { Router, Switch, Route } from "react-router-dom"
import { createBrowserHistory } from "history"
import routes, { IRoute } from "./Routes"
import RouteWithLayout from "./components/RouteWithLayout/RouteWithLayout"

import "react-perfect-scrollbar/dist/css/styles.css"
import "./assets/scss/index.scss"

const browserHistory = createBrowserHistory()

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router history={browserHistory}>
                <Switch>
                    {routes.map((route: IRoute) => {
                        const Component = route.Component
                        const Layout = route.Layout
                        return <RouteWithLayout component={Component} exact={route.exact} layout={Layout} path={route.path} />
                    })}
                    <SignIn></SignIn>
                </Switch>
            </Router>
        </ThemeProvider>
    )
}

export default App
