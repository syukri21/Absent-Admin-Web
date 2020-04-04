import { makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => ({
    root: {},
    content: {
        padding: 0
    },
    inner: {
        // minWidth: 800
    },
    statusContainer: {
        display: "flex",
        alignItems: "center"
    },
    status: {
        marginRight: theme.spacing(1)
    },
    actions: {
        justifyContent: "flex-end"
    },
    cardHeader: {
        "& .MuiCardHeader-action": {
            margin: "auto"
        }
    }
}))

export default useStyles
