import React from "react"
import dayjs from "dayjs"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import { Divider } from "@material-ui/core"

import TableStudentsByScheduleComponent from "./TableStudentsByScheduleComponent"
import useTableStudentsBySchedule from "./useTableStudentsBySchedule"

const defaultCustomProps = (a: any) => ({})
export default function TableStudentsBySchedule() {
    const { studentByScheduleId } = useTableStudentsBySchedule()

    const columns = React.useMemo(() => {
        return [
            {
                Header: "Nama",
                accessor: "student.fullname",
                customProps: defaultCustomProps,
            },
            {
                Header: "NIM",
                accessor: "student.nim",
                customProps: () => ({ align: "center" }),
            },
            {
                Header: "Waktu Absen",
                accessor: "Absent.absentTime",
                Cell: (cellProps: any) => {
                    const { cell } = cellProps
                    return cell.value ? dayjs(cell.value).format("DD MMMM YYYY, HH:mm:ss") : "- - - -"
                },
                customProps: () => ({
                    align: "center",
                    size: "small",
                    style: { width: "180px" },
                }),
            },
        ]
    }, [])

    const data = React.useMemo(() => studentByScheduleId.data, [studentByScheduleId.data])

    return (
        <Card>
            <CardHeader title='Absent' subheader={`${data.length} in total`} />
            <Divider />
            <TableStudentsByScheduleComponent columns={columns} data={data}></TableStudentsByScheduleComponent>
            <Divider />
        </Card>
    )
}
