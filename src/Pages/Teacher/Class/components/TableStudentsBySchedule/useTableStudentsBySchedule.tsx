import ActiveSchedule, { setActiveSchedule } from "../../../../../provider/ActiveSchedule"
import NextSchedule, { getNextSchedule } from "../../../../../provider/NextSchedule"
import { useEffect, useState } from "reactn"
import StudentByScheduleId, { getStudentByScheduleId } from "../../../../../provider/StudentByScheduleId"

export default function useTableStudentsBySchedule() {
    const [activeSchdule] = ActiveSchedule.useGlobal()
    const [schedule] = NextSchedule.useGlobal()
    const [studentByScheduleId] = StudentByScheduleId.useGlobal()
    const [page, setPage] = useState(0)
    const limit = 10
    const offset = limit * page

    useEffect(() => {
        if (schedule.data.length > 0 && !activeSchdule.data.id) {
            setActiveSchedule(schedule.data[0])
        }
    }, [schedule.data, activeSchdule.data])

    useEffect(() => {
        if (activeSchdule.data.id) {
            getStudentByScheduleId({
                scheduleId: activeSchdule.data.id,
                offset,
                limit,
                nom: activeSchdule.data.numberOfMeeting,
            })
        }
    }, [activeSchdule.data, page, offset, limit])

    useEffect(() => {
        getNextSchedule()
    }, [])

    function handleChangePagination(event: any, value: any) {
        setPage(value - 1)
    }

    return { studentByScheduleId, activeSchdule, handleChangePagination, offset }
}
