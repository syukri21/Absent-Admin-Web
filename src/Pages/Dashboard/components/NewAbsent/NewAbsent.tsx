import * as React from "react"
import PerfectScrollbar from "react-perfect-scrollbar"
import {
    Card,
    CardActions,
    CardHeader,
    CardContent,
    Button,
    Divider,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tooltip,
    TableSortLabel
} from "@material-ui/core"

import useStyles from "./styles"
import ArrowRightIcon from "@material-ui/icons/ArrowRight"
import dayjs from "dayjs"

/* -------------------------------------------------------------------------- */
/*                           TODO MAKE STATUSBULLET                           */
/* -------------------------------------------------------------------------- */

import useNewAbsent from "./handler/useNewAbsent"

/* -------------------------------------------------------------------------- */

export interface NewAbsentProps {}

const NewAbsent: React.SFC<NewAbsentProps> = props => {
    const classes = useStyles()
    const schedule = useNewAbsent()

    const absents: any = schedule.data.Absents || []
    console.log("absents", absents)

    return (
        <Card className={classes.root}>
            <CardHeader
                action={
                    <Button color='primary' size='small' variant='outlined'>
                        New entry
                    </Button>
                }
                title='Absent'
            />
            <Divider />
            <CardContent className={classes.content}>
                <PerfectScrollbar>
                    <div className={classes.inner}>
                        <Table>
                            <TableHead>
                                <TableRow hover>
                                    <TableCell align='center'>No</TableCell>
                                    <TableCell>Student</TableCell>
                                    <TableCell align='left'>NIM</TableCell>
                                    <TableCell align='right'>
                                        <Tooltip enterDelay={300} title='Sort'>
                                            <TableSortLabel active direction='desc'>
                                                Absent Date
                                            </TableSortLabel>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {absents.map((absen: any, index: any) => (
                                    <TableRow hover key={index}>
                                        <TableCell align='center'>{index + 1}</TableCell>
                                        <TableCell>{absen.Student.fullname}</TableCell>
                                        <TableCell align='left'>{absen.Student.nim}</TableCell>
                                        <TableCell align='right'>{dayjs(absen.absentTime).format("DD MMMM YYYY, HH:mm:ss")}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </PerfectScrollbar>
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

export default NewAbsent
