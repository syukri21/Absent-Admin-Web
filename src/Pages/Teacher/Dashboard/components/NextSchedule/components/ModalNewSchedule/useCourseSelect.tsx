import Courses, { getCourses } from "../../../../../../../provider/Courses"
import { useEffect, useState } from "reactn"
import { DefaultState } from "../../../../../../../reactn/reactn"
import NextSchedule from "../../../../../../../provider/NextSchedule"
import { handleCloseModalNewSchedule } from "../../../../../../../provider/ModalNewSchedule"
import { setGlobalSnackbar } from "../../../../../../../provider/GlobalSnackbar"

interface UseCoursesSelect {
    courses: DefaultState
    isReady: boolean
}

export default function useCourseSelect(isOpen: boolean): UseCoursesSelect {
    const [courses, setCourse] = Courses.useGlobal()
    const nextSchedule = NextSchedule.getGlobal()
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        if (isOpen) getCourses()
        // eslint-disable-next-line
    }, [isOpen])

    useEffect(() => {
        if (isOpen) {
            if (courses.data.length > 0) {
                const NextScheduleIds = nextSchedule.data.map((val: any) => val.Course.ID)
                let newCourseData = courses.data.filter((value: any) => {
                    return !NextScheduleIds.includes(value.ID)
                })
                if (newCourseData.length === 0) {
                    handleCloseModalNewSchedule()
                    setGlobalSnackbar("SHOW", {
                        message: "Tidak ada mata kuliah yang dapat di ambil.",
                        severity: "warning"
                    })
                    setIsReady(false)
                } else {
                    setCourse({
                        ...courses,
                        data: newCourseData
                    })
                    setIsReady(true)
                }
            }
        }
        // eslint-disable-next-line
    }, [nextSchedule.data.length, courses.data.length, isOpen])

    return {
        courses: courses,
        isReady
    }
}
