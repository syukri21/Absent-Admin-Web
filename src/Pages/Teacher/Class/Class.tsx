import * as React from "react"
import useClassStyles from "./styles"

export interface ClassProps {}

const Class: React.SFC<ClassProps> = props => {
    const classes = useClassStyles()
    return <div>Class</div>
}

export default Class
