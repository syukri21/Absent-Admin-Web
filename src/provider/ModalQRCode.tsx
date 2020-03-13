import { createProvider } from "reactn"

const INITIAL_STATE = {
    isOpen: false,
    token: ""
}

const ModalQRCode = createProvider(INITIAL_STATE)

export function handleOpenModalQRCode() {
    ModalQRCode.setGlobal({
        ...global,
        isOpen: true
    })
}

export function handleCloseModalQRCode() {
    ModalQRCode.setGlobal({
        ...global,
        isOpen: false
    })
}

export default ModalQRCode
