import AbsentByScheduleId, { getAbsentByScheduleId } from "../../../../../provider/AbsentByScheduleId"
import { useEffect } from "react"
import ActiveSchedule from "./../../../../../provider/ActiveSchedule"

export default function useNewAbsent() {
    const [absentByScheduleId] = AbsentByScheduleId.useGlobal()
    const [activeSchedule] = ActiveSchedule.useGlobal()

    useEffect(() => {
        if (typeof activeSchedule.data.id !== "undefined") {
            getAbsentByScheduleId({ scheduleId: activeSchedule.data.id })
        }
    }, [activeSchedule.data])

    return absentByScheduleId
}
