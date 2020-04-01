import React, { useEffect } from "react"
import SocketAbsent from "./SocketAbsent"
import User from "../provider/User"

export interface SocketAbsentProviderProps {
    children: React.ReactNode
}

const SocketAbsentProvider: React.SFC<SocketAbsentProviderProps> = props => {
    const [user] = User.useGlobal()
    useEffect(() => {
        if (user.data.userId) {
            SocketAbsent.listen(user.data.userId)
            return function cleanup() {
                SocketAbsent.off(user.data.userId)
            }
        }
    }, [user.data.userId])

    return <>{props.children}</>
}

export default SocketAbsentProvider
