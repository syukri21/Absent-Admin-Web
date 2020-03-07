import React from "react"
import clsx from "clsx"

import { Divider, Drawer } from "@material-ui/core"
import DashboardIcon from "@material-ui/icons/Dashboard"
import PeopleIcon from "@material-ui/icons/People"
import SettingsIcon from "@material-ui/icons/Settings"

import { Profile, SidebarNav } from "./components"
import useStyles from "./styles"

export interface SidebarProps {
    className?: string
    onClose?: () => void
    isOpen: boolean
    variant: string
}

export interface Page {
    title: string
    href: string
    icon: React.SFC | JSX.Element
}

const pages: Array<Page> = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: <DashboardIcon />
    },
    {
        title: "Class",
        href: "/class",
        icon: <PeopleIcon />
    },

    {
        title: "Settings",
        href: "/settings",
        icon: <SettingsIcon />
    }
]

const Sidebar: React.SFC<SidebarProps> = props => {
    const { isOpen, variant, onClose, className, ...rest } = props
    const classes = useStyles()

    return (
        <Drawer anchor='left' classes={{ paper: classes.drawer }} onClose={onClose} open={isOpen} variant={"persistent"}>
            <div {...rest} className={clsx(classes.root, className)}>
                <Profile />
                <Divider className={classes.divider} />
                <SidebarNav className={classes.nav} pages={pages} />
            </div>
        </Drawer>
    )
}

export default Sidebar
