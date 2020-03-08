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
    IconButton
} from "@material-ui/core"
import ArrowRightIcon from "@material-ui/icons/ArrowRight"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import Avatar from "@material-ui/core/Avatar"

import useStyles from "./styles"
import useNextSchedule from "./handle/useNextSchedule"
import StringToRGB from "../../../../util/intoRgb"

export interface NextScheduleProps {
    className?: string
}

const NextSchedule: React.SFC<NextScheduleProps> = props => {
    const classes = useStyles()
    const { data } = useNextSchedule()
    const { className } = props

    return (
        <Card className={clsx(classes.root, className)}>
            <CardHeader subheader={`${data.length} in total`} title='Next Schedule' />
            <Divider />
            <CardContent className={classes.content}>
                <List>
                    {data.map((schedule: any, i) => (
                        <ListItem divider={i < data.length - 1} key={schedule.id}>
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

                            <ListItemText primary={schedule.Course.name} secondary={`Updated 2`} />
                            <IconButton edge='end' size='small'>
                                <MoreVertIcon />
                            </IconButton>
                        </ListItem>
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
    )
}

export default NextSchedule
