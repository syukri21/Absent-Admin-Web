import { createProvider } from "reactn"
import { defaultState } from "../reactn/setGlobal"
import { DefaultState, Type } from "../reactn/reactn"
import Api from "../reactn/api/api"
import { handleLogin } from "./Login"
import { setGlobalSnackbar } from "./GlobalSnackbar"

const reducers = [{ name: "Register", method: "handle" }]

const INITIAL_STATE: DefaultState = defaultState

const Register = createProvider(INITIAL_STATE)

reducers.map(val => {
    return Register.addReducer(val.method + val.name, (global: any, _, type: Type, payload) => {
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
/*                              NOTE HANDLE Register                             */
/* -------------------------------------------------------------------------- */

export interface RegisterParams {
    username: string
    password: string
    fullname: string
}

export async function handleRegister(params: RegisterParams) {
    const dispatch = Register.getDispatch()
    try {
        dispatch.handleRegister("LOADING")
        const result = await Api.fetch({
            method: "POST",
            url: "/teachers/register",
            data: {
                username: params.username,
                password: params.password,
                fullname: params.fullname
            }
        })
        dispatch.handleRegister("SUCCESS", result.data)
        await handleLogin({ username: params.username, password: params.password, showAlert: false })
        dispatch.setGlobalSnackbar("SHOW", {
            message: "Register success.",
            severity: "success"
        })
    } catch (err) {
        dispatch.handleRegister("ERROR", err)
        dispatch.setGlobalSnackbar("SHOW", {
            message: "Something went wrong.",
            severity: "error"
        })
        throw err
    }
}

/* -------------------------------------------------------------------------- */

export default Register
