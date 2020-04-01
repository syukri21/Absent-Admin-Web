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

    public onAbsent(userId: string, fn: Function) {
        const token = Api.getToken()
        this.socket = io("http://localhost:3000", {
            path: "/socket.io",
            autoConnect: false,
            query: {
                token,
                protected: "teacher",
                room: `absent.${userId}`
            }
        })
        this.socket.open()
        this.socket.on(`absent`, fn)
    }

    off(name: string) {
        if (this.socket) this.socket.removeAllListeners()
    }
}

export default SocketClient.getInstance()
