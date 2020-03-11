import { createProvider } from "reactn"
import { defaultState } from "../reactn/setGlobal"
import { DefaultState } from "../reactn/reactn"
import Api from "../reactn/api/api"

const reducers = [{ name: "AbsentByScheduleId", method: "get" }]

const INITIAL_STATE: DefaultState = defaultState

const AbsentByScheduleId = createProvider(INITIAL_STATE)

reducers.map(val => {
    return AbsentByScheduleId.addReducer(val.method + val.name, (global: any, _, type, payload) => {
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

export async function getAbsentByScheduleId(params: any) {
    const dispatch = AbsentByScheduleId.getDispatch()
    try {
        dispatch.getAbsentByScheduleId("LOADING")
        const result = await Api.fetch({
            method: "GET",
            url: `/schedules/${params.scheduleId}`
        })
        dispatch.getAbsentByScheduleId("SUCCESS", result.data)
        return result.data
    } catch (err) {
        dispatch.getAbsentByScheduleId("ERROR")
        throw err
    }
}

export default AbsentByScheduleId
