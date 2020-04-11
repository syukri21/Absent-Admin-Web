import { createProvider } from "reactn"
import Api from "../reactn/api/api"
import queryString from "query-string"
import StudentSchedule from "../@types/StudentSchedules"
import DefaultState from "../@types/DefaultState"

const INITIAL_STATE: DefaultState<Array<StudentSchedule>> = {
    loading: false,
    error: null,
    data: [],
}

const StudentByScheduleId = createProvider(INITIAL_STATE)

StudentByScheduleId.addReducer("getStudentByScheduleId", (global: any, _, type, payload) => {
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
        case "ON_CREATE":
            global.loading = false
            global.error = null
            global.data = [payload, ...global.data]
            break
    }

    return global
})

export async function getStudentByScheduleId(params: any) {
    const dispatch = StudentByScheduleId.getDispatch()
    try {
        dispatch.getStudentByScheduleId("LOADING")

        const url = queryString.stringifyUrl({ url: `/StudentByScheduleIds`, query: params })
        const result = await Api.fetch({
            method: "GET",
            url,
        })
        dispatch.getStudentByScheduleId("SUCCESS", result.data)
        return result.data
    } catch (err) {
        dispatch.getStudentByScheduleId("ERROR")
        throw err
    }
}

export async function onCreateStudentByScheduleId(newData: StudentSchedule) {
    const dispatch = StudentByScheduleId.getDispatch()
    dispatch.getStudentByScheduleId("ON_CREATE", newData)
}

export default StudentByScheduleId
