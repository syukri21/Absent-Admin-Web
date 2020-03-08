import { useGlobal, useEffect } from "reactn"
import { DefaultState } from "../../../../../reactn/reactn"
import ScheduleService from "../../../../../reactn/service/ScheduleService"

interface UseNextSchedule {
    data: any[]
    error: any
    loading: boolean
}

export default function useNextSchedule(): UseNextSchedule {
    const [nextSchedule] = useGlobal("NextSchedule")

    useEffect(() => {
        ScheduleService.handleGetNextSchedule()
    }, [])

    return { data: nextSchedule.data, error: nextSchedule.error, loading: nextSchedule.loading }
}
