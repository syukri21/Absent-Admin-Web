import { CustomTheme } from "../../../../theme/customTheme"
import { lighten, makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: CustomTheme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1)
    },
    highlight:
        theme.palette.type === "light"
            ? {
                  color: theme.palette.secondary.main,
                  backgroundColor: lighten(theme.palette.secondary.light, 0.85)
              }
            : {
                  color: theme.palette.text.primary,
                  backgroundColor: theme.palette.secondary.dark
              },
    title: {
        flex: "1 1 100%"
    },
    content: {
        padding: 0
    },
    image: {
        height: 48,
        width: 48
    },
    actions: {
        justifyContent: "flex-end"
    },
    buttonBase: {
        width: "100%",
        height: "100%"
    },
    table: {
        // minWidth: 650
    },
    toolbar: {
        height: 30,
        background: "red"
    }
}))

export default useStyles
