import React from "react"
import { Link as RouterLink } from "react-router-dom"
import clsx from "clsx"
import { Avatar, Typography } from "@material-ui/core"
import useStyles from "./styles"

export interface ProfileProps {
    className?: string
}

const Profile: React.SFC<ProfileProps> = props => {
    const classes = useStyles()
    const { className } = props

    const user = {
        name: "Shen Zhi",
        avatar: "/images/avatars/avatar_11.png",
        bio: "Brain Director"
    }

    return (
        <div className={clsx(classes.root, className)}>
            <Avatar alt='Person' className={classes.avatar} component={RouterLink} src={user.avatar} to='/settings' />
            <Typography className={classes.name} variant='h4'>
                {user.name}
            </Typography>
            <Typography variant='body2'>{user.bio}</Typography>
        </div>
    )
}

export default Profile
