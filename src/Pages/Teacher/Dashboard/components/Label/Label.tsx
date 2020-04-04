import * as React from "react"
import { CardContent, Card, Grid, Typography, Avatar } from "@material-ui/core"
import useStyles from "./styles"
import { getDaySchedule } from "../../../../../util/scheduleFromNow"
import dayjs from "dayjs"
import StringToRGB from "../../../../../util/intoRgb"
import ActiveScheduleProvider from "../../../../../provider/ActiveSchedule"

export interface LabelProps {}

const Label: React.SFC<LabelProps> = props => {
    const [activeSchedule] = ActiveScheduleProvider.useGlobal()
    console.log("activeSchedule", activeSchedule)

    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardContent>
                <Grid container justify='space-between'>
                    <Grid item>
                        <Typography className={classes.title} color='textSecondary' gutterBottom variant='body2'>
                            {activeSchedule.data.time &&
                                dayjs(getDaySchedule(activeSchedule.data))
                                    .locale("id")
                                    .format("dddd - D MMM YYYY, HH:mm")}
                        </Typography>
                        <Typography variant='h3'>{activeSchedule.data.Course && activeSchedule.data.Course.name.toUpperCase()}</Typography>
                    </Grid>
                    <Grid item>
                        <Avatar
                            className={classes.avatar}
                            style={{
                                background: activeSchedule.data.Course ? StringToRGB(activeSchedule.data.Course.name) : "gray"
                            }}
                        >
                            {activeSchedule.data.Course && activeSchedule.data.Course.name.slice(0, 2).toUpperCase()}
                        </Avatar>
                    </Grid>
                </Grid>
                <Grid container justify='space-between'>
                    <Grid item>
                        <div className={classes.difference}>
                            <Typography className={classes.differenceValue} variant='body2'>
                                {activeSchedule.data.Course && activeSchedule.data.Course.totalSks} SKS
                            </Typography>
                            <Typography className={classes.caption} variant='caption'>
                                Semester {activeSchedule.data.Course && activeSchedule.data.Course.semester}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item>
                        <div className={classes.difference}>
                            <Typography className={classes.differenceValue} variant='body2'>
                                Pertemuan ke-{activeSchedule.data.numberOfMeeting}
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Label
