import "reactn"
import { User } from "./service/user"

export interface DefaultState {
    loading: boolean
    error: string | null
    data: any
}

type severity = "success" | "error" | undefined

export interface GlobalSnackbarState {
    isOpen: boolean
    data: {
        message?: string
        severity: severity
    }
}

type Type = "LOADING" | "ERROR" | "SUCCESS"
type TypeGlobalSnackbar = "SHOW" | "HIDE" | undefined

declare module "reactn/default" {
    export interface Reducers {
        login: (global: State, dispatch: Dispatch, type: Type, payload?: any) => Pick<State, "Token">
        register: (global: State, dispatch: Dispatch, type: Type, payload?: any) => Pick<State, "Register">
        getUser: (global: State, dispatch: Dispatch, type: Type, payload?: any) => Pick<State, "User">
        showGlobalSnackbar: (global: State, dispatch: Dispatch, type: TypeGlobalSnackbar, payload?: any) => Pick<State, "GlobalSnackbar">
        getNextSchedule: (globale: State, dispatch: Dispatch, type: Type, payload?: any) => Pick<State, "NextSchedule">
        setActiveSchedule: (globale: State, dispatch: Dispatch, type: Type, payload?: any) => Pick<State, "ActiveSchedule">
    }
    export interface State {
        Token: string
        Login: DefaultState
        User: DefaultState
        GlobalSnackbar: GlobalSnackbarState
        Register: DefaultState
        NextSchedule: DefaultState
        ActiveSchedule: DefaultState
    }
}
