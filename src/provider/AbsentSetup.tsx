import { createProvider } from "reactn"
import { DefaultState } from "../reactn/reactn"
import Api from "../reactn/api/api"

export const defaultStateObj = {
    loading: false,
    error: null,
    data: {}
}

const reducers = [{ name: "AbsentSetup", method: "get" }]

const INITIAL_STATE: DefaultState = defaultStateObj

const AbsentSetup = createProvider(INITIAL_STATE)

reducers.map(val => {
    return AbsentSetup.addReducer(val.method + val.name, (global: any, _, type, payload) => {
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
/*                                  NOTE GET                                  */
/* -------------------------------------------------------------------------- */

interface GetAbsentSetupParams {
    data: {
        numberOfMeetings: number
        scheduleId: number
        courseId: number
    }
}

export async function getAbsentSetup(params: GetAbsentSetupParams) {
    const dispatch = AbsentSetup.getDispatch()
    try {
        dispatch.getAbsentSetup("LOADING")
        const result = await Api.fetch({
            method: "POST",
            url: "/absents/setup",
            data: params.data
        })
        dispatch.getAbsentSetup("SUCCESS", result.data)
    } catch (err) {
        dispatch.getAbsentSetup("ERROR", "No Token")
    }
}

/* -------------------------------------------------------------------------- */

export default AbsentSetup
