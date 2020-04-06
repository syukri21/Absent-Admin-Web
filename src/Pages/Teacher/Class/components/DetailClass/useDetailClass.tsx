import ActiveSchedule from "../../../../../provider/ActiveSchedule"
import * as React from "react"

const INITIAL_SCHEDULE = { Course: { name: "" }, numberOfMeeting: "", semester: "", time: null }

export default function useDetailClass() {
    const [activeSchedule] = ActiveSchedule.useGlobal()

    const schedule = React.useMemo(() => (activeSchedule.data.id ? activeSchedule.data : INITIAL_SCHEDULE), [activeSchedule])

    return { schedule }
}
