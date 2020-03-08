import { getDispatch } from "reactn"
import Api from "../api/api"

export interface LoginParams {
    username: string
    password: string
}

export default class UserService {
    public static async handleLogin(params: LoginParams) {
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
            Api.setToken(result.data.token)
            dispatch.login("SUCCESS", result.data)
            dispatch.showGlobalSnackbar("SHOW", {
                message: "Login success.",
                severity: "success"
            })
            return result
        } catch (err) {
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
            console.log("UserService -> handleGetUser -> result", result)
            const token = Api.getToken()
            dispatch.login("SUCCESS", token)
            dispatch.getUser("SUCCESS", result.data)
            return result
        } catch (err) {
            dispatch.getUser("ERROR", "No Token")
            UserService.handleLogout()
            throw err
        }
    }
}
