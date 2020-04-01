import SocketClient from "./socket"
import { handleChangeTokenModalQRCode } from "../provider/ModalQRCode"

const SocketAbsent = {
    listen: (userId: string) => {
        return SocketClient.onAbsent(userId, (value: any) => {
            switch (value.type) {
                case "GENERATE_QRCODE":
                    handleChangeTokenModalQRCode(value.data.token)
                    break
                default:
                    break
            }
        })
    },
    off: (userId: string) => {
        SocketClient.off(`absent.${userId}`)
    }
}

export default SocketAbsent
