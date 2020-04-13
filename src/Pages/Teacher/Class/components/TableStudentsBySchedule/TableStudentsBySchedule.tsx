import React from "react"
import dayjs from "dayjs"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import { Divider } from "@material-ui/core"
import CardActions from "@material-ui/core/CardActions"
import Pagination from "@material-ui/lab/Pagination"

import TableStudentsByScheduleComponent from "./TableStudentsByScheduleComponent"
import useTableStudentsBySchedule from "./useTableStudentsBySchedule"

const defaultCustomProps = (a: any) => ({})
export default function TableStudentsBySchedule() {
    const { studentByScheduleId, activeSchdule, handleChangePagination, offset } = useTableStudentsBySchedule()

    const columns = React.useMemo(() => {
        return [
            {
                Header: "No",
                Cell: (cellProps: any): number => cellProps.row.index + offset + 1,
                customProps: (a: any) => ({ align: "center", size: "small", style: { width: "60px" } }),
            },
            {
                Header: "Nama",
                accessor: "student.fullname",
                customProps: () => ({
                    align: "left",
                    size: "small",
                    style: { maxWidth: "100px" },
                }),
            },
            {
                Header: "NIM",
                accessor: "student.nim",
                customProps: () => ({ align: "left" }),
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
                    style: { maxWidth: "100px" },
                }),
            },
        ]
    }, [offset])

    const data = React.useMemo(() => studentByScheduleId.data.students, [studentByScheduleId.data])
    const count = React.useMemo(() => Math.round(studentByScheduleId.data.count / 10), [studentByScheduleId.data.count])
    return (
        <Card>
            <CardHeader title={`Pertemuan ${activeSchdule.data.numberOfMeeting || ""}`} subheader={`${studentByScheduleId.data.count} in total`} />
            <Divider />
            <TableStudentsByScheduleComponent columns={columns} data={data}></TableStudentsByScheduleComponent>

            <Divider />
            <CardActions>
                <Pagination count={count} color='secondary' onChange={handleChangePagination} />
            </CardActions>
        </Card>
    )
}
