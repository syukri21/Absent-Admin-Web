import { makeStyles } from "@material-ui/styles"

import { CustomTheme } from "../../../../../theme/customTheme"

const useStyles = makeStyles((theme: CustomTheme) => ({
    root: {
        height: "100%",
        width: "100%",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        cursor: "pointer"
    },
    content: {
        alignItems: "center",
        display: "flex"
    },
    title: {
        fontWeight: 700
    },
    avatar: {
        backgroundColor: theme.palette.white,
        color: theme.palette.primary.main,
        height: 56,
        width: 56
    },
    icon: {
        height: 32,
        width: 32
    }
}))

export default useStyles
