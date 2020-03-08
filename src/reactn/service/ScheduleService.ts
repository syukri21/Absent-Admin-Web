import { getDispatch } from "reactn"
import Api from "../api/api"

export default class ScheduleService {
    public static async handleGetNextSchedule() {
        const dispatch = getDispatch()
        try {
            dispatch.getNextSchedule("LOADING")
            const result = await Api.fetch({
                method: "GET",
                url: "/schedules"
            })
            dispatch.getNextSchedule("SUCCESS", result.data)
            return result.data
        } catch (err) {
            dispatch.getNextSchedule("ERROR")
            throw err
        }
    }

    public static async handleSetActiveSchedule(payload: any) {
        const dispatch = getDispatch()
        dispatch.setActiveSchedule("SUCCESS", payload)
    }
}
