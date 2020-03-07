import { addReducer, setGlobal } from "reactn"
import { DefaultState } from "./reactn"

const defaultState: DefaultState = {
    loading: false,
    error: null,
    data: []
}

setGlobal({
    Login: {
        ...defaultState,
        data: {
            isLogin: false
        }
    },
    User: {
        ...defaultState,
        data: {}
    }
    // Token: Api.getToken()
})

addReducer("login", (global, _, type, payload) => {
    switch (type) {
        case "LOADING":
            global.Login.loading = true
            break
        case "ERROR":
            global.Login.loading = false
            global.Login.error = payload
            break
        case "SUCCESS":
            global.Login.loading = false
            global.Login.error = null
            global.Login.data = { isLogin: true }
            global.Token = payload.token
            break
    }
    return global
})

addReducer("getUser", (global, _, type, payload) => {
    switch (type) {
        case "LOADING":
            global.User.loading = true
            break
        case "ERROR":
            global.User.loading = false
            global.User.error = payload
            break
        case "SUCCESS":
            global.User.loading = false
            global.User.error = null
            global.User.data = payload
            break
    }
    return global
})
