import React, { useState } from "react"
import { Link as RouterLink } from "react-router-dom"
import clsx from "clsx"
import { AppBar, Toolbar, Badge, Hidden, IconButton } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined"
import InputIcon from "@material-ui/icons/Input"
import useStyles from "./styles"

export interface TopbarProps {
    className?: string
    onSidebarOpen: () => void
}

const Topbar: React.SFC<TopbarProps> = props => {
    const [notifications] = useState([])
    const classes = useStyles()
    const { className, onSidebarOpen } = props

    return (
        <AppBar className={clsx(classes.root, className)}>
            <Toolbar>
                <RouterLink to='/'>
                    <img alt='Logo' src='/images/logos/logo--white.svg' />
                </RouterLink>
                <div className={classes.flexGrow} />
                <Hidden mdDown>
                    <IconButton color='inherit'>
                        <Badge badgeContent={notifications.length} color='primary' variant='dot'>
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton className={classes.signOutButton} color='inherit'>
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
