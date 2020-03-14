import { createProvider } from "reactn"

const INITIAL_STATE = {
    isOpen: false
}

const ModalNewSchedule = createProvider(INITIAL_STATE)

export function handleOpenModalNewSchedule() {
    ModalNewSchedule.setGlobal({
        isOpen: true
    })
}

export function handleCloseModalNewSchedule() {
    ModalNewSchedule.setGlobal({
        isOpen: false
    })
}

export default ModalNewSchedule
