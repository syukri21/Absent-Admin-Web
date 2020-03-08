import dayjs from "dayjs"
import { formatDistance } from "date-fns"

type WEEK = "BOTH" | "ODD" | "EVEN"
type DAY = 0 | 1 | 2 | 3 | 4 | 5 | 6

interface ScheduleFromNowParams {
    day: DAY
    week: WEEK
    time: number
}

/* -------------------------------------------------------------------------- */
/*                               SET INITIAL DAY                              */
/* -------------------------------------------------------------------------- */

const initialDay = dayjs("2020-03-02").toDate()
const currentWeek = Math.ceil(dayjs("2020-03-10").diff(initialDay, "day") / 7)
const statusWeek: WEEK = currentWeek % 2 === 0 ? "ODD" : "EVEN"

export function getDaySchedule(params: ScheduleFromNowParams): number {
    let date = dayjs()
    if (params.week !== statusWeek || params.week === "BOTH") {
        date = dayjs().add(7, "day")
    }
    date = date.set("day", params.day).set("minute", params.time)
    return date.toDate().getTime()
}

export default function scheduleFromNow(params: ScheduleFromNowParams) {
    const date = getDaySchedule(params)
    const message = formatDistance(new Date(date), new Date(), {
        addSuffix: true
    })

    return message + " left"
}
