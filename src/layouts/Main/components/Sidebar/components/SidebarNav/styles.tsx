/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import { makeStyles } from "@material-ui/styles"
import { colors } from "@material-ui/core"
import { CustomTheme } from "../../../../../../theme/customTheme"

const useStyles = makeStyles((theme: CustomTheme) => ({
    root: {},
    item: {
        display: "flex",
        paddingTop: 0,
        paddingBottom: 0
    },
    button: {
        color: colors.blueGrey[800],
        padding: "10px 8px",
        justifyContent: "flex-start",
        textTransform: "none",
        letterSpacing: 0,
        width: "100%",
        fontWeight: theme.typography.fontWeightMedium
    },
    icon: {
        color: theme.palette.icon,
        width: 24,
        height: 24,
        display: "flex",
        alignItems: "center",
        marginRight: theme.spacing(1)
    },
    active: {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium,
        "& $icon": {
            color: theme.palette.primary.main
        }
    }
}))

export default useStyles
