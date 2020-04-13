import * as React from "react"
import useStyles from "./styles"
// import useClassStyles from "./styles"
import Grid from "@material-ui/core/Grid"
import TableStudentsBySchedule from "./components/TableStudentsBySchedule/TableStudentsBySchedule"
import DetailClass from "./components/DetailClass/DetailClass"
const SearchBoxSchedule = React.lazy(() => import("./components/SearchBoxSchedule"))

export interface ClassProps {}

const Class: React.SFC<ClassProps> = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item lg={3} xl={3} sm={12} xs={12}>
                    <Grid container spacing={2}>
                        <Grid item lg={12} sm={12} md={12} xs={12}>
                            <React.Suspense fallback={null}>
                                <SearchBoxSchedule></SearchBoxSchedule>
                            </React.Suspense>
                        </Grid>
                        <Grid item lg={12} sm={12} md={12} xs={12}>
                            <DetailClass></DetailClass>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={9} xl={9} sm={12} xs={12}>
                    <TableStudentsBySchedule></TableStudentsBySchedule>
                </Grid>
            </Grid>
        </div>
    )
}

export default Class
