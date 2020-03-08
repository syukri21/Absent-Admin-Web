import { useGlobal, useEffect } from "reactn"
import ScheduleService from "../../../../../reactn/service/ScheduleService"
import { getDaySchedule } from "../../../../../util/scheduleFromNow"

interface UseNextSchedule {
    data: any[]
    error: any
    loading: boolean
}

export default function useNextSchedule(): UseNextSchedule {
    const [nextSchedule] = useGlobal("NextSchedule")

    useEffect(() => {
        ScheduleService.handleGetNextSchedule()
        if (nextSchedule.data.length > 0) {
            nextSchedule.data = nextSchedule.data.sort((a: any, b: any) => getDaySchedule(a) - getDaySchedule(b))
        }
    }, [nextSchedule.data.length])

    return { data: nextSchedule.data, error: nextSchedule.error, loading: nextSchedule.loading }
}
