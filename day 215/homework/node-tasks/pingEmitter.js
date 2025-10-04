const EventEmitter = require("events");
const emitter = new EventEmitter();

// .on() — იძახებს ყოველ ჯერზე
emitter.on("ping", () => {
  console.log("Ping received (on)");
});

// .once() — მხოლოდ 1-ჯერ იმუშავებს
emitter.once("ping", () => {
  console.log("Ping received (once)");
});

// გამოიძახება 3-ჯერ
emitter.emit("ping");
emitter.emit("ping");
emitter.emit("ping");
