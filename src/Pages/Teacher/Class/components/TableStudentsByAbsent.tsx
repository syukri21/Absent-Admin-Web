import React from "react"

import TableStudentsByAbsentComponent from "./Table"
import useTableStudentsByAbsent from "./useTableStudentsByAbsent"
import dayjs from "dayjs"

export default function TableStudentsByAbsent() {
    const { absentByScheduleId } = useTableStudentsByAbsent()

    const columns = React.useMemo(
        () => [
            {
                Header: () => null,
                id: "expander",
                Cell: ({ row }: any) => <span {...row.getToggleRowExpandedProps()}>{row.isExpanded ? "👇" : "👉"}</span>,
            },
            {
                Header: "Nama",
                accessor: "Student.fullname", // accessor is the "key" in the data
            },
            {
                Header: "NIM",
                accessor: "Student.nim",
            },
            {
                Header: "Absent Time",
                accessor: "absentTime",
                Cell: (cellProps: any) => {
                    const { cell } = cellProps
                    return dayjs(cell.value).format("DD MMMM YYYY, HH:mm:ss")
                },
                customReactProps: {
                    align: "right",
                },
            },
        ],
        []
    )

    const data = React.useMemo(() => absentByScheduleId.data.Absents || [], [absentByScheduleId.data])

    return <TableStudentsByAbsentComponent columns={columns} data={data}></TableStudentsByAbsentComponent>
}
