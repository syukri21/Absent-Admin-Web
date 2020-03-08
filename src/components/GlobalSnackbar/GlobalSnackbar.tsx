import * as React from "react"
import Snackbar from "@material-ui/core/Snackbar"
import useGlobalSnackbar from "./handler/useGlobalSnackbar"
import Alert from "@material-ui/lab/Alert"

export interface GlobalSnackbarProps {}

const GlobalSnackbar: React.SFC<GlobalSnackbarProps> = props => {
    const { isOpen, handleClose, data } = useGlobalSnackbar()

    return (
        <Snackbar
            anchorOrigin={{
                vertical: "top",
                horizontal: "right"
            }}
            open={isOpen}
            autoHideDuration={6000}
            onClose={handleClose}
            message={data.message}
        >
            <Alert elevation={6} variant='filled' {...props} onClose={handleClose} severity={data.severity}>
                {data.message}
            </Alert>
        </Snackbar>
    )
}

export default GlobalSnackbar
