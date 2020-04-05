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
import VisibilityIcon from "@material-ui/icons/Visibility"
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff"

import { Button } from "@material-ui/core"
import { CustomTheme } from "./../../../../theme/customTheme"

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

interface TableStudentsByAbsentComponentProps {
    columns: any
    data: any
}

function useControlledState(state: any, { instance }: any) {
    return React.useMemo(() => {
        if (state.groupBy.length) {
            return {
                ...state,
                hiddenColumns: [...state.hiddenColumns, ...state.groupBy].filter((d, i, all) => all.indexOf(d) === i),
            }
        }
        return state
    }, [state])
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
        //
        { columns, data },
        useGroupBy,
        useExpanded,
        (hooks) => {
            hooks.useControlledState.push(useControlledState)
            hooks.visibleColumns.push((columns: any, { instance }: any) => {
                if (!instance.state.groupBy.length) {
                    return columns
                }

                return [
                    {
                        id: "expander", // Make sure it has an ID
                        // Build our expander column
                        Header: ({ allColumns, state: { groupBy } }: any) => {
                            return groupBy.map((columnId: any) => {
                                const column = allColumns.find((d: any) => d.id === columnId)
                                return <span {...column.getHeaderProps()}>{column.render("Header")} </span>
                            })
                        },
                        Cell: (cellProps: any) => {
                            const { row } = cellProps
                            if (row.canExpand) {
                                const groupedCell = row.allCells.find((d: any) => d.isGrouped)

                                return (
                                    <Button
                                        {...row.getToggleRowExpandedProps({})}
                                        color='textPrimary'
                                        size='small'
                                        endIcon={row.isExpanded ? <VisibilityOffIcon></VisibilityOffIcon> : <VisibilityIcon></VisibilityIcon>}
                                    >
                                        {groupedCell.render("Cell")}
                                    </Button>
                                )
                            }

                            return null
                        },
                        customProps: (data: any) => columns[0].customProps(data),
                    },
                    ...columns,
                ]
            })
        }
    )

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} {...getTableProps()} aria-label='simple table'>
                <TableHead>
                    {headerGroups.map((headerGroup) => (
                        <TableRow {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column: any) => {
                                const getGroupByToggleProps = column.id === "numberOfMeeting" ? column.getGroupByToggleProps() : {}
                                return (
                                    <TableCell {...column.getHeaderProps()} {...column.customProps(column)} {...getGroupByToggleProps}>
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
                        console.log("row", row)
                        return (
                            <TableRow key={i} {...row.getRowProps()}>
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
