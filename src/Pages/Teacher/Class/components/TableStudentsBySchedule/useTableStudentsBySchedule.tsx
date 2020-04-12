import ActiveSchedule, { setActiveSchedule } from "../../../../../provider/ActiveSchedule"
import NextSchedule, { getNextSchedule } from "../../../../../provider/NextSchedule"
import { useEffect } from "reactn"
import StudentByScheduleId, { getStudentByScheduleId } from "../../../../../provider/StudentByScheduleId"

export default function useTableStudentsBySchedule() {
    const [activeSchdule] = ActiveSchedule.useGlobal()
    const [schedule] = NextSchedule.useGlobal()
    const [studentByScheduleId] = StudentByScheduleId.useGlobal()

    useEffect(() => {
        if (schedule.data.length > 0 && !activeSchdule.data.id) {
            setActiveSchedule(schedule.data[0])
        }
    }, [schedule.data, activeSchdule.data])

    useEffect(() => {
        if (activeSchdule.data.id) {
            getStudentByScheduleId({
                scheduleId: activeSchdule.data.id,
                offset: 0,
                limit: 8,
                nom: activeSchdule.data.numberOfMeeting,
            })
        }
    }, [activeSchdule.data])

    useEffect(() => {
        getNextSchedule()
    }, [])

    return { studentByScheduleId, activeSchdule }
}
