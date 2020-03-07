import React, { useState } from "react"
import clsx from "clsx"

import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Button,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    IconButton
} from "@material-ui/core"
import ArrowRightIcon from "@material-ui/icons/ArrowRight"
import MoreVertIcon from "@material-ui/icons/MoreVert"

import useStyles from "./styles"
import mockData from "./data"

export interface NextLectureProps {
    className?: string
}

const NextLecture: React.SFC<NextLectureProps> = props => {
    const classes = useStyles()
    const { className } = props
    const [products] = useState(mockData)

    return (
        <Card className={clsx(classes.root, className)}>
            <CardHeader subheader={`${products.length} in total`} title='Latest products' />
            <Divider />
            <CardContent className={classes.content}>
                <List>
                    {products.map((product, i) => (
                        <ListItem divider={i < products.length - 1} key={product.id}>
                            <ListItemAvatar>
                                <img alt='Product' className={classes.image} src={product.imageUrl} />
                            </ListItemAvatar>
                            <ListItemText primary={product.name} secondary={`Updated ${product.updatedAt.fromNow()}`} />
                            <IconButton edge='end' size='small'>
                                <MoreVertIcon />
                            </IconButton>
                        </ListItem>
                    ))}
                </List>
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

export default NextLecture
