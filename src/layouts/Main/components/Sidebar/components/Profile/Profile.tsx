import React from "react"
import { Link as RouterLink } from "react-router-dom"
import clsx from "clsx"
import { Avatar, Typography } from "@material-ui/core"
import useStyles from "./styles"
import useProfile from "./handler/useProfile"

export interface ProfileProps {
    className?: string
}

const Profile: React.SFC<ProfileProps> = props => {
    const classes = useStyles()
    const { user } = useProfile()
    const { className } = props

    return (
        <div className={clsx(classes.root, className)}>
            <Avatar alt='Person' className={classes.avatar} component={RouterLink} to='/settings'>
                {user.data.fullname && user.data.fullname.slice(0, 2).toUpperCase()}
            </Avatar>
            <Typography className={classes.name} variant='h6'>
                {user.data.fullname}
            </Typography>
            <Typography variant='body2'>{user.data.nid}</Typography>
        </div>
    )
}

export default Profile
