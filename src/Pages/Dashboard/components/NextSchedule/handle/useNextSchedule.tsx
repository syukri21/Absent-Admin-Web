import { useEffect } from "reactn"
import { getDaySchedule } from "../../../../../util/scheduleFromNow"
import NextSchedule, { getNextSchedule } from "../../../../../provider/NextSchedule"
import { setActiveSchedule } from "../../../../../provider/ActiveSchedule"

interface UseNextSchedule {
    data: any[]
    error: any
    loading: boolean
    handleSelectSchedule: (data: any) => void
}

// Check for Sorted
let sorted = false

export default function useNextSchedule(): UseNextSchedule {
    const [nextSchedule] = NextSchedule.useGlobal()

    if (nextSchedule.data.length > 0 && !sorted) {
        nextSchedule.data.sort((a: any, b: any) => getDaySchedule(a) - getDaySchedule(b))
        sorted = true
    }

    function handleSelectSchedule(data: any) {
        setActiveSchedule(data)
    }

    /* ----------------------------- GET NEXT SCHEDULE ---------------------------- */

    useEffect(() => {
        getNextSchedule()
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
