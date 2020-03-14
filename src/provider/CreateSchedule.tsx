import { createProvider } from "reactn"
import { DefaultState } from "../reactn/reactn"
import Api from "../reactn/api/api"
import dayjs from "dayjs"

const reducers = [{ name: "CreateSchedule", method: "handle" }]

const INITIAL_STATE: DefaultState = {
    error: null,
    loading: false,
    data: {}
}

const CreateSchedule = createProvider(INITIAL_STATE)

reducers.map(val => {
    return CreateSchedule.addReducer(val.method + val.name, (global: any, _, type, payload) => {
        switch (type) {
            case "LOADING":
                global.loading = true
                break
            case "ERROR":
                global.loading = false
                global.error = payload
                break
            case "SUCCESS":
                global.loading = false
                global.error = null
                global.data = payload
                break
        }
        return global
    })
})

/* -------------------------------------------------------------------------- */
/*                              NOTE HANDLE CreateSchedule                             */
/* -------------------------------------------------------------------------- */

export interface CreateScheduleParams {
    day: number
    courseId: number
    week: string
    time: dayjs.Dayjs
}

export async function handleCreateSchedule(params: CreateScheduleParams) {
    const dispatch = CreateSchedule.getDispatch()
    try {
        dispatch.handleCreateSchedule("LOADING")
        const result = await Api.fetch({
            method: "POST",
            url: "/schedules",
            data: {
                ...params,
                time: params.time.get("minute")
            }
        })
        console.log("handleCreateSchedule -> result", result)
        dispatch.handleCreateSchedule("SUCCESS", result.data)
    } catch (err) {
        dispatch.handleCreateSchedule("ERROR", err)
    }
}

/* -------------------------------------------------------------------------- */

export default CreateSchedule
