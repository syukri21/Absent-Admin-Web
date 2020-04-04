import * as React from "react"
import { Grid } from "@material-ui/core"

import Budget from "./components/Label"
import useStyles from "./styles"
import LatestOrders from "./components/NewAbsent"
import LatestProducts from "./components/NextSchedule/NextSchedule"
import QRCode from "./components/QRCode/QRCode"
import SocketAbsentProvider from "../../../socket/SocketAbsentProvider"

export interface DashboardProps {}

const Dashboard: React.SFC<DashboardProps> = props => {
    const classes = useStyles()
    return (
        <SocketAbsentProvider>
            <div className={classes.root}>
                <Grid container spacing={4}>
                    <Grid item lg={9} sm={6} xl={3} xs={12}>
                        <Budget />
                    </Grid>
                    <Grid item lg={3} sm={6} xl={3} xs={12}>
                        <QRCode />
                    </Grid>
                    <Grid item lg={3} md={12} xl={3} xs={12}>
                        <LatestProducts />
                    </Grid>
                    <Grid item lg={9} md={12} xl={9} xs={12}>
                        <LatestOrders />
                    </Grid>
                </Grid>
            </div>
        </SocketAbsentProvider>
    )
}

export default Dashboard
