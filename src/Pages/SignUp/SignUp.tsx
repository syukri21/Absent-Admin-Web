import * as React from "react"
import { Grid, Typography, TextField, IconButton, Checkbox, Link, FormHelperText, Button } from "@material-ui/core"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import { Link as RouterLink } from "react-router-dom"

import useSignUpStyles from "./styles"
import useSignUp from "./handler"

export interface SignUpProps {}

const SignUp: React.SFC<SignUpProps> = props => {
    const classes = useSignUpStyles()
    const { formState, hasError, handleChange, handleSignUp, handleBack } = useSignUp()
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
                                    error={hasError("firstName")}
                                    fullWidth
                                    helperText={hasError("firstName") ? formState.errors.firstName[0] : null}
                                    label='First name'
                                    name='firstName'
                                    onChange={handleChange}
                                    type='text'
                                    value={formState.values.firstName || ""}
                                    variant='outlined'
                                />
                                <TextField
                                    className={classes.textField}
                                    error={hasError("lastName")}
                                    fullWidth
                                    helperText={hasError("lastName") ? formState.errors.lastName[0] : null}
                                    label='Last name'
                                    name='lastName'
                                    onChange={handleChange}
                                    type='text'
                                    value={formState.values.lastName || ""}
                                    variant='outlined'
                                />
                                <TextField
                                    className={classes.textField}
                                    error={hasError("email")}
                                    fullWidth
                                    helperText={hasError("email") ? formState.errors.email[0] : null}
                                    label='Email address'
                                    name='email'
                                    onChange={handleChange}
                                    type='text'
                                    value={formState.values.email || ""}
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
