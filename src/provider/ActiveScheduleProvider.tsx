import React, { createProvider } from "reactn"

export const defaultStateObj = {
    loading: false,
    error: null,
    data: {}
}

const reducers = [{ name: "ActiveSchedule", type: defaultStateObj, method: "set" }]

const INITIAL_STATE: any = {}

reducers.map(val => {
    return (INITIAL_STATE[val.name] = val.type)
})

const ActiveScheduleProvider = createProvider(INITIAL_STATE)

reducers.map(val => {
    return ActiveScheduleProvider.addReducer(val.method + val.name, (global: any, _, type, payload) => {
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

export default ActiveScheduleProvider
