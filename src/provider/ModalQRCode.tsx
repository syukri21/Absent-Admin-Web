import { createProvider } from "reactn"
import { handleChangeTokenAbsentSetup } from "./AbsentSetup"

const INITIAL_STATE = {
    isOpen: false,
    token: ""
}

const ModalQRCode = createProvider(INITIAL_STATE)

ModalQRCode.addReducer("handleModalQRCode", (global, _, type, payload) => {
    switch (type) {
        case "OPEN":
            global.isOpen = true
            break
        case "CLOSE":
            global.isOpen = false
            break
        case "CHANGE_TOKEN":
            global.token = payload
            break
        default:
            break
    }

    return global
})

export function handleOpenModalQRCode() {
    const dispatch = ModalQRCode.getDispatch()
    dispatch.handleModalQRCode("OPEN")
}

export function handleCloseModalQRCode() {
    const dispatch = ModalQRCode.getDispatch()
    dispatch.handleModalQRCode("CLOSE")
}

export function handleChangeTokenModalQRCode(token: string) {
    const dispatch = ModalQRCode.getDispatch()
    dispatch.handleModalQRCode("CHANGE_TOKEN", token)
    handleChangeTokenAbsentSetup(token)
}

export default ModalQRCode
