import { createProvider } from "reactn"
import { defaultState } from "../reactn/setGlobal"
import { DefaultState } from "../reactn/reactn"
import Api from "../reactn/api/api"
import { setGlobalSnackbar } from "./GlobalSnackbar"

const reducers = [{ name: "Login", method: "handle" }]

const INITIAL_STATE: DefaultState = defaultState

const Login = createProvider(INITIAL_STATE)

reducers.map(val => {
    return Login.addReducer(val.method + val.name, (global: any, _, type, payload) => {
        switch (type) {
            case "LOADING":
                global.loading = true
                break
            case "ERROR":
                global.loading = false
                global.error = payload
                break
            case "SUCCESS":
                global.loading = false
                global.error = null
                global.data = payload
                break
        }
        return global
    })
})

/* -------------------------------------------------------------------------- */
/*                              NOTE HANDLE LOGIN                             */
/* -------------------------------------------------------------------------- */

export interface LoginParams {
    username: string
    password: string
    showAlert?: boolean
}

export async function handleLogin({ username, password, showAlert = true }: LoginParams) {
    const dispatch = Login.getDispatch()
    try {
        dispatch.login("LOADING")
        const result = await Api.fetch({
            method: "POST",
            url: "/login",
            data: {
                username: username,
                password: password
            }
        })
        Api.setToken(result.data.token)
        dispatch.login("SUCCESS", result.data)
        if (showAlert) {
            setGlobalSnackbar("SHOW", {
                message: "Login success.",
                severity: "success"
            })
        }
    } catch (err) {
        dispatch.login("ERROR", err)
        setGlobalSnackbar("SHOW", {
            message: "Password or Username is wrong.",
            severity: "error"
        })
    }
}

export function handleLogout() {
    window.location.replace("/sign-in")
    window.onunload = () => {
        window.localStorage.clear()
    }
}
/* -------------------------------------------------------------------------- */

export default Login
