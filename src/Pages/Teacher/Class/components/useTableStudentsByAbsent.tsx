import ActiveSchedule, { setActiveSchedule } from "../../../../provider/ActiveSchedule"
import NextSchedule, { getNextSchedule } from "../../../../provider/NextSchedule"
import AbsentByScheduleId, { getAbsentByScheduleId } from "../../../../provider/AbsentByScheduleId"
import { useEffect } from "reactn"

export default function useTableStudentsByAbsent() {
    const [activeSchdule] = ActiveSchedule.useGlobal()
    const [schedule] = NextSchedule.useGlobal()
    const [absentByScheduleId] = AbsentByScheduleId.useGlobal()

    useEffect(() => {
        if (schedule.data.length === 0) {
            getNextSchedule().then((result) => {
                setActiveSchedule({ ...result[0] })
            })
        }
    }, [schedule.data])

    useEffect(() => {
        if (activeSchdule.data.id) {
            getAbsentByScheduleId({
                numberOfMeeting: activeSchdule.data.numberOfMeeting || 2,
                scheduleId: activeSchdule.data.id || 1,
            })
        }
    }, [activeSchdule.data])

    return { absentByScheduleId, activeSchdule }
}
