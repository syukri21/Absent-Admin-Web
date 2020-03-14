import ModalNewSchedule, { handleCloseModalNewSchedule } from "../../../../../../provider/ModalNewSchedule"
import { useState } from "react"
import useCourseSelect from "./useCourseSelect"
import { DefaultState } from "../../../../../../reactn/reactn"
import useCreateSchedule from "./useCreateSchedule"
import { setGlobalSnackbar } from "../../../../../../provider/GlobalSnackbar"

interface UseModalNewSchedule {
    isOpen: boolean
    handleClose: () => void
    selectIsOpen: (field: string) => boolean
    handleOpenSelect: (field: string) => void
    handleCloseSelect: (field: string) => void
    handleChangeSelect: (field: string, value: number) => void
    handleSubmit: () => void
    select: any
    courses: DefaultState
}

export default function useModalNewSchedule(): UseModalNewSchedule {
    const [select, setSelect] = useState<any>({
        day: { isOpen: false, value: "" },
        course: { isOpen: false, value: "" },
        week: { isOpen: false, value: "" },
        time: { value: new Date() }
    })

    const [modalNewSchedule] = ModalNewSchedule.useGlobal()
    const { courses } = useCourseSelect(modalNewSchedule.isOpen)
    const createSchedule = useCreateSchedule()

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

    const handleSubmit = () => {
        createSchedule
            .handleCreateSchedule({
                courseId: select["course"].value,
                day: select["day"].value,
                time: select["time"].value,
                week: select["week"].value
            })
            .then(() => {
                setGlobalSnackbar("SHOW", {
                    message: "Something went wrong",
                    severity: "success"
                })
                handleCloseModalNewSchedule()
            })
    }

    return {
        isOpen: modalNewSchedule.isOpen,
        handleClose: handleCloseModalNewSchedule,
        selectIsOpen: (field: string) => select[field].isOpen,
        handleOpenSelect,
        handleCloseSelect,
        handleChangeSelect,
        select: select,
        courses,
        handleSubmit
    }
}
