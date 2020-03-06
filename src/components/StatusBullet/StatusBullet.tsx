import React from "react"
import clsx from "clsx"
import useStyles from "./styles"

export enum Color {
    "neutral",
    "primary",
    "info",
    "success",
    "warning",
    "danger"
}

export enum Size {
    sm = "sm",
    md = "md",
    lg = "lg"
}

export interface StatusBulletProps {
    className?: string
    size?: Size
    color?: Color
}

const StatusBullet: React.SFC<StatusBulletProps> = props => {
    const { className, size = "md", color = "default" } = props

    const classes: any = useStyles()

    return (
        <span
            className={clsx(
                {
                    [classes.root]: true,
                    [classes[size]]: size,
                    [classes[color]]: color
                },
                className
            )}
        />
    )
}

export default StatusBullet
