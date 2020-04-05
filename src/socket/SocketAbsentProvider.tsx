import React, { useEffect } from "react"
import SocketAbsent from "./SocketAbsent"
import ActiveSchedule from "../provider/ActiveSchedule"

export interface SocketAbsentProviderProps {
    children: React.ReactNode
}

const SocketAbsentProvider: React.SFC<SocketAbsentProviderProps> = (props) => {
    const [activeSchedule] = ActiveSchedule.useGlobal()
    useEffect(() => {
        if (activeSchedule.data.id) {
            SocketAbsent.listen(activeSchedule.data.id)
        }
        return function cleanup() {
            SocketAbsent.off()
        }
    }, [activeSchedule.data.id])

    return <>{props.children}</>
}

export default SocketAbsentProvider
