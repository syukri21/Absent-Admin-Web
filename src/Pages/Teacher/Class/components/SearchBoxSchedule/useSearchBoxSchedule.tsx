import NextSchedule, { getNextSchedule } from "../../../../../provider/NextSchedule"
import { useEffect, useMemo } from "react"
import ActiveSchedule, { setActiveSchedule } from "../../../../../provider/ActiveSchedule"
import { INITIAL_ACTIVE_SCHEDULE } from "../../../../../util/initialValue"

export default function useSearchBoxSchedule() {
    const [nextSchedule] = NextSchedule.useGlobal()
    const [ASchedule] = ActiveSchedule.useGlobal()

    useEffect(() => {
        getNextSchedule()
    }, [])

    const schedules = useMemo(() => nextSchedule.data, [nextSchedule.data])
    const activeSchedule = useMemo(() => (ASchedule.data.id ? ASchedule.data : INITIAL_ACTIVE_SCHEDULE), [ASchedule.data])

    function handleChangeActiveSchedule(event: any, data: any) {
        if (data) setActiveSchedule(data)
    }

    return { schedules, activeSchedule, handleChangeActiveSchedule }
}
