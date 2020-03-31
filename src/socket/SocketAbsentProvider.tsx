import React, { useEffect } from "react"
import SocketAbsent from "./SocketAbsent"

export interface SocketAbsentProviderProps {
    children: React.ReactNode
}

const SocketAbsentProvider: React.SFC<SocketAbsentProviderProps> = props => {
    useEffect(() => {
        SocketAbsent.listen()
        return function cleanup() {
            SocketAbsent.off()
        }
    }, [])

    return <>{props.children}</>
}

export default SocketAbsentProvider
