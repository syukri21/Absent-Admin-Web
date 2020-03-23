import { createProvider } from "reactn"
import { defaultState } from "../reactn/setGlobal"
import { DefaultState, Type } from "../reactn/reactn"
import Api from "../reactn/api/api"
import { setGlobalSnackbar } from "./GlobalSnackbar"

const INITIAL_STATE: DefaultState = defaultState

const CourseEdit = createProvider(INITIAL_STATE)

CourseEdit.addReducer("handleCourseEdit", (global: any, _, type: Type, payload) => {
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

/* -------------------------------------------------------------------------- */
/*                              NOTE HANDLE CourseEdit                             */
/* -------------------------------------------------------------------------- */

export interface CourseEditParams {
    id: number
    name: string
    semester: number
    totalSks: number
}

export async function handleCourseEdit(params: CourseEditParams) {
    const dispatch = CourseEdit.getDispatch()
    try {
        dispatch.handleCourseEdit("LOADING")
        const result = await Api.fetch({
            method: "PUT",
            url: "/courses",
            data: params
        })
        dispatch.handleCourseEdit("SUCCESS", result.data)
        setGlobalSnackbar("SHOW", {
            message: "Edit course success.",
            severity: "success"
        })
        return result
    } catch (err) {
        dispatch.handleCourseEdit("ERROR", err)
        setGlobalSnackbar("SHOW", {
            message: "Something went wrong.",
            severity: "error"
        })
        throw err
    }
}

/* -------------------------------------------------------------------------- */

export default CourseEdit
