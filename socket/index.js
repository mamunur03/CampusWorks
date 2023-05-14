const io = require("socket.io")(8900, {
    cors: {
      origin: "http://localhost:3000",
    },
  });
  
  let users = [];
  
  const addUser = (userId, socketId) => {
    !users.some((user) => user.userId === userId) &&
      users.push({ userId, socketId });
  };
  
  const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId);
  };
  
  const getUser = (userId) => {
    return users.find((user) => user.userId === userId);
  };
  
  io.on("connection", (socket) => {
    try {
      //when connect
      console.log("a user connected.");
      
      socket.on("addUser", (userId) => {
        try {
          if (userId) {
            addUser(userId, socket.id);
          }
          io.emit("getUsers", users);
        } catch (error) {
          console.error(error);
          socket.emit("error", error.message);
        }
      });
  
      socket.on("sendMessage", ({ senderId, receiverId, text }) => {
        try {
          const user = getUser(receiverId);
          if (user) {
            io.to(user.socketId).emit("getMessage", {
              senderId,
              text,
            });
          } else {
            throw new Error(`User with ID ${receiverId} not found`);
          }
        } catch (error) {
          console.error(error);
          socket.emit("error", error.message);
        }
      });
  
      socket.on("disconnect", () => {
        console.log("a user disconnected!");
        removeUser(socket.id);
        io.emit("getUsers", users);
      });
    } catch (error) {
      console.error(error);
      socket.emit("error", error.message);
    }
  });
  