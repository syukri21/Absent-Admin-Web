import ModalNewSchedule, { handleCloseModalNewSchedule } from "../../../../../../provider/ModalNewSchedule"
import { useState } from "react"

interface UseModalNewSchedule {
    isOpen: boolean
    handleClose: () => void
    selectIsOpen: (field: string) => boolean
    handleOpenSelect: (field: string) => void
    handleCloseSelect: (field: string) => void
    handleChangeSelect: (field: string, value: number) => void
}

export default function useModalNewSchedule(): UseModalNewSchedule {
    const [select, setSelect] = useState<any>({
        day: {
            isOpen: false,
            value: null
        },
        course: {
            isOpen: false,
            value: null
        }
    })

    const [modalNewSchedule] = ModalNewSchedule.useGlobal()

    const handleOpenSelect = (field: string) => {
        setSelect({
            ...select,
            [field]: {
                ...select[field],
                isOpen: true
            }
        })
    }

    const handleCloseSelect = (field: string) => {
        setSelect({
            ...select,
            [field]: {
                ...select[field],
                isOpen: false
            }
        })
    }

    const handleChangeSelect = (field: string, value: number) => {
        setSelect({
            ...select,
            [field]: {
                ...select[field],
                value,
                isOpen: false
            }
        })
    }

    return {
        isOpen: modalNewSchedule.isOpen,
        handleClose: handleCloseModalNewSchedule,
        selectIsOpen: (field: string) => select[field].isOpen,
        handleOpenSelect,
        handleCloseSelect,
        handleChangeSelect
    }
}
