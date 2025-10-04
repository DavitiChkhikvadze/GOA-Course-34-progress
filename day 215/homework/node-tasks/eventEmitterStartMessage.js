const EventEmitter = require("events");
const emitter = new EventEmitter();

// "start" ივენთი
emitter.on("start", () => {
  console.log("Program started ✅");
});

// "message" ივენთი
emitter.on("message", (text) => {
  console.log("Message:", text);
});

emitter.emit("start");
emitter.emit("message", "ეს არის პირველი მესიჯი!");
