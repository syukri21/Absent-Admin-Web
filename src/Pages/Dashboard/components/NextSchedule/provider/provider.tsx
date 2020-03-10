import React, { createProvider } from "reactn"
import { defaultState } from "../../../../../reactn/setGlobal"

const reducers = ["NextSchedule"]

const INITIAL_STATE: any = {}

reducers.map(val => {
    return (INITIAL_STATE[val] = defaultState)
})

const NextScheduleProvider = createProvider(INITIAL_STATE)

reducers.map(val => {
    return NextScheduleProvider.addReducer("get" + val, (global: any, _, type, payload) => {
        switch (type) {
            case "LOADING":
                global[val].loading = true
                break
            case "ERROR":
                global[val].loading = false
                global[val].error = payload
                break
            case "SUCCESS":
                global[val].loading = false
                global[val].error = null
                global[val].data = payload
                break
        }
        return global
    })
})

export { NextScheduleProvider }
export interface ProviderWrapperProps {}

const NextScheduleProviderWrapper: React.SFC<ProviderWrapperProps> = props => {
    return <NextScheduleProvider>{props.children}</NextScheduleProvider>
}

export default NextScheduleProviderWrapper
