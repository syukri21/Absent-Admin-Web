import * as React from "react"
import { Grid } from "@material-ui/core"

import Budget from "./components/Budget"
import useStyles from "./styles"
import LatestOrders from "./components/LatestOrders"

export interface DashboardProps {}

const Dashboard: React.SFC<DashboardProps> = props => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                    <Budget />
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                    {
                        // <TotalUsers />
                    }
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                    {
                        // <TasksProgress />
                    }
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                    {
                        // <TotalProfit />
                    }
                </Grid>
                <Grid item lg={8} md={12} xl={9} xs={12}>
                    {
                        // <LatestSales />
                    }
                </Grid>
                <Grid item lg={4} md={6} xl={3} xs={12}>
                    {
                        // <UsersByDevice />
                    }
                </Grid>
                <Grid item lg={4} md={6} xl={3} xs={12}>
                    {
                        // <LatestProducts />
                    }
                </Grid>
                <Grid item lg={8} md={12} xl={9} xs={12}>
                    <LatestOrders />
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard
