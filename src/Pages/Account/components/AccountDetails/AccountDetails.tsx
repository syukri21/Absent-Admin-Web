import React, { useState } from "react"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import Divider from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import CardActions from "@material-ui/core/CardActions"

import useStyles from "./styles"
import useAccountDetails from "./useAccountDetails"

export interface AccountDetailsProps {}

const AccountDetails: React.SFC<AccountDetailsProps> = () => {
    const classes = useStyles()
    const { register, onSubmit, errors, states } = useAccountDetails()

    return (
        <Card className={classes.root}>
            <form autoComplete='off' noValidate onSubmit={onSubmit}>
                <CardHeader subheader='The information can be edited' title='Profile' />
                <Divider />
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                error={errors.fullname ? true : false}
                                // helperText='Please specify the first name'
                                label='Full Name'
                                margin='dense'
                                name='fullname'
                                required
                                inputRef={register}
                                // value={values.firstName}
                                variant='outlined'
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label='Nomor Induk Dosen'
                                margin='dense'
                                name='nid'
                                error={errors.nid ? true : false}
                                type='text'
                                required
                                inputRef={register}
                                // value={values.lastName}
                                variant='outlined'
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label='Email Address'
                                margin='dense'
                                name='email'
                                error={errors.email ? true : false}
                                required
                                inputRef={register}
                                // value={values.email}
                                variant='outlined'
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label='Phone Number'
                                margin='dense'
                                name='phone'
                                error={errors.phone ? true : false}
                                type='number'
                                required
                                inputRef={register}
                                // value={values.phone}
                                variant='outlined'
                            />
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <TextField
                                fullWidth
                                label='Negara'
                                margin='dense'
                                name='country'
                                inputRef={register}
                                error={errors.state ? true : false}
                                required
                                variant='outlined'
                            />
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <TextField
                                fullWidth
                                label='Provinsi'
                                margin='dense'
                                error={errors.state ? true : false}
                                name='state'
                                required
                                select
                                inputRef={register}
                                // eslint-disable-next-line react/jsx-sort-props
                                SelectProps={{ native: true }}
                                // value={values.state}
                                variant='outlined'
                            >
                                {states.map((option) => (
                                    <option key={option.id} value={option.name}>
                                        {option.name}
                                    </option>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item md={5} xs={12}>
                            <TextField
                                fullWidth
                                label='Kota'
                                margin='dense'
                                error={errors.city ? true : false}
                                name='city'
                                required
                                type='text'
                                inputRef={register}
                                // value={values.phone}
                                variant='outlined'
                            />
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider />
                <CardActions>
                    <Button color='primary' type='submit' variant='contained'>
                        Save details
                    </Button>
                </CardActions>
            </form>
        </Card>
    )
}

export default AccountDetails
