import React, { useEffect, useState } from "react"

import GradesByScheduleId, { getGradesByScheduleId } from "../../../../../../provider/GradesByScheduleId"
import ActiveSchedule, { setActiveSchedule } from "../../../../../../provider/ActiveSchedule"
import NextSchedule, { getNextSchedule } from "../../../../../../provider/NextSchedule"

export default function useGrades() {
    const [gradesByScheduleId] = GradesByScheduleId.useGlobal()
    const [activeSchedule] = ActiveSchedule.useGlobal()
    const [schedule] = NextSchedule.useGlobal()
    const [page, setPage] = useState(0)

    const limit = 10
    const offset = limit * page

    useEffect(() => {
        if (activeSchedule.data.id) {
            getGradesByScheduleId({
                scheduleId: activeSchedule.data.id,
                data: { limit, offset },
            })
        }
    }, [activeSchedule.data, limit, offset])

    useEffect(() => {
        if (schedule.data.length > 0 && !activeSchedule.data.id) {
            setActiveSchedule(schedule.data[0])
        }
    }, [schedule.data, activeSchedule.data])

    useEffect(() => {
        getNextSchedule()
    }, [])

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

    const data: any[] = React.useMemo(() => gradesByScheduleId.data.students || [], [gradesByScheduleId.data])
    const count = React.useMemo(() => gradesByScheduleId.data.count, [gradesByScheduleId.data])

    return { data, page, count, loading: gradesByScheduleId.loading, error: gradesByScheduleId.error, limit }
}
