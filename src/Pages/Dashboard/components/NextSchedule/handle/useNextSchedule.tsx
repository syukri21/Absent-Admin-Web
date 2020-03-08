import { useGlobal, useEffect } from "reactn"
import ScheduleService from "../../../../../reactn/service/ScheduleService"
import scheduleFromNow from "./../../../../../util/scheduleFromNow"

interface UseNextSchedule {
    data: any[]
    error: any
    loading: boolean
}

export default function useNextSchedule(): UseNextSchedule {
    const [nextSchedule] = useGlobal("NextSchedule")
    const a = nextSchedule.data.length > 0 && scheduleFromNow(nextSchedule.data[1])
    console.log("defaultfunctionuseNextSchedule -> a", a)

    useEffect(() => {
        ScheduleService.handleGetNextSchedule()
    }, [])

    return { data: nextSchedule.data, error: nextSchedule.error, loading: nextSchedule.loading }
}
