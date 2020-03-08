import { useGlobal, useDispatch } from "reactn"

export interface UseGlobalSnackbar {
    isOpen: boolean
    data: any
    handleClose: () => void
}

export default function useGlobalSnackbar(): UseGlobalSnackbar {
    const [globalSnackbar] = useGlobal("GlobalSnackbar")
    const toggleGlobalSnackbar = useDispatch("showGlobalSnackbar")

    function handleClose() {
        toggleGlobalSnackbar("HIDE")
    }

    return { ...globalSnackbar, handleClose }
}
