import { createProvider } from "reactn"
import { defaultState } from "../reactn/setGlobal"
import { DefaultState } from "../reactn/reactn"
import Api from "../reactn/api/api"

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

export async function handleLogin() {
    const dispatch = Login.getDispatch()
    try {
        dispatch.getLogin("LOADING")
        const result = await Api.fetch({
            method: "GET",
            url: "/schedules"
        })
        dispatch.getLogin("SUCCESS", result.data)
        return result.data
    } catch (err) {
        dispatch.getLogin("ERROR")
        throw err
    }
}

export default Login
