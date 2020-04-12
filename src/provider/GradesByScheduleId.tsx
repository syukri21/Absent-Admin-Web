import { createProvider } from "reactn"
import queryString from "query-string"

import Api from "../reactn/api/api"
import DefaultState from "../@types/DefaultState"
import { GradesByScheduleId as Grades, GradesByScheduleIdParams } from "./../@types/GradesByScheduleId.d"

const INITIAL_STATE: DefaultState<Grades> = {
    loading: false,
    error: null,
    data: {
        students: [],
        count: 0,
    },
}

const GradesByScheduleId = createProvider(INITIAL_STATE)

GradesByScheduleId.addReducer("getGradesByScheduleId", (global: any, _, type, payload) => {
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

export async function getGradesByScheduleId(params: GradesByScheduleIdParams) {
    const dispatch = GradesByScheduleId.getDispatch()
    try {
        dispatch.getGradesByScheduleId("LOADING")
        const query: any = params.data
        const url = queryString.stringifyUrl({ url: `/grades/schedule/${params.scheduleId}`, query })
        const result = await Api.fetch({
            method: "GET",
            url,
        })
        dispatch.getGradesByScheduleId("SUCCESS", result.data)
        return result.data
    } catch (err) {
        dispatch.getGradesByScheduleId("ERROR")
        throw err
    }
}

export async function onCreateGradesByScheduleId(newData: Grades) {
    const dispatch = GradesByScheduleId.getDispatch()
    dispatch.getGradesByScheduleId("ON_CREATE", newData)
}

export default GradesByScheduleId
