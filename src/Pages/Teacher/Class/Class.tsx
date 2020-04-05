import * as React from "react"
import useStyles from "./styles"
// import useClassStyles from "./styles"
import Grid from "@material-ui/core/Grid"
import TableStudentsByAbsent from "./components/TableStudentsByAbsent"

export interface ClassProps {}

const Class: React.SFC<ClassProps> = props => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item lg={12} sm={12} xl={12} xs={12}>
                    <TableStudentsByAbsent></TableStudentsByAbsent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Class
