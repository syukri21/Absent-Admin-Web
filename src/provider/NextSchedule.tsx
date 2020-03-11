import { createProvider } from "reactn"
import { defaultState } from "../reactn/setGlobal"
import { DefaultState } from "../reactn/reactn"
import Api from "../reactn/api/api"

const reducers = [{ name: "NextSchedule", method: "get" }]

const INITIAL_STATE: DefaultState = defaultState

const NextSchedule = createProvider(INITIAL_STATE)

reducers.map(val => {
    return NextSchedule.addReducer(val.method + val.name, (global: any, _, type, payload) => {
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

export async function handleGetNextSchedule() {
    const dispatch = NextSchedule.getDispatch()
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

export default NextSchedule
