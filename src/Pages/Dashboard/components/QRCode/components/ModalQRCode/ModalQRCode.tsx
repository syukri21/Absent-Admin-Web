import React from "react"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogContent from "@material-ui/core/DialogContent"
import DialogActions from "@material-ui/core/DialogActions/DialogActions"
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"

import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import QRCode from "qrcode.react"

import useModalQRCode from "./useModalQRCode"

export interface ModalQRCodeProps {}

const ModalQRCode: React.SFC<ModalQRCodeProps> = props => {
    const { fullScreen, handleClose, isOpen, courseName, courseDate, token } = useModalQRCode()

    return (
        <Dialog fullScreen={fullScreen} open={isOpen} onClose={handleClose} aria-labelledby='responsive-dialog-title'>
            <DialogTitle id='responsive-dialog-title'>
                <Box display='flex'>
                    <Box flexGrow={1}>{courseName}</Box>
                    <Box>{courseDate}</Box>
                </Box>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <QRCode value={token || ""} size={400} />
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color='primary' autoFocus>
                    CLOSE
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ModalQRCode
