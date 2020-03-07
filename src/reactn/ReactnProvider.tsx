import React, { useEffect } from "reactn"
import "./reducers"
import UserService from "./service/UserService"

export interface ReactnProviderProps {}

const ReactnProvider: React.SFC<ReactnProviderProps> = props => {
    useEffect(() => {
        UserService.handleGetUser()
    }, [])

    return <>{props.children}</>
}

export default ReactnProvider
