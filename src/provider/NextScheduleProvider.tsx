import { createProvider } from "reactn"
import { defaultState } from "./../reactn/setGlobal"

const reducers = [{ name: "NextSchedule", method: "get", type: defaultState }]

const INITIAL_STATE: any = {}

reducers.map(val => {
    return (INITIAL_STATE[val.name] = val.type)
})

const NextScheduleProvider = createProvider(INITIAL_STATE)

reducers.map(val => {
    return NextScheduleProvider.addReducer(val.method + val.name, (global: any, _, type, payload) => {
        switch (type) {
            case "LOADING":
                global[val.name].loading = true
                break
            case "ERROR":
                global[val.name].loading = false
                global[val.name].error = payload
                break
            case "SUCCESS":
                global[val.name].loading = false
                global[val.name].error = null
                global[val.name].data = payload
                break
        }
        return global
    })
})

export default NextScheduleProvider
