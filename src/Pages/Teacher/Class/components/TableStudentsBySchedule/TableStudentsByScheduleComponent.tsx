import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import { useTable, useExpanded, useGroupBy } from "react-table"

import { CustomTheme } from "../../../../../theme/customTheme"

const useStyles = makeStyles((theme: CustomTheme) => ({
    table: {
        minWidth: 650,
    },
    cellExpanded: {
        background: theme.palette.grey[200],
        borderColor: theme.palette.grey[200],
        color: theme.palette.black,
    },
}))

interface TableStudentsByScheduleComponentProps {
    columns: any
    data: any
}

export default function TableStudentsByScheduleComponent(props: TableStudentsByScheduleComponentProps) {
    const classes = useStyles()

    const { columns, data } = props

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data })

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} {...getTableProps()} aria-label='simple table'>
                <TableHead>
                    {headerGroups.map((headerGroup) => (
                        <TableRow {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column: any) => {
                                return (
                                    <TableCell {...column.getHeaderProps()} {...column.customProps(column)}>
                                        {column.render("Header")}
                                    </TableCell>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody {...getTableBodyProps()}>
                    {rows.map((row: any, i) => {
                        prepareRow(row)
                        return (
                            <TableRow key={i} {...row.getRowProps()} hover>
                                {row.cells.map((cell: any) => {
                                    return (
                                        <TableCell
                                            {...cell.getCellProps()}
                                            {...cell.column.customProps(cell)}
                                            className={row.canExpand ? classes.cellExpanded : ""}
                                        >
                                            {cell.isAggregated ? cell.render("Aggregated") : cell.render("Cell")}
                                        </TableCell>
                                    )
                                })}
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
