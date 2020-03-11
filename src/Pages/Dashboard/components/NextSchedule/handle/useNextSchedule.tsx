import { useEffect } from "reactn"
import ScheduleService from "../../../../../reactn/service/ScheduleService"
import { getDaySchedule } from "../../../../../util/scheduleFromNow"
import NextScheduleProvider from "../../../../../provider/NextScheduleProvider"
import ActiveScheduleProvider from "../../../../../provider/ActiveScheduleProvider"

interface UseNextSchedule {
    data: any[]
    error: any
    loading: boolean
    handleSelectSchedule: (data: any) => void
}

// Check for Sorted
let sorted = false

export default function useNextSchedule(): UseNextSchedule {
    const [nextSchedule] = NextScheduleProvider.useGlobal()

    if (nextSchedule.data.length > 0 && !sorted) {
        nextSchedule.data.sort((a: any, b: any) => getDaySchedule(a) - getDaySchedule(b))
        sorted = true
    }

    function handleSelectSchedule(data: any) {
        ScheduleService.handleSetActiveSchedule({
            payload: data,
            getDispatch: ActiveScheduleProvider.getDispatch
        })
    }

    /* ----------------------------- GET NEXT SCHEDULE ---------------------------- */

    useEffect(() => {
        ScheduleService.handleGetNextSchedule({
            getDispatch: NextScheduleProvider.getDispatch
        })
    }, [])

    /* --------------------------- SET ACTIVE SCHEDULE -------------------------- */

    useEffect(() => {
        if (sorted) {
            handleSelectSchedule(nextSchedule.data[0])
        }
        // eslint-disable-next-line
    }, [sorted])

    return { data: nextSchedule.data, error: nextSchedule.error, loading: nextSchedule.loading, handleSelectSchedule }
}
