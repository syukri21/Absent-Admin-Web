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
            return result
        } catch (err) {
            getDispatch().login("ERROR", err)
            throw err
        }
    }

    public static async handleGetUser() {
        try {
            getDispatch().getUser("LOADING")
            const result = await Api.fetch({
                method: "GET",
                url: "/teachers/"
            })
            const token = Api.getToken()
            getDispatch().login("SUCCESS", token)
            getDispatch().getUser("SUCCESS", result.data)
            return result
        } catch (err) {
            getDispatch().getUser("ERROR", "No Token")
            throw err
        }
    }
}
