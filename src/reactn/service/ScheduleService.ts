import Api from "../api/api"

interface ParamsService {
    payload?: any
    getDispatch: any
}

export default class ScheduleService {
    public static async handleGetNextSchedule({ getDispatch }: ParamsService) {
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

    public static async handleSetActiveSchedule({ payload, getDispatch }: ParamsService) {
        const dispatch = getDispatch()
        dispatch.setActiveSchedule("SUCCESS", payload)
    }
}
