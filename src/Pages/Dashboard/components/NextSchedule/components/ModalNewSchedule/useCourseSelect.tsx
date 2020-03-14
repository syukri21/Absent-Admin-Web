import Courses, { getCourses } from "../../../../../../provider/Courses"
import { useEffect } from "reactn"
import { DefaultState } from "../../../../../../reactn/reactn"

interface UseCoursesSelect {
    courses: DefaultState
}

export default function useCourseSelect(): UseCoursesSelect {
    const [courses] = Courses.useGlobal()

    useEffect(() => {
        getCourses()
    }, [])

    return {
        courses
    }
}
