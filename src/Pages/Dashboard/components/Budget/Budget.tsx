import * as React from "react"
import { CardContent, Card, Grid, Typography, Avatar } from "@material-ui/core"
import useStyles from "./styles"
import { useGlobal } from "reactn"
import { getDaySchedule } from "../../../../util/scheduleFromNow"
import dayjs from "dayjs"
import StringToRGB from "../../../../util/intoRgb"

export interface BudgetProps {}

const Budget: React.SFC<BudgetProps> = props => {
    const [activeCourse] = useGlobal("ActiveSchedule")
    console.log("activeCourse", activeCourse)
    console.log("getDaySchedule(activeCourse.data)", getDaySchedule(activeCourse.data))

    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardContent>
                <Grid container justify='space-between'>
                    <Grid item>
                        <Typography className={classes.title} color='textSecondary' gutterBottom variant='body2'>
                            {activeCourse.data.time &&
                                dayjs(getDaySchedule(activeCourse.data))
                                    .locale("id")
                                    .format("dddd - D MMM YYYY, HH:mm")}
                        </Typography>
                        <Typography variant='h3'>{activeCourse.data.Course && activeCourse.data.Course.name.toUpperCase()}</Typography>
                    </Grid>
                    <Grid item>
                        <Avatar
                            className={classes.avatar}
                            style={{
                                background: activeCourse.data.Course ? StringToRGB(activeCourse.data.Course.name) : "gray"
                            }}
                        >
                            {activeCourse.data.Course && activeCourse.data.Course.name.slice(0, 2).toUpperCase()}
                        </Avatar>
                    </Grid>
                </Grid>
                <div className={classes.difference}>
                    <Typography className={classes.differenceValue} variant='body2'>
                        {activeCourse.data.Course && activeCourse.data.Course.totalSks} SKS
                    </Typography>
                    <Typography className={classes.caption} variant='caption'>
                        Semester {activeCourse.data.Course && activeCourse.data.Course.semester}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    )
}

export default Budget
