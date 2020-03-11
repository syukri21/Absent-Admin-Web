import { createProvider } from "reactn"
import { severity } from "../reactn/reactn"

export const defaultStateObj = {
    isOpen: false,
    data: {}
}

const reducers = [{ name: "GlobalSnackbar", method: "set" }]
const INITIAL_STATE = defaultStateObj
const GlobalSnackbar = createProvider(INITIAL_STATE)

reducers.map(val => {
    return GlobalSnackbar.addReducer(val.method + val.name, (global: any, _, type, payload) => {
        switch (type) {
            case "SHOW":
                global.isOpen = true
                break
            case "HIDE":
                global.isOpen = false
                global.data = payload
                break
        }
        return global
    })
})

type GlobalSnackbarType = "SHOW" | "HIDE"
interface Payload {
    message: string
    severity: severity
}

export function setGlobalSnackbar(type: GlobalSnackbarType, payload: Payload) {
    const dispatch = GlobalSnackbar.getDispatch()
    dispatch.setGlobalSnackbar(type, payload)
}

export default GlobalSnackbar
