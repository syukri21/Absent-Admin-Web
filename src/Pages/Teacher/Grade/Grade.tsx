import * as React from "react"
import Grid from "@material-ui/core/Grid"
import useStyles from "./styles"

export interface GradeProps {}

const Grade: React.SFC<GradeProps> = (props) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item lg={3} xl={3} sm={12} xs={12}></Grid>
                <Grid item lg={9} sm={12} xl={9} xs={12}></Grid>
            </Grid>
        </div>
    )
}

export default Grade
