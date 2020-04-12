import React from "react"
import clsx from "clsx"

import { Divider, Drawer } from "@material-ui/core"
import DashboardIcon from "@material-ui/icons/Dashboard"
import Book from "@material-ui/icons/Book"

import PeopleIcon from "@material-ui/icons/People"
import GradeOutlinedIcon from "@material-ui/icons/GradeOutlined"
import SchoolIcon from "@material-ui/icons/School"
import AccountBox from "@material-ui/icons/AccountBox"

import { Profile, SidebarNav } from "./components"
import useStyles from "./styles"
import PerfectScrollbar from "react-perfect-scrollbar"
import User from "../../../../provider/User"

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
        href: "/",
        icon: <DashboardIcon />,
    },
    {
        title: "Perkuliahan",
        href: "/class",
        icon: <PeopleIcon />,
    },
    {
        title: "Nilai Akademik",
        href: "/grade",
        icon: <SchoolIcon />,
    },
    {
        title: "Akun Saya",
        href: "/account",
        icon: <AccountBox />,
    },
]

const pagesAdmin: Array<Page> = [
    {
        title: "Course",
        href: "/",
        icon: <Book />,
    },
    {
        title: "Teacher",
        href: "/teacher",
        icon: <PeopleIcon />,
    },

    {
        title: "Account",
        href: "/account",
        icon: <AccountBox />,
    },
]

const Sidebar: React.SFC<SidebarProps> = (props) => {
    const { isOpen, variant, onClose, className, ...rest } = props
    const [user] = User.useGlobal()

    const classes = useStyles()

    return (
        <Drawer anchor='left' classes={{ paper: classes.drawer }} onClose={onClose} open={isOpen} variant={"persistent"}>
            <PerfectScrollbar>
                <div {...rest} className={clsx(classes.root, className)}>
                    <Profile />
                    <Divider className={classes.divider} />
                    {user.data.user && <SidebarNav className={classes.nav} pages={user.data.user.roleId === 1 ? pages : pagesAdmin} />}
                </div>
            </PerfectScrollbar>
        </Drawer>
    )
}

export default Sidebar
