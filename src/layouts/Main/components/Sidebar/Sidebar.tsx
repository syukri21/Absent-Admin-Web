import React from "react"
import clsx from "clsx"

import { Divider, Drawer } from "@material-ui/core"
import DashboardIcon from "@material-ui/icons/Dashboard"
import PeopleIcon from "@material-ui/icons/People"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import TextFieldsIcon from "@material-ui/icons/TextFields"
import ImageIcon from "@material-ui/icons/Image"
import AccountBoxIcon from "@material-ui/icons/AccountBox"
import SettingsIcon from "@material-ui/icons/Settings"
import LockOpenIcon from "@material-ui/icons/LockOpen"

import { Profile, SidebarNav, UpgradePlan } from "./components"
import useStyles from "./styles"

export interface SidebarProps {
    className?: string
    onClose?: () => void
    isOpen: boolean
    variant: string
}

const pages = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: <DashboardIcon />
    },
    {
        title: "Users",
        href: "/users",
        icon: <PeopleIcon />
    },
    {
        title: "Products",
        href: "/products",
        icon: <ShoppingBasketIcon />
    },
    {
        title: "Authentication",
        href: "/sign-in",
        icon: <LockOpenIcon />
    },
    {
        title: "Typography",
        href: "/typography",
        icon: <TextFieldsIcon />
    },
    {
        title: "Icons",
        href: "/icons",
        icon: <ImageIcon />
    },
    {
        title: "Account",
        href: "/account",
        icon: <AccountBoxIcon />
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
                <UpgradePlan />
            </div>
        </Drawer>
    )
}

export default Sidebar
