import React, { useState } from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { useTheme } from "@material-ui/styles"
import { useMediaQuery, Theme } from "@material-ui/core"
import useStyles from "./styles"
import useMain from "./handler"

/* -------------------------------------------------------------------------- */
/*                     TODO NEXT COMPONENT NEED TO FINISH                     */
/* -------------------------------------------------------------------------- */

// import { Sidebar, Topbar, Footer } from "./components"

/* -------------------------------------------------------------------------- */

export interface MainProps {
    children: React.SFC<any> | JSX.Element
}

const Main: React.SFC<MainProps> = props => {
    const { children } = props
    const { handleSidebarClose, handleSidebarOpen, shouldOpenSidebar, isDesktop } = useMain()
    const classes = useStyles()

    return (
        <div
            className={clsx({
                [classes.root]: true,
                [classes.shiftContent]: isDesktop
            })}
        >
            {
                // <Topbar onSidebarOpen={handleSidebarOpen} />
            }
            {
                // <Sidebar onClose={handleSidebarClose} open={shouldOpenSidebar} variant={isDesktop ? "persistent" : "temporary"} />
            }
            <main className={classes.content}>
                {children}
                {
                    // <Footer />
                }
            </main>
        </div>
    )
}

export default Main
