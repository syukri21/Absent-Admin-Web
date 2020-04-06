import * as React from "react"
// import useStyles from "./styles"
import Paper from "@material-ui/core/Paper"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"
// import useClassStyles from "./styles"
import Box from "@material-ui/core/Box"
import useSearchBoxSchedule from "./useSearchBoxSchedule"

export interface SearchBoxScheduleProps {}

const SearchBoxSchedule: React.SFC<SearchBoxScheduleProps> = () => {
    // const classes = useStyles()

    const { schedules, activeSchedule, handleChangeActiveSchedule } = useSearchBoxSchedule()
    return (
        <Paper>
            <Box p={2}>
                <Autocomplete
                    style={{ flex: 1 }}
                    id='combo-box-demo'
                    value={activeSchedule}
                    options={schedules}
                    onChange={handleChangeActiveSchedule}
                    getOptionLabel={(option: any) => option.Course.name}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            label='Search Schedule'
                            variant='outlined'
                        />
                    )}
                />
            </Box>
        </Paper>
    )
}

export default SearchBoxSchedule
