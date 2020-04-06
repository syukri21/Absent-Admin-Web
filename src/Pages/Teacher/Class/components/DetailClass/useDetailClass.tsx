import ActiveSchedule from "../../../../../provider/ActiveSchedule"
import * as React from "react"
import { INITIAL_ACTIVE_SCHEDULE } from "../../../../../util/initialValue"

export default function useDetailClass() {
    const [activeSchedule] = ActiveSchedule.useGlobal()

    const schedule = React.useMemo(() => (activeSchedule.data.id ? activeSchedule.data : INITIAL_ACTIVE_SCHEDULE), [activeSchedule.data])

    return { schedule }
}
