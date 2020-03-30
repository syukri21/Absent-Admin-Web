class SocketClient {
    private static instance: SocketClient
    private SocketClientUrl: string | undefined = process.env.REACT_APP_SOCKET_URL
    private token?: string | null
    private socket = new WebSocket(this.SocketClientUrl || "")

    private constructor() {}

    public static getInstance(): SocketClient {
        if (!SocketClient.instance) {
            SocketClient.instance = new SocketClient()
        }

        return SocketClient.instance
    }

    public onOpen() {
        this.socket.onopen = e => {
            alert("[open] Connection established")
            alert("Sending to server")
            this.socket.send("My name is John")
        }
    }

    public onClose() {
        this.socket.onclose = event => {
            if (event.wasClean) {
                alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`)
            } else {
                // e.g. server process killed or network down
                // event.code is usually 1006 in this case
                alert("[close] Connection died")
            }
        }
    }

    public close() {
        this.socket.close()
    }

    public onError() {
        this.socket.onerror = (error: any) => {
            console.log("SocketClient -> onError -> error", error)

            alert(`[error] ${error.message}`)
        }
    }

    public getToken() {
        if (window) {
            const token = localStorage.getItem("token")
            if (token) this.token = token
        }
        return this.token
    }
}

export default SocketClient.getInstance()
