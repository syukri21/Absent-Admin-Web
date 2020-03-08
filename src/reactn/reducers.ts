import { addReducer } from "reactn"
import "./setGlobal"

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

addReducer("register", (global, _, type, payload) => {
    switch (type) {
        case "LOADING":
            global.Register.loading = true
            break
        case "ERROR":
            global.Register.loading = false
            global.Register.error = payload
            break
        case "SUCCESS":
            global.Register.loading = false
            global.Register.error = null
            global.Register.data = payload
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

addReducer("showGlobalSnackbar", (global, _, type, payload) => {
    switch (type) {
        case "SHOW":
            global.GlobalSnackbar.isOpen = true
            global.GlobalSnackbar.data = payload
            break
        case "HIDE":
            global.GlobalSnackbar.isOpen = false
            global.GlobalSnackbar.data.message = ""
            break
        default:
            break
    }
    return global
})

addReducer("getNextSchedule", (global, _, type, payload) => {
    switch (type) {
        case "LOADING":
            global.NextSchedule.loading = true
            break
        case "ERROR":
            global.NextSchedule.loading = false
            global.NextSchedule.error = payload
            break
        case "SUCCESS":
            global.NextSchedule.loading = false
            global.NextSchedule.error = null
            global.NextSchedule.data = payload
            break
    }
    return global
})

addReducer("setActiveSchedule", (global, _, type, payload) => {
    switch (type) {
        case "LOADING":
            global.ActiveSchedule.loading = true
            break
        case "ERROR":
            global.ActiveSchedule.loading = false
            global.ActiveSchedule.error = payload
            break
        case "SUCCESS":
            global.ActiveSchedule.loading = false
            global.ActiveSchedule.error = null
            global.ActiveSchedule.data = payload
            break
    }
    return global
})
