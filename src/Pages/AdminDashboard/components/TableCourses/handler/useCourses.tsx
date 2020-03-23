import Courses, { getCourses } from "../../../../../provider/Courses"
import { useEffect } from "react"
import { handleCourseCreate, CourseCreateParams } from "../../../../../provider/CourseCreate"
import { CourseDeleteParams, handleCourseDelete } from "../../../../../provider/CourseDelete"
import { handleCourseEdit } from "../../../../../provider/CourseEdit"
import { Row } from "../TableCourses"

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

    function updateCourse(newData: Row, oldData: Row | undefined): Promise<any> {
        console.log("useCourses -> oldData", oldData)
        console.log("useCourses -> newData", newData)
        return handleCourseEdit({
            ...newData,
            id: newData.ID
        }).then(getCourses)
    }

    return {
        courses,
        addCourse,
        deleteCourse,
        updateCourse
    }
}
