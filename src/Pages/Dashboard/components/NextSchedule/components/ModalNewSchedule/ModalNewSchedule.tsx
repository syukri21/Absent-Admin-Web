import * as React from "react"
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextField,
    DialogActions,
    Button,
    Select,
    MenuItem,
    Box,
    FormControl,
    InputLabel
} from "@material-ui/core"
import useModalNewSchedule from "./useModalNewSchedule"
import useStyles from "./styles"

export interface ModalNewScheduleProps {}

const ModalNewSchedule: React.SFC<ModalNewScheduleProps> = () => {
    const { isOpen, handleClose, handleChangeSelect, handleCloseSelect, handleOpenSelect, selectIsOpen } = useModalNewSchedule()
    const classes = useStyles()

    return (
        <Dialog open={isOpen} onClose={handleClose} aria-labelledby='form-dialog-title'>
            <DialogTitle id='form-dialog-title'>New Schedule</DialogTitle>
            <DialogContent>
                <TextField autoFocus margin='dense' id='name' label='Email Address' type='email' fullWidth />
                <FormControl className={classes.formControl} fullWidth>
                    <InputLabel id='day'>Day</InputLabel>
                    <Select
                        label='day'
                        id='day'
                        margin='dense'
                        open={selectIsOpen("day")}
                        onClose={() => handleCloseSelect("day")}
                        onOpen={() => handleOpenSelect("day")}
                        onChange={(e: any) => handleChangeSelect("day", e.target.value)}
                    >
                        <MenuItem value={1}>Senin</MenuItem>
                        <MenuItem value={2}>Selasa</MenuItem>
                        <MenuItem value={2}>Rabu</MenuItem>
                        <MenuItem value={4}>Kamis</MenuItem>
                        <MenuItem value={5}>Jumat</MenuItem>
                        <MenuItem value={6}>Sabtu</MenuItem>
                        <MenuItem value={0}>Minggu</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl} fullWidth>
                    <InputLabel id='course'>Course</InputLabel>
                    <Select
                        label='course'
                        id='course'
                        margin='dense'
                        open={selectIsOpen("course")}
                        onClose={() => handleCloseSelect("course")}
                        onOpen={() => handleOpenSelect("course")}
                        onChange={(e: any) => handleChangeSelect("course", e.target.value)}
                    >
                        <MenuItem value={1}>Bahasa Indonesia</MenuItem>
                        <MenuItem value={2}>Kalkulus</MenuItem>
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color='primary'>
                    Cancel
                </Button>
                <Button onClick={handleClose} color='primary'>
                    ADD
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ModalNewSchedule
