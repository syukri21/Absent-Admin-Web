import { createProvider } from "reactn"
import { defaultState } from "../reactn/setGlobal"
import { DefaultState, Type } from "../reactn/reactn"
import Api from "../reactn/api/api"
import { setGlobalSnackbar } from "./GlobalSnackbar"

const reducers = [{ name: "CourseCreate", method: "handle" }]

const INITIAL_STATE: DefaultState = defaultState

const CourseCreate = createProvider(INITIAL_STATE)

reducers.map(val => {
    return CourseCreate.addReducer(val.method + val.name, (global: any, _, type: Type, payload) => {
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
/*                              NOTE HANDLE CourseCreate                             */
/* -------------------------------------------------------------------------- */

export interface CourseCreateParams {
    name: string
    semester: number
    totalSks: number
}

export async function handleCourseCreate(params: CourseCreateParams) {
    const dispatch = CourseCreate.getDispatch()
    try {
        dispatch.handleCourseCreate("LOADING")
        const result = await Api.fetch({
            method: "POST",
            url: "/courses",
            data: params
        })
        dispatch.handleCourseCreate("SUCCESS", result.data)
        setGlobalSnackbar("SHOW", {
            message: "Add Course success.",
            severity: "success"
        })
        return result
    } catch (err) {
        dispatch.handleCourseCreate("ERROR", err)
        setGlobalSnackbar("SHOW", {
            message: "Something went wrong.",
            severity: "error"
        })
        throw err
    }
}

/* -------------------------------------------------------------------------- */

export default CourseCreate
