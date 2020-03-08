import { useState, useEffect } from "reactn"
import { useHistory } from "react-router-dom"
import validate from "validate.js"
import UserService from "../../../reactn/service/UserService"

const schema = {
    username: {
        presence: { allowEmpty: false, message: "is required" },
        length: {
            maximum: 64
        }
    },
    password: {
        presence: { allowEmpty: false, message: "is required" },
        length: {
            maximum: 128
        }
    }
}

export interface IFormState {
    isValid: boolean
    values: any
    touched: any
    errors: any
}

export interface IUseSignIn {
    formState: IFormState
    handleBack: () => void
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleSignIn: (event: React.FormEvent<HTMLFormElement>) => void
    hasError: (field: string) => boolean
}
export default function useSignIn(): IUseSignIn {
    /* ------------------------------- NAVIGATIONS ------------------------------ */
    const history = useHistory()

    const handleBack = () => {
        history.goBack()
    }

    const [formState, setFormState] = useState<IFormState>({
        isValid: false,
        values: {},
        touched: {},
        errors: {}
    })

    useEffect(() => {
        const errors = validate(formState.values, schema)
        setFormState((formState: any) => ({
            ...formState,
            isValid: errors ? false : true,
            errors: errors || {}
        }))
    }, [formState.values])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist()
        setFormState((formState: any) => ({
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

    const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            await UserService.handleLogin({
                username: formState.values.username,
                password: formState.values.password
            })
            await UserService.handleGetUser()
            history.push("/")
        } catch (err) {}
    }

    const hasError = (field: string) => (formState.touched[field] && formState.errors[field] ? true : false)

    return { formState, hasError, handleBack, handleChange, handleSignIn }
}
