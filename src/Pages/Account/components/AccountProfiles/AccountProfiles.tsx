import * as React from "react"
import useStyles from "./styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import LinearProgress from "@material-ui/core/LinearProgress"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import CardActions from "@material-ui/core/CardActions"
import dayjs from "dayjs"

export interface AccountProfilesProps {}

const AccountProfiles: React.SFC<AccountProfilesProps> = () => {
    const classes = useStyles()

    const user = {
        name: "Shen Zhi",
        city: "Los Angeles",
        country: "USA",
        timezone: "GTM-7",
        avatar: "/images/avatars/avatar_11.png",
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <div className={classes.details}>
                    <div>
                        <Typography gutterBottom variant='h2'>
                            John Doe
                        </Typography>
                        <Typography color='textSecondary' variant='body1'>
                            {user.city}, {user.country}
                        </Typography>
                        <Typography color='textSecondary' variant='body1'>
                            {dayjs().format("hh:mm A")} ({user.timezone})
                        </Typography>
                    </div>
                    <Avatar className={classes.avatar} src={user.avatar} />
                </div>
                <div className={classes.progress}>
                    <Typography variant='body1'>Profile Completeness: 70%</Typography>
                    <LinearProgress value={70} variant='determinate' />
                </div>
            </CardContent>
            <Divider />
            <CardActions>
                <Button className={classes.uploadButton} color='primary' variant='text'>
                    Upload picture
                </Button>
                <Button variant='text'>Remove picture</Button>
            </CardActions>
        </Card>
    )
}

export default AccountProfiles
