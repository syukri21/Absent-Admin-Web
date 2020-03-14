import { createProvider } from "reactn"
import { DefaultState } from "../reactn/reactn"
import Api from "../reactn/api/api"
import { defaultState } from "./../reactn/setGlobal"

const reducers = [{ name: "Courses", method: "get" }]

const INITIAL_STATE: DefaultState = defaultState

const Courses = createProvider(INITIAL_STATE)

reducers.map(val => {
    return Courses.addReducer(val.method + val.name, (global: any, _, type, payload) => {
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

export async function getCourses() {
    const dispatch = Courses.getDispatch()
    try {
        dispatch.getCourses("LOADING")
        const result = await Api.fetch({
            method: "GET",
            url: "/courses"
        })
        dispatch.getCourses("SUCCESS", result.data)
    } catch (err) {
        dispatch.getCourses("ERROR", err)
    }
}

/* -------------------------------------------------------------------------- */

export default Courses
