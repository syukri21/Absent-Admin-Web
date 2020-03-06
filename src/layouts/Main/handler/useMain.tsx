import { useTheme } from "@material-ui/styles"
import { Theme, useMediaQuery } from "@material-ui/core"
import { useState } from "react"

interface IUseMain {
    handleSidebarOpen: () => void
    handleSidebarClose: () => void
    shouldOpenSidebar: boolean
    isDesktop: boolean
}

export default function useMain(): IUseMain {
    const theme = useTheme<Theme>()
    const isDesktop = useMediaQuery(theme.breakpoints.up("lg"), {
        defaultMatches: true
    })

    const [openSidebar, setOpenSidebar] = useState(false)

    const handleSidebarOpen = () => {
        setOpenSidebar(true)
    }

    const handleSidebarClose = () => {
        setOpenSidebar(false)
    }

    const shouldOpenSidebar = isDesktop ? true : openSidebar

    return {
        handleSidebarClose,
        handleSidebarOpen,
        isDesktop,
        shouldOpenSidebar
    }
}
