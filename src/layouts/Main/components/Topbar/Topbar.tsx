import React, { useState } from "react"
import { Link as RouterLink } from "react-router-dom"
import clsx from "clsx"
import { AppBar, Toolbar, Badge, Hidden, IconButton, Typography } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined"
import InputIcon from "@material-ui/icons/Input"
import useStyles from "./styles"
import useSignout from "./handler/useSignout"

export interface TopbarProps {
    className?: string
    onSidebarOpen: () => void
}

const Topbar: React.SFC<TopbarProps> = props => {
    const [notifications] = useState([])
    const { handleSignout } = useSignout()
    const classes = useStyles()
    const { className, onSidebarOpen } = props

    return (
        <AppBar className={clsx(classes.root, className)}>
            <Toolbar>
                <RouterLink to='/'>
                    <Typography variant='h3' className={classes.logo}>
                        A
                    </Typography>
                </RouterLink>
                <div className={classes.flexGrow} />
                <Hidden mdDown>
                    <IconButton color='inherit'>
                        <Badge badgeContent={notifications.length} color='primary' variant='dot'>
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton className={classes.signOutButton} onClick={handleSignout} color='inherit'>
                        <InputIcon />
                    </IconButton>
                </Hidden>
                <Hidden lgUp>
                    <IconButton color='inherit' onClick={onSidebarOpen}>
                        <MenuIcon />
                    </IconButton>
                </Hidden>
            </Toolbar>
        </AppBar>
    )
}

export default Topbar
