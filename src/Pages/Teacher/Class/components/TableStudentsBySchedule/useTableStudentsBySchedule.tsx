import ActiveSchedule, { setActiveSchedule } from "../../../../../provider/ActiveSchedule"
import NextSchedule, { getNextSchedule } from "../../../../../provider/NextSchedule"
import { useEffect, useState } from "reactn"
import StudentByScheduleId, { getStudentByScheduleId } from "../../../../../provider/StudentByScheduleId"

export default function useTableStudentsBySchedule() {
    const [activeSchdule] = ActiveSchedule.useGlobal()
    const [schedule] = NextSchedule.useGlobal()
    const [studentByScheduleId] = StudentByScheduleId.useGlobal()
    const [page, setPage] = useState(0)

    useEffect(() => {
        if (schedule.data.length > 0 && !activeSchdule.data.id) {
            setActiveSchedule(schedule.data[0])
        }
    }, [schedule.data, activeSchdule.data])

    useEffect(() => {
        if (activeSchdule.data.id) {
            getStudentByScheduleId({
                scheduleId: activeSchdule.data.id,
                offset: page * 8,
                limit: 8,
                nom: activeSchdule.data.numberOfMeeting,
            })
        }
    }, [activeSchdule.data, page])

    useEffect(() => {
        getNextSchedule()
    }, [])

    function handleChangePagination(event: any, value: any) {
        setPage(value - 1)
    }

    return { studentByScheduleId, activeSchdule, handleChangePagination, offset: page * 8 }
}
