import * as React from "react"
import { CardContent, Card, Grid, Typography, Avatar } from "@material-ui/core"
import MoneyIcon from "@material-ui/icons/Money"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"
import useStyles from "./styles"

export interface BudgetProps {}

const Budget: React.SFC<BudgetProps> = props => {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardContent>
                <Grid container justify='space-between'>
                    <Grid item>
                        <Typography className={classes.title} color='textSecondary' gutterBottom variant='body2'>
                            BUDGET
                        </Typography>
                        <Typography variant='h3'>$24,000</Typography>
                    </Grid>
                    <Grid item>
                        <Avatar className={classes.avatar}>
                            <MoneyIcon className={classes.icon} />
                        </Avatar>
                    </Grid>
                </Grid>
                <div className={classes.difference}>
                    <ArrowDownwardIcon className={classes.differenceIcon} />
                    <Typography className={classes.differenceValue} variant='body2'>
                        12%
                    </Typography>
                    <Typography className={classes.caption} variant='caption'>
                        Since last month
                    </Typography>
                </div>
            </CardContent>
        </Card>
    )
}

export default Budget
