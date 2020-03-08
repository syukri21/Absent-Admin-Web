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
        color: theme.palette.white
    }
}))

export default useStyles
