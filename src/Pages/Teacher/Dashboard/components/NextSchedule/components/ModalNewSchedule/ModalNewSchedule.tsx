import * as React from "react"
import DayjsUtils from "@date-io/dayjs"
import { KeyboardTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import {
    Dialog,
    DialogContent,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Box
} from "@material-ui/core"

import CloseIcon from "@material-ui/icons/Close"
import FormHelperText from "@material-ui/core/FormHelperText"

import useModalNewSchedule from "./useModalNewSchedule"
import useStyles from "./styles"

export interface ModalNewScheduleProps {}

const ModalNewSchedule: React.SFC<ModalNewScheduleProps> = () => {
    const {
        isOpen,
        handleClose,
        handleChangeSelect,
        handleCloseSelect,
        handleOpenSelect,
        selectIsOpen,
        select,
        courses,
        handleSubmit,
        hasError
    } = useModalNewSchedule()
    const classes = useStyles()

    return (
        <Dialog open={isOpen} onClose={handleClose} aria-labelledby='form-dialog-title' fullScreen>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge='start' color='inherit' onClick={handleClose} aria-label='close'>
                        <CloseIcon />
                    </IconButton>
                    <Typography variant='h5' color='inherit'>
                        ADD NEW SCHEDULE
                    </Typography>
                </Toolbar>
            </AppBar>
            <DialogContent>
                <Box display='flex' justifyContent='center'>
                    <Box width={400}>
                        <FormControl className={classes.formControl} fullWidth>
                            <InputLabel id='course'>Mata Kuliah</InputLabel>
                            <Select
                                label='course'
                                id='course'
                                margin='dense'
                                open={selectIsOpen("course")}
                                onClose={() => handleCloseSelect("course")}
                                error={hasError("course")}
                                value={select["course"].value}
                                onOpen={() => handleOpenSelect("course")}
                                onChange={(e: any) => handleChangeSelect("course", e.target.value)}
                            >
                                <MenuItem value=''>
                                    <em>None</em>
                                </MenuItem>
                                {courses.data.length > 0 &&
                                    courses.data.map((course: any) => {
                                        return (
                                            <MenuItem key={course.ID} value={course.ID}>
                                                {course.name}
                                            </MenuItem>
                                        )
                                    })}
                            </Select>
                            <FormHelperText error={hasError("course")}>{hasError("course") && select.errors["course"]}</FormHelperText>
                        </FormControl>

                        <FormControl className={classes.formControl} fullWidth>
                            <InputLabel id='day'>Hari</InputLabel>
                            <Select
                                label='day'
                                id='day'
                                margin='dense'
                                error={hasError("day")}
                                value={select["day"].value}
                                open={selectIsOpen("day")}
                                onClose={() => handleCloseSelect("day")}
                                onOpen={() => handleOpenSelect("day")}
                                onChange={(e: any) => handleChangeSelect("day", e.target.value)}
                            >
                                <MenuItem value=''>
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>Senin</MenuItem>
                                <MenuItem value={2}>Selasa</MenuItem>
                                <MenuItem value={3}>Rabu</MenuItem>
                                <MenuItem value={4}>Kamis</MenuItem>
                                <MenuItem value={5}>Jumat</MenuItem>
                                <MenuItem value={6}>Sabtu</MenuItem>
                                <MenuItem value={0}>Minggu</MenuItem>
                            </Select>
                            <FormHelperText error={hasError("day")}>{hasError("day") && select.errors["day"]}</FormHelperText>
                        </FormControl>

                        <FormControl className={classes.formControl} fullWidth>
                            <MuiPickersUtilsProvider utils={DayjsUtils}>
                                <KeyboardTimePicker
                                    margin='normal'
                                    id='time-picker'
                                    label='Time'
                                    error={hasError("time")}
                                    value={select["time"].value}
                                    onChange={(e: any) => {
                                        handleChangeSelect("time", e)
                                    }}
                                    KeyboardButtonProps={{
                                        "aria-label": "change time"
                                    }}
                                />
                                <FormHelperText error={hasError("time")}>{hasError("time") && select.errors["time"]}</FormHelperText>
                            </MuiPickersUtilsProvider>
                        </FormControl>

                        <FormControl className={classes.formControl} fullWidth>
                            <InputLabel id='week'>Minggu</InputLabel>
                            <Select
                                label='week'
                                id='week'
                                margin='dense'
                                error={hasError("week")}
                                value={select["week"].value}
                                open={selectIsOpen("week")}
                                onClose={() => handleCloseSelect("week")}
                                onOpen={() => handleOpenSelect("week")}
                                onChange={(e: any) => handleChangeSelect("week", e.target.value)}
                            >
                                <MenuItem value=''>
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"EVEN"}>Ganjil</MenuItem>
                                <MenuItem value={"ODD"}>Genap</MenuItem>
                                <MenuItem value={"BOTH"}>Ganjil & Genap</MenuItem>
                            </Select>
                            <FormHelperText error={hasError("week")}>{hasError("week") && select.errors["week"]}</FormHelperText>
                        </FormControl>

                        <Button fullWidth variant='contained' className={classes.button} onClick={handleSubmit} color='primary'>
                            ADD
                        </Button>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default ModalNewSchedule
