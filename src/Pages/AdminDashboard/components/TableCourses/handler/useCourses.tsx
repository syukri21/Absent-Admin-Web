import Courses, { getCourses } from "../../../../../provider/Courses"
import { useEffect } from "react"
import { handleCourseCreate, CourseCreateParams } from "../../../../../provider/CourseCreate"

export default function useCourses() {
    const [courses] = Courses.useGlobal()

    useEffect(() => {
        getCourses()
        // eslint-disable-next-line
    }, [])

    function addCourse(val: CourseCreateParams): Promise<any> {
        val = { ...val, semester: parseInt(val.semester.toString()), totalSks: parseInt(val.totalSks.toString()) }
        return handleCourseCreate(val).then(getCourses)
    }
    return {
        courses,
        addCourse
    }
}
