import { makeStyles } from "@material-ui/core/styles"
import { CustomTheme } from "../../../../../../theme/customTheme"

const useStyles = makeStyles((theme: CustomTheme) => ({
    formControl: {
        marginTop: theme.spacing(1),
        minWidth: 120
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    }
}))

export default useStyles
