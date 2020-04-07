import { makeStyles } from "@material-ui/styles"
import { CustomTheme } from "./../../../../theme/customTheme"

const useStyles = makeStyles((theme: CustomTheme) => ({
    root: {},
    details: {
        display: "flex",
    },
    avatar: {
        marginLeft: "auto",
        height: 110,
        width: 100,
        flexShrink: 0,
        flexGrow: 0,
    },
    progress: {
        marginTop: theme.spacing(2),
    },
    uploadButton: {
        marginRight: theme.spacing(2),
    },
}))

export default useStyles
