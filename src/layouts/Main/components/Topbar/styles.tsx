import { makeStyles } from "@material-ui/styles"
import { CustomTheme } from "../../../../theme/customTheme"

const useStyles = makeStyles((theme: CustomTheme) => ({
    root: {
        boxShadow: "none"
    },
    flexGrow: {
        flexGrow: 1
    },
    signOutButton: {
        marginLeft: theme.spacing(1)
    },
    logo: {
        color: theme.palette.white,
        border: "2px solid",
        borderColor: theme.palette.white,
        borderRadius: "100%",
        width: theme.spacing(4),
        height: theme.spacing(4),
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
}))

export default useStyles
