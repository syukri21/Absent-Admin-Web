import axios, { AxiosRequestConfig } from "axios"

class Api {
    private static instance: Api
    private apiUrl: string | undefined = process.env.REACT_APP_API_URL
    private token?: string

    private constructor() {}

    public static getInstance(): Api {
        if (!Api.instance) {
            Api.instance = new Api()
        }

        return Api.instance
    }

    public getToken() {
        if (window) {
            const token = localStorage.getItem("token")
            if (token) {
                this.token = token
            }
        }
        return this.token
    }

    public setToken(token: string) {
        if (window) window.localStorage.setItem("token", token)
    }

    public fetch(params: any) {
        const axiosRequestConfig: AxiosRequestConfig = {
            baseURL: this.apiUrl
        }

        if (this.token) axiosRequestConfig.headers = this.getToken()
        return axios.create(axiosRequestConfig)(params)
    }
}

export default Api.getInstance()
