import { IFormState } from "../../SignIn/handler/useSignIn"
import { useHistory } from "react-router-dom"
import { useState, useEffect } from "react"
import validate from "validate.js"
import UserService from "../../../reactn/service/UserService"

const schema = {
    username: {
        presence: { allowEmpty: false, message: "is required" },
        length: {
            maximum: 32
        }
    },
    fullname: {
        presence: { allowEmpty: false, message: "is required" },
        length: {
            maximum: 32
        }
    },
    password: {
        presence: { allowEmpty: false, message: "is required" },
        length: {
            maximum: 128
        }
    },
    confirmPassword: {
        presence: { allowEmpty: false, message: "is required" },
        equality: {
            attribute: "password",
            message: "Confirm password is not equal to password"
        }
    },
    policy: {
        presence: { allowEmpty: false, message: "is required" }
    }
}

export interface IUseSignUp {
    formState: IFormState
    handleBack: () => void
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleSignUp: (event: React.FormEvent<HTMLFormElement>) => void
    hasError: (field: string) => boolean
}

export default function(): IUseSignUp {
    const history = useHistory()

    const [formState, setFormState] = useState<IFormState>({
        isValid: false,
        values: {},
        touched: {},
        errors: {}
    })

    function validateErrors(touched = false) {
        const errors = validate(formState.values, schema)
        setFormState(formState => ({
            ...formState,
            isValid: errors ? false : true,
            errors: errors || {},
            touched: touched
                ? {
                      username: true,
                      fullname: true,
                      password: true,
                      confirmPassword: true,
                      policy: true
                  }
                : {}
        }))
    }

    useEffect(() => {
        validateErrors()
    }, [formState.values])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist()

        setFormState(formState => ({
            ...formState,
            values: {
                ...formState.values,
                [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
            },
            touched: {
                ...formState.touched,
                [event.target.name]: true
            }
        }))
    }

    const handleBack = () => {
        history.goBack()
    }

    const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const isValid = Object.keys(formState.errors).length === 0 && formState.errors.constructor === Object
        if (!isValid) {
            validateErrors(true)
        } else {
            UserService.handleRegister({
                fullname: formState.values.fullname,
                username: formState.values.username,
                password: formState.values.password
            }).then(() => {
                history.push("/")
            })
        }
    }

    const hasError = (field: string) => (formState.touched[field] && formState.errors[field] ? true : false)

    return { formState, handleBack, handleChange, handleSignUp, hasError }
}
