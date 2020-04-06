import { makeStyles } from "@material-ui/core/styles"
import { CustomTheme } from "../../../../../theme/customTheme"

const useStyles = makeStyles((theme: CustomTheme) => ({
    root: {},
    media: {
        height: 140,
        position: "relative",
    },
    mediaInner: {
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    mediaInitial: {
        color: theme.palette.white,
    },
    box: {
        justifyContent: "between",
    },
    divider: {
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1),
    },
}))

export default useStyles
