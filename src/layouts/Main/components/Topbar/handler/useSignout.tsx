import { handleLogout } from "../../../../../provider/Login"

export interface UseSignout {
    handleSignout: () => void
}

export default function useSignout(): UseSignout {
    function handleSignout() {
        handleLogout()
    }

    return { handleSignout }
}
