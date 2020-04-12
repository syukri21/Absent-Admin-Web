import React from "react"
import MaterialTable, { Column, MTableToolbar, MTableActions } from "material-table"
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
import useGrades from "./useGrades"
import { ColorTheme } from "../../../../../theme/color"
import { StudentsEntity } from "../../../../../@types/GradesByScheduleId"

const columns: Array<Column<StudentsEntity>> = [
    { title: "Nama", field: "student.fullname" },
    { title: "NIM", field: "student.nim", cellStyle: { textAlign: "center" } },
    {
        title: "Absensi",
        field: "grade.attendance",
        type: "numeric",
        cellStyle: { textAlign: "center" },
        render: (data) => data.grade?.attendance || "- -",
    },
    {
        title: "Tugas",
        field: "grade.assignment",
        type: "numeric",
        cellStyle: { textAlign: "center" },
        render: (data) => data.grade?.assignment || "- -",
    },
    {
        title: "UTS",
        field: "grade.uts",
        type: "numeric",
        cellStyle: { textAlign: "center" },
        render: (data) => data.grade?.uts || "- -",
    },
    {
        title: "UAS",
        field: "grade.uas",
        type: "numeric",
        cellStyle: { textAlign: "center" },
        render: (data) => data.grade?.uas || "- -",
    },
    {
        title: "Nilai Bobot",
        field: "grade.weightValue",
        type: "numeric",
        cellStyle: { textAlign: "center" },
        render: (data) => data.grade?.weightValue || "- -",
    },
    { title: "Nilai Huruf", field: "grade.letterValue", type: "numeric", cellStyle: { textAlign: "center" } },
]

const options: any = {
    sorting: false,
    draggable: false,
    showEmptyDataSourceMessage: true,
    showTitle: false,
    actionsColumnIndex: -1,
    searchFieldAlignment: "left",
    paginationType: "stepped",
    addRowPosition: "first",
    padding: "dense",
    cellStyle: { whiteSpace: "nowrap" },
    pageSize: 10,
}

export default function TableGrades() {
    const { data, count, loading, limit, updateCourse } = useGrades()
    const classes = useStyles()
    return (
        <Card elevation={1} className={classes.root}>
            <Divider></Divider>
            <MaterialTable
                components={{
                    Container: Box,
                    Header: (copyProps) => {
                        return React.useMemo(() => {
                            return (
                                <TableHead>
                                    <TableRow hover>
                                        {copyProps.columns.map((column: any, index: any) => (
                                            <TableCell size='small' key={index} style={column.cellStyle}>
                                                {column.title}
                                            </TableCell>
                                        ))}
                                        <TableCell size='small' align='center'>
                                            Action
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                            )
                        }, [])
                    },
                    Actions: (copyProps) => {
                        return (
                            <Box margin='auto' display='flex'>
                                <MTableActions {...copyProps}></MTableActions>
                            </Box>
                        )
                    },
                    Toolbar: (copyProps) => (
                        <CardHeader subheader={`${count} in total`} title='Courses' action={<MTableToolbar {...copyProps}></MTableToolbar>} />
                    ),
                }}
                options={options}
                icons={React.useMemo(
                    () => ({
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
                        ResetSearch: React.forwardRef(() => <Clear />),
                    }),
                    []
                )}
                title='Courses'
                columns={columns}
                data={data}
                isLoading={loading || data.length <= 0}
                editable={{
                    onRowUpdate: (newData, oldData) => updateCourse(newData, oldData),
                }}
            />
        </Card>
    )
}
