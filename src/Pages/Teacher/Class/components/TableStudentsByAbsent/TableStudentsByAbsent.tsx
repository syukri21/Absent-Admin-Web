import React from "react"
import dayjs from "dayjs"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import { Divider } from "@material-ui/core"

import TableStudentsByAbsentComponent from "./TableStudentsByAbsentComponent"
import useTableStudentsByAbsent from "./useTableStudentsByAbsent"

const defaultCustomProps = () => ({})
export default function TableStudentsByAbsent() {
    const { absent } = useTableStudentsByAbsent()

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

    const data = React.useMemo(() => absent.data, [absent.data])

    return (
        <Card>
            <CardHeader title='Absent' subheader={`${data.length} in total`} />
            <Divider />
            <TableStudentsByAbsentComponent columns={columns} data={data}></TableStudentsByAbsentComponent>
            <Divider />
        </Card>
    )
}
