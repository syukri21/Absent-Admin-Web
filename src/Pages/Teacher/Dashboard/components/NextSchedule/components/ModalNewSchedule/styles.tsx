import { makeStyles } from "@material-ui/core/styles"
import { CustomTheme } from "../../../../../../../theme/customTheme"

const useStyles = makeStyles((theme: CustomTheme) => ({
    formControl: {
        marginTop: theme.spacing(3),
        minWidth: 120
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    },
    appBar: {
        position: "relative"
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1
    },
    button: {
        marginTop: theme.spacing(5)
    }
}))

export default useStyles
