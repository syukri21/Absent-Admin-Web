import React from "react"
import clsx from "clsx"

import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Button,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    ButtonBase
} from "@material-ui/core"
import ArrowRightIcon from "@material-ui/icons/ArrowRight"
import Avatar from "@material-ui/core/Avatar"

import useStyles from "./styles"
import useNextSchedule from "./handle/useNextSchedule"
import StringToRGB from "../../../../util/intoRgb"
import scheduleFromNow from "./../../../../util/scheduleFromNow"
import NextScheduleProvider from "../../../../provider/NextScheduleProvider"

export interface NextScheduleProps {
    className?: string
}

const NextSchedule: React.SFC<NextScheduleProps> = props => {
    const classes = useStyles()
    const { data, handleSelectSchedule } = useNextSchedule()
    const { className } = props

    return (
        <NextScheduleProvider>
            <Card className={clsx(classes.root, className)}>
                <CardHeader subheader={`${data.length} in total`} title='Next Schedule' />
                <Divider />
                <CardContent className={classes.content}>
                    <List>
                        {data.map((schedule: any, i: any) => (
                            <ButtonBase className={classes.buttonBase} key={schedule.id} onClick={() => handleSelectSchedule(schedule)}>
                                <ListItem divider={i < data.length - 1}>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt='Person'
                                            className={classes.image}
                                            style={{
                                                background: StringToRGB(schedule.Course.name)
                                            }}
                                        >
                                            {schedule.Course.name.slice(0, 2).toUpperCase()}
                                        </Avatar>
                                    </ListItemAvatar>

                                    <ListItemText
                                        primary={schedule.Course.name}
                                        secondary={`${scheduleFromNow({
                                            day: schedule.day,
                                            time: schedule.time,
                                            week: schedule.week
                                        })}`}
                                    />
                                </ListItem>
                            </ButtonBase>
                        ))}
                    </List>
                </CardContent>
                <Divider />
                <CardActions className={classes.actions}>
                    <Button color='primary' size='small' variant='text'>
                        View all <ArrowRightIcon />
                    </Button>
                </CardActions>
            </Card>
        </NextScheduleProvider>
    )
}

export default NextSchedule
