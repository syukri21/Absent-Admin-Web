import { makeStyles } from "@material-ui/styles"
import { CustomTheme } from "./../../../../theme/customTheme"

const useStyles = makeStyles((theme: CustomTheme) => ({
    root: {},
    button: {
        margin: theme.spacing(1),
    },
}))

export default useStyles
