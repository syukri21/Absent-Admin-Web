import React from "react"

import TableStudentsByAbsentComponent from "./TableStudentsByAbsentComponent"
import useTableStudentsByAbsent from "./useTableStudentsByAbsent"
import dayjs from "dayjs"

const defaultCustomProps = () => ({})
export default function TableStudentsByAbsent() {
    const { absentByScheduleId } = useTableStudentsByAbsent()

    const columns = React.useMemo(() => {
        return [
            {
                Header: "Nama",
                accessor: "Student.fullname",
                customProps: defaultCustomProps,
                aggregate: "count",
                Aggregated: ({ value }: any) => `${value} Total Kehadiran`,
            },
            {
                Header: "NIM",
                accessor: "Student.nim",
                customProps: () => ({
                    align: "left",
                }),
            },
            {
                Header: "Pertemuan",
                accessor: "numberOfMeeting",
                id: "numberOfMeeting",
                customProps: ({ isGrouped }: any) => ({
                    align: isGrouped ? "left" : "center",
                    size: "small",
                    style: {
                        width: "10%",
                    },
                }),
            },
            {
                Header: "Absent Time",
                accessor: "absentTime",
                Cell: (cellProps: any) => {
                    const { cell } = cellProps
                    return dayjs(cell.value).format("DD MMMM YYYY, HH:mm:ss")
                },
                Aggregated: () => null,
                customProps: () => ({
                    align: "right",
                }),
            },
        ]
    }, [])

    const data = React.useMemo(() => absentByScheduleId.data.Absents || [], [absentByScheduleId.data])

    return <TableStudentsByAbsentComponent columns={columns} data={data}></TableStudentsByAbsentComponent>
}
