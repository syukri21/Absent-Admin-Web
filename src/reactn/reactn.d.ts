import "reactn"
import { User } from "./service/user"

export interface DefaultState {
    loading: boolean
    error: string | null
    data: any
}

type Type = "INIT" | "LOADING" | "ERROR" | "SUCCESS"

declare module "reactn/default" {
    export interface Reducers {
        login: (global: State, dispatch: Dispatch, type: Type, payload?: any) => Pick<State, "Token">
        getUser: (global: State, dispatch: Dispatch, type: Type, payload?: any) => Pick<State, "User">
    }
    export interface State {
        Token: string
        Login: DefaultState
        User: DefaultState
    }
}
