import Courses, { getCourses } from "../../../../../provider/Courses"
import { useEffect } from "react"
import { handleCourseCreate, CourseCreateParams } from "../../../../../provider/CourseCreate"
import { CourseDeleteParams, handleCourseDelete } from "../../../../../provider/CourseDelete"

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

    function deleteCourse(val: CourseDeleteParams): Promise<any> {
        return handleCourseDelete({ ID: val.ID }).then(getCourses)
    }

    return {
        courses,
        addCourse,
        deleteCourse
    }
}
