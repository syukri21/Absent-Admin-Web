import * as React from "react"

export interface MinimalProps {}

const Minimal: React.SFC<MinimalProps> = props => {
    return <>{props.children}</>
}

export default Minimal
