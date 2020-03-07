import { useGlobal } from "reactn"
export default function useProfile() {
    const [user] = useGlobal<any>("User")
    return { user }
}
