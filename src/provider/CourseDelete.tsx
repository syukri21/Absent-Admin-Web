import { createProvider } from "reactn"
import { defaultState } from "../reactn/setGlobal"
import { DefaultState, Type } from "../reactn/reactn"
import Api from "../reactn/api/api"
import { setGlobalSnackbar } from "./GlobalSnackbar"

const reducers = [{ name: "CourseDelete", method: "handle" }]

const INITIAL_STATE: DefaultState = defaultState

const CourseDelete = createProvider(INITIAL_STATE)

reducers.map(val => {
    return CourseDelete.addReducer(val.method + val.name, (global: any, _, type: Type, payload) => {
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
/*                              NOTE HANDLE CourseDelete                             */
/* -------------------------------------------------------------------------- */

export interface CourseDeleteParams {
    ID: number
}

export async function handleCourseDelete(params: CourseDeleteParams) {
    const dispatch = CourseDelete.getDispatch()
    try {
        dispatch.handleCourseDelete("LOADING")
        const result = await Api.fetch({
            method: "DELETE",
            url: "/courses/" + params.ID
        })
        dispatch.handleCourseDelete("SUCCESS", result.data)
        setGlobalSnackbar("SHOW", {
            message: "Add Course success.",
            severity: "success"
        })
        return result
    } catch (err) {
        dispatch.handleCourseDelete("ERROR", err)
        setGlobalSnackbar("SHOW", {
            message: "Something went wrong.",
            severity: "error"
        })
        throw err
    }
}

/* -------------------------------------------------------------------------- */

export default CourseDelete
