import React, { useEffect } from "reactn"

import UserService from "./service/UserService"
import "./reducers"

export interface ReactnProviderProps {
    isLogin: boolean
}

const ReactnProvider: React.SFC<ReactnProviderProps> = props => {
    const { isLogin } = props

    useEffect(() => {
        UserService.handleGetUser()
    }, [isLogin])

    return <>{props.children}</>
}

export default ReactnProvider
