import { makeStyles } from "@material-ui/styles"
import { CustomTheme } from "../../../../../theme/customTheme"

const useStyles = makeStyles((theme: CustomTheme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))

export default useStyles
