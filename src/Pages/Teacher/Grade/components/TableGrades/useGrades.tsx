import React, { useEffect, useState } from "react"

import GradesByScheduleId, { getGradesByScheduleId } from "../../../../../provider/GradesByScheduleId"
import ActiveSchedule, { setActiveSchedule } from "../../../../../provider/ActiveSchedule"
import NextSchedule, { getNextSchedule } from "../../../../../provider/NextSchedule"
import { handleGradesCreate } from "../../../../../provider/GradesCreate"

export default function useGrades() {
    const [gradesByScheduleId] = GradesByScheduleId.useGlobal()
    const [activeSchedule] = ActiveSchedule.useGlobal()
    const [schedule] = NextSchedule.useGlobal()
    const [page] = useState(0)

    const limit = 30
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
        if (!activeSchedule.data.id) {
            getNextSchedule()
        }
    }, [activeSchedule.data])

    function updateCourse(newData: any, oldData: any): Promise<any> {
        if (newData.grade.attendance) newData.grade.attendance = parseFloat(newData.grade.attendance)
        if (newData.grade.assignment) newData.grade.assignment = parseFloat(newData.grade.assignment)
        if (newData.grade.uts) newData.grade.uts = parseFloat(newData.grade.uts)
        if (newData.grade.uas) newData.grade.uas = parseFloat(newData.grade.uas)
        if (newData.grade.weightValue) newData.grade.weightValue = parseFloat(newData.grade.weightValue)

        if (JSON.stringify(newData.grade) !== JSON.stringify(oldData.grade)) {
            return handleGradesCreate({
                scheduleId: newData.scheduleId,
                studentId: newData.studentId,
                data: newData.grade,
            }).then(() => {
                getGradesByScheduleId({
                    scheduleId: activeSchedule.data.id,
                    data: { limit, offset },
                })
            })
        } else {
            return Promise.resolve()
        }
    }

    const data: any[] = React.useMemo(() => gradesByScheduleId.data.students || [], [gradesByScheduleId.data])
    const count = React.useMemo(() => gradesByScheduleId.data.count, [gradesByScheduleId.data])

    return { data, page, count, loading: gradesByScheduleId.loading, error: gradesByScheduleId.error, limit, updateCourse, activeSchedule }
}
