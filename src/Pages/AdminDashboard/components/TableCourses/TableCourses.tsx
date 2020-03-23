import React from "react"
import MaterialTable, { Column, MTableToolbar } from "material-table"
import Search from "@material-ui/icons/Search"
import ViewColumn from "@material-ui/icons/ViewColumn"
import SaveAlt from "@material-ui/icons/SaveAlt"
import ChevronLeft from "@material-ui/icons/ChevronLeft"
import ChevronRight from "@material-ui/icons/ChevronRight"
import FirstPage from "@material-ui/icons/FirstPage"
import LastPage from "@material-ui/icons/LastPage"
import Add from "@material-ui/icons/Add"

import Check from "@material-ui/icons/Check"
import Delete from "@material-ui/icons/DeleteOutlineOutlined"
import Edit from "@material-ui/icons/EditOutlined"
import Clear from "@material-ui/icons/Clear"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import Divider from "@material-ui/core/Divider"
import Box from "@material-ui/core/Box"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"

import FilterList from "@material-ui/icons/FilterList"
import Remove from "@material-ui/icons/Remove"
import useStyles from "./styles"
import useCourses from "./handler/useCourses"
import { ColorTheme } from "../../../../theme/color"

export interface Row {
    ID: number
    name: string
    semester: number
    totalSks: number
}

const columns: Array<Column<Row>> = [
    { title: "Name", field: "name", cellStyle: { width: "50%" } },
    { title: "Semester", field: "semester", type: "numeric", cellStyle: { textAlign: "center", width: "25%" } },
    { title: "Total SKS", field: "totalSks", type: "numeric", cellStyle: { textAlign: "center", width: "25%" } }
]

export default function MaterialTableDemo() {
    const { courses, addCourse, deleteCourse, updateCourse } = useCourses()
    const classes = useStyles()

    return (
        <Card elevation={1} className={classes.root}>
            <Divider></Divider>
            <MaterialTable
                components={{
                    Container: Box,
                    Header: copyProps => {
                        return (
                            <TableHead>
                                <TableRow hover>
                                    <TableCell align='left'>Name</TableCell>
                                    <TableCell align='center' size='small'>
                                        Semester
                                    </TableCell>
                                    <TableCell align='center' size='small'>
                                        Total SKS
                                    </TableCell>
                                    <TableCell align='center' size='small'>
                                        Action
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                        )
                    },
                    Toolbar: copyProps => (
                        <CardHeader
                            subheader={`${courses.data.length} in total`}
                            title='Courses'
                            action={<MTableToolbar {...copyProps}></MTableToolbar>}
                        />
                    )
                }}
                options={{
                    sorting: false,
                    draggable: false,
                    showEmptyDataSourceMessage: true,
                    showTitle: false,
                    actionsColumnIndex: 3,
                    headerStyle: { minWidth: 106 },
                    searchFieldAlignment: "left",
                    paginationType: "stepped",
                    addRowPosition: "first"
                }}
                icons={{
                    Check: React.forwardRef(() => <Check style={{ color: ColorTheme.success }} />),
                    Export: React.forwardRef(() => <SaveAlt />),
                    Filter: React.forwardRef(() => <FilterList />),
                    FirstPage: React.forwardRef(() => <FirstPage />),
                    LastPage: React.forwardRef(() => <LastPage />),
                    NextPage: React.forwardRef(() => <ChevronRight />),
                    PreviousPage: React.forwardRef(() => <ChevronLeft />),
                    Search: React.forwardRef(() => <Search />),
                    ThirdStateCheck: React.forwardRef(() => <Remove />),
                    ViewColumn: React.forwardRef(() => <ViewColumn />),
                    DetailPanel: React.forwardRef(() => <ChevronRight />),
                    Delete: React.forwardRef(() => <Delete color='error' />),
                    Clear: React.forwardRef(() => <Clear color='error' />),
                    Add: React.forwardRef(() => <Add color='primary' />),
                    Edit: React.forwardRef(() => <Edit style={{ color: ColorTheme.success }} />),
                    ResetSearch: React.forwardRef(() => <Clear />)
                }}
                title='Courses'
                columns={columns}
                data={courses.data}
                isLoading={courses.loading || courses.data.length <= 0}
                editable={{
                    onRowAdd: addCourse,
                    onRowUpdate: (newData, oldData) => updateCourse(newData, oldData),
                    onRowDelete: deleteCourse
                }}
            />
        </Card>
    )
}
