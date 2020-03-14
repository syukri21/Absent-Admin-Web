import Courses, { getCourses } from "../../../../../../provider/Courses"
import { useEffect } from "reactn"
import { DefaultState } from "../../../../../../reactn/reactn"
import NextSchedule from "../../../../../../provider/NextSchedule"

interface UseCoursesSelect {
    courses: DefaultState
}

export default function useCourseSelect(): UseCoursesSelect {
    const [courses, setCourse] = Courses.useGlobal()
    console.log("defaultfunctionuseCourseSelect -> courses", courses)
    const nextSchedule = NextSchedule.getGlobal()

    useEffect(() => {
        getCourses()
    }, [])

    useEffect(() => {
        if (nextSchedule.data.length > 0 && courses.data.length > 0) {
            const NextScheduleIds = nextSchedule.data.map((val: any) => val.Course.ID)
            console.log("defaultfunctionuseCourseSelect -> NextScheduleIds", NextScheduleIds)
            let newCourseData = courses.data.filter((value: any) => {
                return !NextScheduleIds.includes(value.ID)
            })
            setCourse({
                ...courses,
                data: newCourseData
            })
        }
    }, [nextSchedule.data.length, courses.data.length])

    return {
        courses: courses
    }
}
