import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery"
import useTheme from "@material-ui/styles/useTheme"
import { CustomTheme } from "../../../../../../../theme/customTheme"
import ModalQRCode, { handleCloseModalQRCode } from "../../../../../../../provider/ModalQRCode"
import ActiveSchedule from "../../../../../../../provider/ActiveSchedule"
import { getDayScheduleFormat } from "../../../../../../../util/scheduleFromNow"
import AbsentSetup, { getAbsentSetup } from "../../../../../../../provider/AbsentSetup"
import { useEffect } from "react"

interface UseModalQRCode {
    fullScreen: boolean
    handleClose: () => void
    isOpen: boolean
    token: string | null
    courseName: string
    courseDate: string
    loading: boolean
}

function useModalQRCode(): UseModalQRCode {
    const theme = useTheme<CustomTheme>()
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"))
    const [providerModalQRCode] = ModalQRCode.useGlobal()
    const [activeSchedule] = ActiveSchedule.useGlobal()
    const [absentSetup] = AbsentSetup.useGlobal()

    const courseName = activeSchedule.data.Course ? activeSchedule.data.Course.name : ""
    const courseDate = activeSchedule.data.Course ? getDayScheduleFormat(activeSchedule.data).format("DD MMMM YYYY: HH:mm:ss") : ""
    const courseId = activeSchedule.data.Course ? activeSchedule.data.Course.ID : null
    const scheduleId = activeSchedule.data.id
    const isOpen = providerModalQRCode.isOpen
    const token = absentSetup.data.token

    useEffect(() => {
        if (courseId && isOpen) {
            getAbsentSetup({
                data: {
                    courseId,
                    numberOfMeetings: 1,
                    scheduleId
                }
            })
        }
        // eslint-disable-next-line
    }, [courseId, isOpen])

    return {
        fullScreen,
        courseName,
        courseDate,
        handleClose: handleCloseModalQRCode,
        isOpen,
        token,
        loading: absentSetup.loading
    }
}

export default useModalQRCode
