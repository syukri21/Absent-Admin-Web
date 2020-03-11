import React from "reactn"

export interface ReactnProviderProps {}

const ReactnProvider: React.SFC<ReactnProviderProps> = props => {
    return <>{props.children}</>
}

export default ReactnProvider
