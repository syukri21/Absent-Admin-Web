import { useForm } from "react-hook-form"
import * as Yup from "yup"
import csc from "country-state-city"
import { useMemo, useEffect, useState } from "react"
import User, { getUser } from "../../../../provider/User"
import { handleTeacherEdit } from "../../../../provider/TeacherEdit"

const schema = Yup.object().shape({
    fullname: Yup.string().required(),
    nid: Yup.string().required(),
    email: Yup.string().email().required(),
    phone: Yup.string().required(),
    country: Yup.string().required(),
    city: Yup.string().required(),
    state: Yup.string().required(),
})

export default function useAccountDetails() {
    const [user] = User.useGlobal()
    const [isReady, setIsReady] = useState(false)

    const { register, handleSubmit, errors, setValue, watch } = useForm({
        defaultValues: {
            country: "Indonesia",
            fullname: "",
            nid: "",
            phone: "",
            city: "",
            state: "",
            email: "",
        },
        validationSchema: schema,
    })

    useEffect(() => {
        if (user.data.ID) {
            setValue("fullname", user.data.fullname)
            setValue("nid", user.data.nid)
            setValue("city", user.data.city)
            setValue("phone", user.data.phone)
            setValue("state", user.data.state)
            setValue("country", "Indonesia")
            setValue("email", user.data.email)
        }
    }, [user.data, setValue])

    const states = useMemo(() => csc.getStatesOfCountry("102"), [])

    const onSubmit = handleSubmit((value) => {
        handleTeacherEdit(value).then(() => {
            getUser()
        })
    })

    return { register, errors, onSubmit, states, isReady }
}
