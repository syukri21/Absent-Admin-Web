import Courses, { getCourses } from "../../../../../../provider/Courses"
import { useEffect } from "react"
import { handleCourseCreate, CourseCreateParams } from "../../../../../../provider/CourseCreate"
import { CourseDeleteParams, handleCourseDelete } from "../../../../../../provider/CourseDelete"
import { handleCourseEdit } from "../../../../../../provider/CourseEdit"
import { Row } from "../TableGrades"

export default function useCourses() {
    const [courses] = Courses.useGlobal()

    useEffect(() => {
        getCourses()
    }, [])

    function addCourse(val: CourseCreateParams): Promise<any> {
        val = { ...val, semester: parseInt(val.semester.toString()), totalSks: parseInt(val.totalSks.toString()) }
        return handleCourseCreate(val).then(getCourses)
    }

    function deleteCourse(val: CourseDeleteParams): Promise<any> {
        return handleCourseDelete({ ID: val.ID }).then(getCourses)
    }

    function updateCourse(newData: Row, oldData: Row | undefined): Promise<any> {
        newData.totalSks = parseInt(newData.totalSks.toString())
        newData.semester = parseInt(newData.semester.toString())

        if (oldData) {
            if (newData.name !== oldData.name || newData.semester !== oldData.semester || newData.totalSks !== oldData.totalSks) {
                return handleCourseEdit({
                    ...newData,
                    id: newData.ID,
                }).then(getCourses)
            } else {
                return Promise.resolve()
            }
        } else {
            return Promise.resolve()
        }
    }

    return {
        courses,
        addCourse,
        deleteCourse,
        updateCourse,
    }
}
