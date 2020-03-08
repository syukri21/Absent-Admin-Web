import { useGlobal, useEffect } from "reactn"
import ScheduleService from "../../../../../reactn/service/ScheduleService"
import { getDaySchedule } from "../../../../../util/scheduleFromNow"

interface UseNextSchedule {
    data: any[]
    error: any
    loading: boolean
    handleSelectSchedule: (data: any) => void
}

// Check for Sorted
let sorted = false

export default function useNextSchedule(): UseNextSchedule {
    const [nextSchedule] = useGlobal("NextSchedule")

    if (nextSchedule.data.length > 0 && !sorted) {
        nextSchedule.data = nextSchedule.data.sort((a: any, b: any) => getDaySchedule(a) - getDaySchedule(b))
        sorted = true
    }

    function handleSelectSchedule(data: any) {
        ScheduleService.handleSetActiveSchedule(data)
    }

    /* ----------------------------- GET NEXT SCHEDULE ---------------------------- */

    useEffect(() => {
        ScheduleService.handleGetNextSchedule()
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
