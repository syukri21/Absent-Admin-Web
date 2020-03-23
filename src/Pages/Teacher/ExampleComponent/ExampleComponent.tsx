import * as React from "react"
import useHomeStyles from "./styles"

export interface HomeProps {}

const Home: React.SFC<HomeProps> = props => {
    const classes = useHomeStyles()
    return <div>Home</div>
}

export default Home
