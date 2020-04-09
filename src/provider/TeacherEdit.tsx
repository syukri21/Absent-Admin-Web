import { createProvider } from "reactn"
import { defaultState } from "../reactn/setGlobal"
import { DefaultState, Type } from "../reactn/reactn"
import Api from "../reactn/api/api"
import { setGlobalSnackbar } from "./GlobalSnackbar"

const INITIAL_STATE: DefaultState = defaultState

const TeacherEdit = createProvider(INITIAL_STATE)

TeacherEdit.addReducer("handleTeacherEdit", (global: any, _, type: Type, payload) => {
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
/*                              NOTE HANDLE TeacherEdit                             */
/* -------------------------------------------------------------------------- */

export async function handleTeacherEdit(params: any) {
    const dispatch = TeacherEdit.getDispatch()
    try {
        dispatch.handleTeacherEdit("LOADING")
        const result = await Api.fetch({
            method: "PUT",
            url: "/teachers",
            data: params,
        })
        dispatch.handleTeacherEdit("SUCCESS", result.data)
        setGlobalSnackbar("SHOW", {
            message: "Edit Teacher success.",
            severity: "success",
        })
        return result
    } catch (err) {
        dispatch.handleTeacherEdit("ERROR", err)
        setGlobalSnackbar("SHOW", {
            message: "Something went wrong.",
            severity: "error",
        })
        throw err
    }
}

/* -------------------------------------------------------------------------- */

export default TeacherEdit
