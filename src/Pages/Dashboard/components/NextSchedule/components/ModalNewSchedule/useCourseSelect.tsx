import Courses, { getCourses } from "../../../../../../provider/Courses"
import { useEffect } from "reactn"
import { DefaultState } from "../../../../../../reactn/reactn"
import NextSchedule from "../../../../../../provider/NextSchedule"

interface UseCoursesSelect {
    courses: DefaultState
}

export default function useCourseSelect(isOpen: boolean): UseCoursesSelect {
    const [courses, setCourse] = Courses.useGlobal()
    const nextSchedule = NextSchedule.getGlobal()

    useEffect(() => {
        if (isOpen) getCourses()
        // eslint-disable-next-line
    }, [isOpen])

    useEffect(() => {
        if (isOpen) {
            if (nextSchedule.data.length > 0 && courses.data.length > 0) {
                const NextScheduleIds = nextSchedule.data.map((val: any) => val.Course.ID)
                let newCourseData = courses.data.filter((value: any) => {
                    return !NextScheduleIds.includes(value.ID)
                })
                setCourse({
                    ...courses,
                    data: newCourseData
                })
            }
        }
        // eslint-disable-next-line
    }, [nextSchedule.data.length, courses.data.length, isOpen])

    return {
        courses: courses
    }
}
