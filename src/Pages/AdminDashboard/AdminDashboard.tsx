import * as React from "react"
import Grid from "@material-ui/core/Grid"

import TableList from "./components/TableCourses/TableCourses"
import useStyles from "./styles"

export interface AdminDashboardProps {}

const AdminDashboard: React.SFC<AdminDashboardProps> = props => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item lg={6} sm={6} xl={3} xs={12}>
                    <TableList></TableList>
                </Grid>
                <Grid item lg={6} sm={6} xl={3} xs={12}>
                    There will be form
                </Grid>
            </Grid>
        </div>
    )
}

export default AdminDashboard
