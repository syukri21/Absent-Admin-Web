import { makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "fit-content"
    },
    avatar: {
        width: 60,
        height: 60
    },
    name: {
        marginTop: theme.spacing(1)
    }
}))

export default useStyles
