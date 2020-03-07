/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { forwardRef } from "react"
import { NavLink as RouterLink } from "react-router-dom"
import clsx from "clsx"
import PropTypes from "prop-types"
import { List, ListItem, Button } from "@material-ui/core"
import useStyles from "./styles"
import { Page } from "../../Sidebar"

const CustomRouterLink = forwardRef((props: any, ref: any) => (
    <div ref={ref} style={{ flexGrow: 1 }}>
        <RouterLink {...props} />
    </div>
))

export interface SidebarNavProps {
    className?: string
    pages: Page[]
}

const SidebarNav: React.SFC<SidebarNavProps> = props => {
    const { pages, className, ...rest } = props

    const classes = useStyles()

    return (
        <List {...rest} className={clsx(classes.root, className)}>
            {pages.map((page: Page) => (
                <ListItem className={classes.item} disableGutters key={page.title}>
                    <Button activeClassName={classes.active} className={classes.button} component={CustomRouterLink} to={page.href}>
                        <div className={classes.icon}>{page.icon}</div>
                        {page.title}
                    </Button>
                </ListItem>
            ))}
        </List>
    )
}

export default SidebarNav
