import { createProvider } from "reactn"
import { DefaultState } from "../reactn/reactn"
import Api from "../reactn/api/api"
import { handleLogout } from "./Login"
import { setGlobalSnackbar } from "./GlobalSnackbar"
import jwt_decode from "jwt-decode"

export const defaultStateObj = {
    loading: false,
    error: null,
    data: {}
}

const reducers = [{ name: "User", method: "get" }]

const INITIAL_STATE: DefaultState = defaultStateObj

const User = createProvider(INITIAL_STATE)

reducers.map(val => {
    return User.addReducer(val.method + val.name, (global: any, _, type, payload) => {
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
/*                                  NOTE GET                                  */
/* -------------------------------------------------------------------------- */

export async function getUser() {
    const dispatch = User.getDispatch()
    const token = Api.getToken()
    const parseToken: any = jwt_decode(token || "")

    try {
        dispatch.getUser("LOADING")
        const result = await Api.fetch({
            method: "GET",
            url: parseToken.role_id === 1 ? "/teachers/" : "/admins/"
        })
        dispatch.getUser("SUCCESS", result.data)
    } catch (err) {
        setGlobalSnackbar("SHOW", {
            message: "Token Invalid",
            severity: "error"
        })
        dispatch.getUser("ERROR", "No Token")
        // handleLogout()
    }
}

/* -------------------------------------------------------------------------- */

export default User
