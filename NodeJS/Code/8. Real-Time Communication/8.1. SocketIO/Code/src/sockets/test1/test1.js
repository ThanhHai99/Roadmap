let test1 = (io) => {
    io.on("connection", (socket) => {
        
        socket.on("test-emit-1", (data) => {
            console.log(data);
            let dataSend = "====================test-on-1====================";
            socket.emit("test-on-1", { data: dataSend });
        });

        socket.on("disconnect", () => {
            console.log("disconnect");
        });

    });
};

module.exports = test1;
