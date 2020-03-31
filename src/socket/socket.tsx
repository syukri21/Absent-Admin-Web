import io from "socket.io-client"

class SocketClient {
    private static instance: SocketClient | null = null
    private socket = io(process.env.REACT_APP_SOCKET_URL || "http://localhost:3000")

    private constructor() {}

    public static getInstance() {
        if (!SocketClient.instance) {
            SocketClient.instance = new SocketClient()
        }
        return SocketClient.instance
    }

    public onAbsent(userId: string, fn: Function) {
        this.socket.on(`absent.${userId}`, fn)
    }

    off(name: string) {
        this.socket.removeListener(name)
    }
}

export default SocketClient.getInstance()
