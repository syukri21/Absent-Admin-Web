import { getDispatch } from "reactn"
import Api from "../api/api"

export interface LoginParams {
    username: string
    password: string
}

export interface RegisterParams {
    username: string
    password: string
    fullname: string
}

export default class UserService {
    public static async handleLogin(params: LoginParams, showAlert: boolean = true) {
        const dispatch = getDispatch()

        try {
            dispatch.login("LOADING")
            const result = await Api.fetch({
                method: "POST",
                url: "/login",
                data: {
                    username: params.username,
                    password: params.password
                }
            })
            console.log("UserService -> handleLogin -> result", result)
            Api.setToken(result.data.token)
            dispatch.login("SUCCESS", result.data)
            if (showAlert) {
                dispatch.showGlobalSnackbar("SHOW", {
                    message: "Login success.",
                    severity: "success"
                })
            }
            return result
        } catch (err) {
            console.log("UserService -> handleLogin -> err", err)
            dispatch.login("ERROR", err)
            dispatch.showGlobalSnackbar("SHOW", {
                message: "Password or Username is wrong.",
                severity: "error"
            })
            throw err
        }
    }

    public static async handleLogout() {
        window.location.replace("/sign-in")
        window.onunload = () => {
            window.localStorage.clear()
        }
    }

    public static async handleGetUser() {
        const dispatch = getDispatch()
        try {
            dispatch.getUser("LOADING")
            const result = await Api.fetch({
                method: "GET",
                url: "/teachers/"
            })
            const token = Api.getToken()
            dispatch.login("SUCCESS", token)
            dispatch.getUser("SUCCESS", result.data)
            return result
        } catch (err) {
            dispatch.showGlobalSnackbar("SHOW", {
                message: "Token Invalid",
                severity: "error"
            })
            dispatch.getUser("ERROR", "No Token")
            UserService.handleLogout()

            throw err
        }
    }

    public static async handleRegister(params: RegisterParams) {
        const dispatch = getDispatch()
        try {
            dispatch.register("LOADING")
            const result = await Api.fetch({
                method: "POST",
                url: "/teachers/register",
                data: {
                    username: params.username,
                    password: params.password,
                    fullname: params.fullname
                }
            })
            dispatch.register("SUCCESS", result.data)
            await UserService.handleLogin(params, false)
            dispatch.showGlobalSnackbar("SHOW", {
                message: "Register success.",
                severity: "success"
            })
        } catch (err) {
            dispatch.register("ERROR", err)
            dispatch.showGlobalSnackbar("SHOW", {
                message: "Something went wrong.",
                severity: "error"
            })
            throw err
        }
    }
}
