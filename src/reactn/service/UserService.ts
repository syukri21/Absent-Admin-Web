import { getDispatch } from "reactn"
import Api from "../api/api"

export interface LoginParams {
    username: string
    password: string
}

export default class UserService {
    public static async handleLogin(params: LoginParams) {
        try {
            getDispatch().login("LOADING")
            const result = await Api.fetch({
                method: "POST",
                url: "/login",
                data: {
                    username: params.username,
                    password: params.password
                }
            })
            Api.setToken(result.data.token)
            getDispatch().login("SUCCESS", result.data)
        } catch (err) {
            getDispatch().login("ERROR", err)
        }
    }

    public static async handleGetUser() {
        try {
            getDispatch().getUser("LOADING")
            const result = await Api.fetch({
                method: "GET",
                url: "/teachers/"
            })
            getDispatch().getUser("SUCCESS", result.data)
        } catch (err) {
            console.log("UserService -> handleGetUser -> err", err)
            getDispatch().getUser("ERROR", err)
        }
    }
}
