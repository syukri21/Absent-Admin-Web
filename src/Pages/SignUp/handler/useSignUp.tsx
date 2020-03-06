import { IFormState } from "../../SignIn/handler/useSignIn"
import { useHistory } from "react-router-dom"
import { useState, useEffect } from "react"
import validate from "validate.js"

const schema = {
    firstName: {
        presence: { allowEmpty: false, message: "is required" },
        length: {
            maximum: 32
        }
    },
    lastName: {
        presence: { allowEmpty: false, message: "is required" },
        length: {
            maximum: 32
        }
    },
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

    useEffect(() => {
        const errors = validate(formState.values, schema)

        setFormState(formState => ({
            ...formState,
            isValid: errors ? false : true,
            errors: errors || {}
        }))
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
        history.push("/")
    }

    const hasError = (field: string) => (formState.touched[field] && formState.errors[field] ? true : false)

    return { formState, handleBack, handleChange, handleSignUp, hasError }
}
