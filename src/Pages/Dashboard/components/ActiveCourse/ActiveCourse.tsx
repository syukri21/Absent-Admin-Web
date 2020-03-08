import React from "react"
import clsx from "clsx"
import { Card, CardContent, Grid, Typography, Avatar, Button } from "@material-ui/core"
import ButtonBase from "@material-ui/core/ButtonBase"
import useStyles from "./styles"

export interface ActiveCourseProps {
    className?: string
}

const ActiveCourse: React.SFC<ActiveCourseProps> = props => {
    const { className } = props
    const classes = useStyles()

    return (
        <ButtonBase className={clsx(classes.root, className)}>
            <Card className={clsx(classes.root, className)}>
                <CardContent>
                    <Grid container justify='space-between'>
                        <Grid item>
                            <Typography className={classes.title} color='inherit' gutterBottom variant='body2'>
                                KALKULUS
                            </Typography>
                            <Typography color='inherit' variant='h3'>
                                QRCODE
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Avatar className={classes.avatar}>
                                <Typography variant='h3' color='primary'>
                                    QR
                                </Typography>
                            </Avatar>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </ButtonBase>
    )
}

export default ActiveCourse
