import React from "react"
import { ThemeProvider } from "@material-ui/styles"
import theme from "./theme"
import SignIn from "./Pages/SignIn/SignIn"
import { Router, Switch, Route } from "react-router-dom"
import { createBrowserHistory } from "history"
import routes, { IRoute } from "./Routes"

import "react-perfect-scrollbar/dist/css/styles.css"
import "./assets/scss/index.scss"

const browserHistory = createBrowserHistory()

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router history={browserHistory}>
                <Switch>
                    {routes.map((route: IRoute) => {
                        const Component = route.component
                        return <Route key={route.path} path={route.path} exact={route.exact} render={() => <Component />} />
                    })}
                    <SignIn></SignIn>
                </Switch>
            </Router>
        </ThemeProvider>
    )
}

export default App
