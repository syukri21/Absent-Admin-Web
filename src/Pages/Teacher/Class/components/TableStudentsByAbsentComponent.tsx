import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import { useTable, useExpanded } from "react-table"

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
})

interface TableStudentsByAbsentComponentProps {
    columns: any
    data: any
}

export default function TableStudentsByAbsentComponent(props: TableStudentsByAbsentComponentProps) {
    const classes = useStyles()

    const { columns, data } = props

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        // visibleColumns,
        // state: { expanded },
    } = useTable(
        { columns, data },
        useExpanded // We can useExpanded to track the expanded state
        // for sub components too!
    )

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} {...getTableProps()} aria-label='simple table'>
                <TableHead>
                    {headerGroups.map((headerGroup) => (
                        <TableRow {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column: any) => {
                                return (
                                    <TableCell {...column.getHeaderProps()} {...column.customReactProps}>
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
                            <TableRow key={i} {...row.getRowProps()}>
                                {row.cells.map((cell: any) => {
                                    return (
                                        <TableCell {...cell.getCellProps()} {...cell.column.customReactProps}>
                                            {cell.render("Cell")}
                                        </TableCell>
                                    )
                                })}
                                {row.isExpanded ? <div>Expanded</div> : null}
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
