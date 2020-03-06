import { makeStyles } from "@material-ui/styles"

const useSigninStyles = makeStyles((theme: any) => ({
    root: {
        backgroundColor: theme.palette.background.default,
        height: "100%"
    },
    grid: {
        height: "100%"
    },
    overlay: {
        background: "rgba(0,0,0,0.5)",
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    quoteContainer: {
        [theme.breakpoints.down("md")]: {
            display: "none"
        }
    },
    quote: {
        backgroundColor: theme.palette.neutral,
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url(/images/auth.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative"
    },
    quoteInner: {
        textAlign: "center",
        flexBasis: "600px",
        position: "relative",
        zIndex: 10
    },
    quoteText: {
        color: theme.palette.white,
        fontWeight: 300
    },
    name: {
        marginTop: theme.spacing(3),
        color: theme.palette.white
    },
    bio: {
        color: theme.palette.white
    },
    contentContainer: {},
    content: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    contentHeader: {
        display: "flex",
        alignItems: "center",
        paddingTop: theme.spacing(5),
        paddingBototm: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    },
    logoImage: {
        marginLeft: theme.spacing(4)
    },
    contentBody: {
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            justifyContent: "center"
        }
    },
    form: {
        paddingLeft: 100,
        paddingRight: 100,
        paddingBottom: 125,
        flexBasis: 700,
        [theme.breakpoints.down("sm")]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
        }
    },
    title: {
        marginTop: theme.spacing(3)
    },
    socialButtons: {
        marginTop: theme.spacing(3)
    },
    socialIcon: {
        marginRight: theme.spacing(1)
    },
    sugestion: {
        marginTop: theme.spacing(2)
    },
    textField: {
        marginTop: theme.spacing(2)
    },
    signInButton: {
        margin: theme.spacing(2, 0)
    }
}))

export default useSigninStyles
