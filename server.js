const io = require("socket.io")(8000, {
    cors: {
        origin: "http://localhost:3000",
    },
})

io.on("connect", (socket) => {
    console.log("connected to live server");
})