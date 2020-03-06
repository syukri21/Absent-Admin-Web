import { makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core/"

const useSignUpStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        height: "100%"
    },
    grid: {
        height: "100%"
    },
    quoteContainer: {
        [theme.breakpoints.down("md")]: {
            display: "none"
        }
    },
    overlay: {
        background: theme.palette.primary.dark + "66",
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    quote: {
        backgroundColor: theme.palette.common.white,
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
        flexBasis: "600px"
    },
    quoteText: {
        color: theme.palette.common.white,
        fontWeight: 300
    },
    name: {
        marginTop: theme.spacing(3),
        color: theme.palette.common.white
    },
    bio: {
        color: theme.palette.common.white
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
        flexBasis: 700,
        [theme.breakpoints.down("sm")]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
        }
    },
    title: {
        // marginTop: theme.spacing(1)
    },
    textField: {
        marginTop: theme.spacing(2)
    },
    policy: {
        marginTop: theme.spacing(1),
        display: "flex",
        alignItems: "center"
    },
    policyCheckbox: {
        marginLeft: "-14px"
    },
    signUpButton: {
        margin: theme.spacing(2, 0)
    },
    policyText: {}
}))

export default useSignUpStyles
