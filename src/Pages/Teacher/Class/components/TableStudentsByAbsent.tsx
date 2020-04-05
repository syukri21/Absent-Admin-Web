import React from "react"

import TableStudentsByAbsentComponent from "./TableStudentsByAbsentComponent"
import useTableStudentsByAbsent from "./useTableStudentsByAbsent"
import dayjs from "dayjs"

export default function TableStudentsByAbsent() {
    const { absentByScheduleId } = useTableStudentsByAbsent()

    const columns = React.useMemo(() => {
        return [
            {
                Header: "No",
                accessor: null,
                Cell: ({ row }: any) => row.index + 1,
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
        ]
    }, [])

    const data = React.useMemo(() => absentByScheduleId.data.Absents || [], [absentByScheduleId.data])

    return <TableStudentsByAbsentComponent columns={columns} data={data}></TableStudentsByAbsentComponent>
}
