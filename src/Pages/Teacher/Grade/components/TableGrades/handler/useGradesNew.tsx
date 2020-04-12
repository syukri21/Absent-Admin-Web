export default function useCourses() {
    // function addCourse(val: CourseCreateParams): Promise<any> {
    //     val = { ...val, semester: parseInt(val.semester.toString()), totalSks: parseInt(val.totalSks.toString()) }
    //     return handleCourseCreate(val).then(getCourses)
    // }

    // function deleteCourse(val: CourseDeleteParams): Promise<any> {
    //     return handleCourseDelete({ ID: val.ID }).then(getCourses)
    // }

    // function updateCourse(newData: Row, oldData: Row | undefined): Promise<any> {
    //     newData.totalSks = parseInt(newData.totalSks.toString())
    //     newData.semester = parseInt(newData.semester.toString())

    //     if (oldData) {
    //         if (newData.name !== oldData.name || newData.semester !== oldData.semester || newData.totalSks !== oldData.totalSks) {
    //             return handleCourseEdit({
    //                 ...newData,
    //                 id: newData.ID,
    //             }).then(getCourses)
    //         } else {
    //             return Promise.resolve()
    //         }
    //     } else {
    //         return Promise.resolve()
    //     }
    // }

    return {
        // addCourse,
        // deleteCourse,
        // updateCourse,
    }
}
