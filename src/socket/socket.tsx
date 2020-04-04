import io from "socket.io-client"
import Api from "../reactn/api/api"

class SocketClient {
    private static instance: SocketClient | null = null
    private socket: SocketIOClient.Socket | undefined

    private constructor() {
        if (!this.socket && process.env.REACT_APP_SOCKET_URL) {
            this.socket = io(process.env.REACT_APP_SOCKET_URL, {
                path: "/socket.io",
                transports: ["websocket"]
            })
        }
    }

    public static getInstance() {
        if (!SocketClient.instance) {
            SocketClient.instance = new SocketClient()
        }
        return SocketClient.instance
    }

    public onAbsent(scheduleId: string, fn: Function) {
        if (this.socket) {
            const token = Api.getToken()
            this.socket.on("onReconnect", () => {
                if (this.socket) this.socket.emit("/join", { name: `absent.${scheduleId}`, token })
            })
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
