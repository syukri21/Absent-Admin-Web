import { createProvider } from "reactn"
import { defaultState } from "../reactn/setGlobal"
import { DefaultState, Type } from "../reactn/reactn"
import Api from "../reactn/api/api"
import { setGlobalSnackbar } from "./GlobalSnackbar"
import { GradesCreateParams } from "../@types/GradesByScheduleId"

const reducers = [{ name: "GradesCreate", method: "handle" }]

const INITIAL_STATE: DefaultState = defaultState

const GradesCreate = createProvider(INITIAL_STATE)

reducers.map((val) => {
    return GradesCreate.addReducer(val.method + val.name, (global: any, _, type: Type, payload) => {
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
/*                              NOTE HANDLE GradesCreate                             */
/* -------------------------------------------------------------------------- */

export async function handleGradesCreate(params: GradesCreateParams) {
    const dispatch = GradesCreate.getDispatch()
    try {
        dispatch.handleGradesCreate("LOADING")
        const result = await Api.fetch({
            method: "POST",
            url: `/grades/schedule/${params.scheduleId}/student/${params.studentId}`,
            data: params.data,
        })
        dispatch.handleGradesCreate("SUCCESS", result.data)
        setGlobalSnackbar("SHOW", {
            message: "Add Course success.",
            severity: "success",
        })
        return result
    } catch (err) {
        dispatch.handleGradesCreate("ERROR", err)
        setGlobalSnackbar("SHOW", {
            message: "Something went wrong.",
            severity: "error",
        })
        throw err
    }
}

/* -------------------------------------------------------------------------- */

export default GradesCreate
