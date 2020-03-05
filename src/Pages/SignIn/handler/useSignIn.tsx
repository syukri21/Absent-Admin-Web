import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import validate from "validate.js"

const schema = {
    email: {
        presence: { allowEmpty: false, message: "is required" },
        email: true,
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

export interface FormState {
    isValid: boolean
    values: any
    touched: any
    errors: any
}

export interface UseSignIn {
    formState: FormState
    handleBack: () => void
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleSignIn: (event: React.FormEvent<HTMLFormElement>) => void
    hasError: (field: string) => boolean
}

export default function useSignIn(): UseSignIn {
    const history = useHistory()

    const [formState, setFormState] = useState<FormState>({
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

    const handleBack = () => {
        history.goBack()
    }

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

    const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        history.push("/")
    }

    const hasError = (field: string) => (formState.touched[field] && formState.errors[field] ? true : false)

    return { formState, hasError, handleBack, handleChange, handleSignIn }
}
