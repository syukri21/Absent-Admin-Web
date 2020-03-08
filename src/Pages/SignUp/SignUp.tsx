import * as React from "react"
import { Grid, Typography, TextField, IconButton, Checkbox, Link, FormHelperText, Button } from "@material-ui/core"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import { Link as RouterLink } from "react-router-dom"

import useStyles from "./styles"
import useSignUp from "./handler"

export interface SignUpProps {}

const SignUp: React.SFC<SignUpProps> = props => {
    const classes = useStyles()
    const { formState, hasError, handleChange, handleSignUp, handleBack } = useSignUp()
    console.log("hasError()", hasError("username"))

    return (
        <div className={classes.root}>
            <Grid className={classes.grid} container>
                <Grid className={classes.quoteContainer} item lg={5}>
                    <div className={classes.quote}>
                        <div className={classes.overlay}></div>
                    </div>
                </Grid>
                <Grid className={classes.content} item lg={7} xs={12}>
                    <div className={classes.content}>
                        <div className={classes.contentHeader}>
                            <IconButton onClick={handleBack}>
                                <ArrowBackIcon />
                            </IconButton>
                        </div>
                        <div className={classes.contentBody}>
                            <form className={classes.form} onSubmit={handleSignUp}>
                                <Typography className={classes.title} color='primary' variant='h2'>
                                    Create new account
                                </Typography>
                                <TextField
                                    className={classes.textField}
                                    error={hasError("username")}
                                    fullWidth
                                    helperText={hasError("username") ? formState.errors.username[0] : null}
                                    label='Username'
                                    name='username'
                                    onChange={handleChange}
                                    type='text'
                                    value={formState.values.username || ""}
                                    variant='outlined'
                                />
                                <TextField
                                    className={classes.textField}
                                    error={hasError("fullname")}
                                    fullWidth
                                    helperText={hasError("fullname") ? formState.errors.fullname[0] : null}
                                    label='Full name'
                                    name='fullname'
                                    onChange={handleChange}
                                    type='text'
                                    value={formState.values.fullname || ""}
                                    variant='outlined'
                                />
                                <TextField
                                    className={classes.textField}
                                    error={hasError("password")}
                                    fullWidth
                                    helperText={hasError("password") ? formState.errors.password[0] : null}
                                    label='Password'
                                    name='password'
                                    onChange={handleChange}
                                    type='password'
                                    value={formState.values.password || ""}
                                    variant='outlined'
                                />
                                <TextField
                                    className={classes.textField}
                                    error={hasError("confirmPassword")}
                                    fullWidth
                                    helperText={hasError("confirmPassword") ? formState.errors.confirmPassword[0] : null}
                                    label='Confirm Password'
                                    name='confirmPassword'
                                    onChange={handleChange}
                                    type='password'
                                    value={formState.values.confirmPassword || ""}
                                    variant='outlined'
                                />
                                <div className={classes.policy}>
                                    <Checkbox
                                        checked={formState.values.policy || false}
                                        className={classes.policyCheckbox}
                                        color='primary'
                                        name='policy'
                                        onChange={handleChange}
                                    />
                                    <Typography className={classes.policyText} color='textSecondary' variant='body1'>
                                        I have read the{" "}
                                        <Link color='primary' component={RouterLink} to='#' underline='always' variant='h6'>
                                            Terms and Conditions
                                        </Link>
                                    </Typography>
                                </div>
                                {hasError("policy") && <FormHelperText error>{formState.errors.policy[0]}</FormHelperText>}
                                <Button
                                    className={classes.signUpButton}
                                    color='primary'
                                    // disabled={!formState.isValid}
                                    fullWidth
                                    size='large'
                                    type='submit'
                                    variant='contained'
                                >
                                    Sign up now
                                </Button>
                                <Typography color='textSecondary' variant='body1'>
                                    Have an account?{" "}
                                    <Link component={RouterLink} to='/sign-in' variant='h6'>
                                        Sign in
                                    </Link>
                                </Typography>
                            </form>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default SignUp
