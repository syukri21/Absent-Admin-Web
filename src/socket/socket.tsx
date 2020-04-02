import io from "socket.io-client"
import Api from "../reactn/api/api"

class SocketClient {
    private static instance: SocketClient | null = null
    private socket: SocketIOClient.Socket | undefined

    private constructor() {}

    public static getInstance() {
        if (!SocketClient.instance) {
            SocketClient.instance = new SocketClient()
        }
        return SocketClient.instance
    }

    public onAbsent(scheduleId: string, fn: Function) {
        if (!this.socket) {
            const token = Api.getToken()
            this.socket = io("http://localhost:3000", {
                path: "/socket.io",
                transports: ["websocket"]
            })
            this.socket.emit("/join", { name: `absent.${scheduleId}` })
            this.socket.on(`absent`, fn)
        }
    }

    off(name: string) {
        if (this.socket) {
            this.socket.removeAllListeners()
            this.socket.close()
            this.socket = undefined
        }
    }
}

export default SocketClient.getInstance()
