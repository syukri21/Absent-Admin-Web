import User from "../../../../../../../provider/User"

export default function useProfile() {
    const [user] = User.useGlobal()
    return { user }
}
