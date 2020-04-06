import { createProvider } from "reactn"
import { DefaultState } from "../reactn/reactn"
import Api from "../reactn/api/api"
import queryString from "query-string"
import { defaultState } from "../reactn/setGlobal"

const reducers = [{ name: "Absent", method: "get" }]

const INITIAL_STATE: DefaultState = defaultState

const Absent = createProvider(INITIAL_STATE)

reducers.map((val) => {
    return Absent.addReducer(val.method + val.name, (global: any, _, type, payload) => {
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

export async function getAbsent(params: any) {
    const dispatch = Absent.getDispatch()
    try {
        dispatch.getAbsent("LOADING")

        const url = queryString.stringifyUrl({ url: `/absents`, query: params })
        const result = await Api.fetch({
            method: "GET",
            url,
        })
        dispatch.getAbsent("SUCCESS", result.data)
        return result.data
    } catch (err) {
        dispatch.getAbsent("ERROR")
        throw err
    }
}

export async function onCreateAbsent(newData: any) {
    const global = Absent.getGlobal()
    Absent.setGlobal({
        ...global,
        data: {
            ...global.data,
            Absents: [...global.data.Absents, newData],
        },
    })
}

export default Absent
