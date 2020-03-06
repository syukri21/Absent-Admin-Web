import * as React from "react"
import useSignUpStyles from "./styles"

export interface SignUpProps {}

const SignUp: React.SFC<SignUpProps> = props => {
    const classes = useSignUpStyles()
    return <div>SignUp</div>
}

export default SignUp
