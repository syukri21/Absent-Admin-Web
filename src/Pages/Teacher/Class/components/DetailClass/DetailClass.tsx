import React from "react"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Chip from "@material-ui/core/Chip"
import Avatar from "@material-ui/core/Avatar"
import DoneIcon from "@material-ui/icons/Done"
import Divider from "@material-ui/core/Divider"
import List from "@material-ui/core/List"
import { ListItem, ListItemText } from "@material-ui/core"

import useStyles from "./styles"
import StringToRGB from "../../../../../util/intoRgb"
import useDetailClass from "./useDetailClass"
import dayjs from "dayjs"
import { getDaySchedule } from "../../../../../util/scheduleFromNow"

export interface DetailClassProps {}

const DetailClass: React.SFC<DetailClassProps> = (props) => {
    const classes = useStyles()
    const { schedule } = useDetailClass()

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image='/static/images/cards/contemplative-reptile.jpg' title='Contemplative Reptile'>
                <div className={classes.mediaInner} style={{ background: StringToRGB(schedule.Course.name) }}>
                    <Typography variant='h1' className={classes.mediaInitial}>
                        {schedule.Course.name.substring(0, 2).toUpperCase()}
                    </Typography>
                </div>
            </CardMedia>
            <CardContent>
                <Box mb={1}>
                    <Chip variant='outlined' size='small' avatar={<Avatar>1</Avatar>} label={schedule.Course.name} clickable color='primary' />
                </Box>
                <Typography color='textSecondary' variant='caption'>
                    {schedule.time && dayjs(getDaySchedule(schedule)).locale("id").format("dddd - D MMM YYYY, HH:mm")}
                </Typography>
            </CardContent>
            <Divider></Divider>
            <List>
                <ListItem>
                    <ListItemText primary={`Semester ${schedule.Course.semester}`} secondary={`Pertemuan ke -${schedule.numberOfMeeting}`} />
                </ListItem>
            </List>
        </Card>
    )
}

export default DetailClass
