import React, { useEffect } from "reactn"

import UserService from "./service/UserService"
import "./reducers"

export interface ReactnProviderProps {}

const ReactnProvider: React.SFC<ReactnProviderProps> = props => {
    return <>{props.children}</>
}

export default ReactnProvider
