import User, { getUser } from "../../../../provider/User"
import { useEffect } from "reactn"

export default function useAccountProfiles() {
    const [user] = User.useGlobal()

    useEffect(() => {
        getUser()
    }, [])

    return {
        user: user.data,
    }
}
