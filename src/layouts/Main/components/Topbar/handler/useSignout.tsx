import UserService from "../../../../../reactn/service/UserService"

export interface UseSignout {
    handleSignout: () => void
}

export default function useSignout(): UseSignout {
    function handleSignout() {
        UserService.handleLogout()
    }

    return { handleSignout }
}
