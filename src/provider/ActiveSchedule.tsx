import { createProvider } from "reactn"
import { DefaultState } from "../reactn/reactn"

export const defaultStateObj = {
    loading: false,
    error: null,
    data: {}
}

const reducers = [{ name: "ActiveSchedule", method: "set" }]

const INITIAL_STATE: DefaultState = defaultStateObj

const ActiveSchedule = createProvider(INITIAL_STATE)

reducers.map(val => {
    return ActiveSchedule.addReducer(val.method + val.name, (global: any, _, type, payload) => {
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

export async function handleSetActiveSchedule(payload: any) {
    const dispatch = ActiveSchedule.getDispatch()
    dispatch.setActiveSchedule("SUCCESS", payload)
}

export default ActiveSchedule
