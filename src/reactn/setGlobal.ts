import { setGlobal } from "reactn"
import { DefaultState } from "./reactn"

export const defaultState: DefaultState = {
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
    },
    GlobalSnackbar: {
        isOpen: false,
        data: {}
    },
    Register: {
        ...defaultState,
        data: {}
    }
})
