import Courses, { getCourses } from "../../../../../provider/Courses"
import { useEffect } from "react"

export default function useCourses() {
    const [courses] = Courses.useGlobal()

    useEffect(() => {
        getCourses()
        // eslint-disable-next-line
    }, [])

    return {
        courses
    }
}
