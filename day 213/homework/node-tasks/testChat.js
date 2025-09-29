const ChatEmitter = require("./chat");

const chat = new ChatEmitter();

chat.emit("members");
chat.emit("join", "Alice");
chat.emit("join", "Bob");
chat.emit("join", "Alice");
chat.emit("members");

chat.emit("message", "Alice", "Hello everyone!");
chat.emit("message", "Tom", "Can I join?");
chat.emit("history");

chat.emit("leave", "Bob");
chat.emit("leave", "Tom");
chat.emit("members");
