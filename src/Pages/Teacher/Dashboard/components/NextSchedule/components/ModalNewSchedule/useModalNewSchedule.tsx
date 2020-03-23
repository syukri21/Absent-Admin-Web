import ModalNewSchedule, { handleCloseModalNewSchedule } from "../../../../../../../provider/ModalNewSchedule"
import { useState } from "react"
import useCourseSelect from "./useCourseSelect"
import { DefaultState } from "../../../../../../../reactn/reactn"
import useCreateSchedule from "./useCreateSchedule"
import { setGlobalSnackbar } from "../../../../../../../provider/GlobalSnackbar"
import { getNextSchedule } from "../../../../../../../provider/NextSchedule"
import dayjs from "dayjs"
import validate from "validate.js"
import { useEffect } from "react"

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
    hasError: (field: string) => boolean
}

const schema = {
    day: { presence: { allowEmpty: false, message: "is required" } },
    course: { presence: { allowEmpty: false, message: "is required" } },
    week: { presence: { allowEmpty: false, message: "is required" } },
    time: { presence: { allowEmpty: false, message: "is required" } }
}

export default function useModalNewSchedule(): UseModalNewSchedule {
    const [select, setSelect] = useState<any>({
        day: { isOpen: false, value: "" },
        course: { isOpen: false, value: "" },
        week: { isOpen: false, value: "" },
        time: { value: dayjs() },
        isValid: false,
        values: {},
        touched: {},
        errors: {}
    })

    function validateErrors(touched = false) {
        const time: dayjs.Dayjs = select["time"].value
        const timeInMinute = time.get("minute") + time.get("hour") * 60

        const errors = validate({ day: select.values.day, course: select.values.course, week: select.values.week, time: timeInMinute }, schema)

        setSelect((select: any) => ({
            ...select,
            isValid: errors ? false : true,
            errors: errors || {},
            touched: touched ? { day: true, course: true, week: true, time: true } : {}
        }))
    }

    useEffect(() => {
        validateErrors()
        // eslint-disable-next-line
    }, [select.values])

    const [modalNewSchedule] = ModalNewSchedule.useGlobal()
    const { courses, isReady } = useCourseSelect(modalNewSchedule.isOpen)
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
            values: { ...select.values, [field]: value },
            [field]: {
                ...select[field],
                value,
                isOpen: false
            }
        })
    }

    const handleSubmit = () => {
        const isValid = Object.keys(select.errors).length === 0 && select.errors.constructor === Object
        if (!isValid) {
            validateErrors(true)
        } else {
            const time: dayjs.Dayjs = select["time"].value
            const timeInMinute = time.get("minute") + time.get("hour") * 60

            createSchedule
                .handleCreateSchedule({
                    courseId: select["course"].value,
                    day: select["day"].value,
                    time: timeInMinute,
                    week: select["week"].value
                })
                .then(() => {
                    setGlobalSnackbar("SHOW", {
                        message: "Success add new schedule",
                        severity: "success"
                    })
                    handleCloseModalNewSchedule()
                    getNextSchedule()
                })
        }
    }

    const hasError = (field: string) => (select.touched[field] && select.errors[field] ? true : false)

    return {
        isOpen: modalNewSchedule.isOpen && isReady,
        handleClose: handleCloseModalNewSchedule,
        selectIsOpen: (field: string) => select[field].isOpen,
        handleOpenSelect,
        handleCloseSelect,
        handleChangeSelect,
        select: select,
        courses,
        handleSubmit,
        hasError
    }
}
