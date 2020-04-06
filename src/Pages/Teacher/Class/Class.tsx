import * as React from "react"
import useStyles from "./styles"
// import useClassStyles from "./styles"
import Grid from "@material-ui/core/Grid"
import TableStudentsByAbsent from "./components/TableStudentsByAbsent/TableStudentsByAbsent"
import DetailClass from "./components/DetailClass/DetailClass"

export interface ClassProps {}

const Class: React.SFC<ClassProps> = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item lg={3} xl={3} sm={12} xs={12}>
                    <DetailClass></DetailClass>
                </Grid>
                <Grid item lg={9} sm={12} xl={9} xs={12}>
                    <TableStudentsByAbsent></TableStudentsByAbsent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Class
