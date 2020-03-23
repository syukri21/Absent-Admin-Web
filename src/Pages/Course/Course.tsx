import * as React from "react"
import Grid from "@material-ui/core/Grid"

import TableList from "./components/TableCourses/TableCourses"
import useStyles from "./styles"

export interface CourseProps {}

const Course: React.SFC<CourseProps> = props => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item lg={12} sm={12} xl={12} xs={12}>
                    <TableList></TableList>
                </Grid>
            </Grid>
        </div>
    )
}

export default Course
