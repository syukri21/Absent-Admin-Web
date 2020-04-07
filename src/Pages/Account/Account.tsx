import * as React from "react"
import useStyles from "./styles"

import Grid from "@material-ui/core/Grid"
const AccountProfiles = React.lazy(() => import("./components/AccountProfiles"))
const AccountDetails = React.lazy(() => import("./components/AccountDetails/AccountDetails"))

export interface AccountProps {}

const Account: React.SFC<AccountProps> = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item lg={4} md={6} xl={4} xs={12}>
                    <React.Suspense fallback={null}>
                        <AccountProfiles></AccountProfiles>
                    </React.Suspense>
                </Grid>
                <Grid item lg={8} md={6} xl={8} xs={12}>
                    <React.Suspense fallback={null}>
                        <AccountDetails></AccountDetails>
                    </React.Suspense>
                </Grid>
            </Grid>
        </div>
    )
}

export default Account
