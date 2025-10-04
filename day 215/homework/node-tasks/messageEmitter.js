const EventEmitter = require("events");
const emitter = new EventEmitter();

// "message" ივენთი
emitter.on("message", (text) => {
  console.log("[NEW MESSAGE]:", text);
});

// არგუმენტები გადაეცემა .emit()-ში უბრალოდ პარამეტრების სახით
emitter.emit("message", "გამარჯობა");

/*
    .emit("eventName", arg1, arg2) — ასე ვაწვდით არგუმენტებს.
    შესაძლებელია ერთზე მეტი არგუმენტის გადაცემა.
*/
