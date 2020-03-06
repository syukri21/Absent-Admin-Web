import * as React from "react"
import PerfectScrollbar from "react-perfect-scrollbar"
import {
    Card,
    CardActions,
    CardHeader,
    CardContent,
    Button,
    Divider,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tooltip,
    TableSortLabel
} from "@material-ui/core"

import orders from "./data"
import useStyles from "./styles"
import ArrowRightIcon from "@material-ui/icons/ArrowRight"
import dayjs from "dayjs"

/* -------------------------------------------------------------------------- */
/*                           TODO MAKE STATUSBULLET                           */
/* -------------------------------------------------------------------------- */

import StatusBullet from "../../../../components/StatusBullet"
import { Size } from "../../../../components/StatusBullet/StatusBullet"

const statusColors: any = {
    delivered: "success",
    pending: "info",
    refunded: "danger"
}

/* -------------------------------------------------------------------------- */

export interface LatestOrdersProps {}

const LatestOrders: React.SFC<LatestOrdersProps> = props => {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardHeader
                action={
                    <Button color='primary' size='small' variant='outlined'>
                        New entry
                    </Button>
                }
                title='Latest Orders'
            />
            <Divider />
            <CardContent className={classes.content}>
                <PerfectScrollbar>
                    <div className={classes.inner}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Order Ref</TableCell>
                                    <TableCell>Customer</TableCell>
                                    <TableCell sortDirection='desc'>
                                        <Tooltip enterDelay={300} title='Sort'>
                                            <TableSortLabel active direction='desc'>
                                                Date
                                            </TableSortLabel>
                                        </Tooltip>
                                    </TableCell>
                                    <TableCell>Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders.map(order => (
                                    <TableRow hover key={order.id}>
                                        <TableCell>{order.ref}</TableCell>
                                        <TableCell>{order.customer.name}</TableCell>
                                        <TableCell>{dayjs(order.createdAt).format("DD/MM/YYYY")}</TableCell>
                                        <TableCell>
                                            <div className={classes.statusContainer}>
                                                <StatusBullet className={classes.status} color={statusColors[order.status]} size={Size.sm} />
                                                {order.status}
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </PerfectScrollbar>
            </CardContent>
            <Divider />
            <CardActions className={classes.actions}>
                <Button color='primary' size='small' variant='text'>
                    View all <ArrowRightIcon />
                </Button>
            </CardActions>
        </Card>
    )
}

export default LatestOrders
