import SocketClient from "./socket"
import User from "../provider/User"

const SocketAbsent = {
    listen: () => {
        const user = User.getGlobal()
        return SocketClient.onAbsent(user.data.id, (value: any) => {
            switch (value.type) {
                case "GENERATE_QRCODE":
                    console.log("value", value)
                    break
                default:
                    break
            }
        })
    },
    off: () => {
        const user = User.getGlobal()
        SocketClient.off(`absent.${user.data.id}`)
    }
}

export default SocketAbsent
