import React from "reactn"

import "./reducers"

export interface ReactnProviderProps {}

const ReactnProvider: React.SFC<ReactnProviderProps> = props => {
    return <>{props.children}</>
}

export default ReactnProvider
