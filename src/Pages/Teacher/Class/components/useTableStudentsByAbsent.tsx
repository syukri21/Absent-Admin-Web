import ActiveSchedule, { setActiveSchedule } from "../../../../provider/ActiveSchedule"
import NextSchedule, { getNextSchedule } from "../../../../provider/NextSchedule"
import { useEffect } from "reactn"
import Absent, { getAbsent } from "../../../../provider/Absent"

export default function useTableStudentsByAbsent() {
    const [activeSchdule] = ActiveSchedule.useGlobal()
    const [schedule] = NextSchedule.useGlobal()
    const [absent] = Absent.useGlobal()

    useEffect(() => {
        if (schedule.data.length > 0 && !activeSchdule.data.id) {
            setActiveSchedule(schedule.data[0])
        }
    }, [schedule.data, activeSchdule.data])

    useEffect(() => {
        if (activeSchdule.data.id) {
            getAbsent({ scheduleId: activeSchdule.data.id, offset: 0, limit: 10 })
        }
    }, [activeSchdule.data])

    useEffect(() => {
        getNextSchedule()
    }, [])

    return { absent, activeSchdule }
}
