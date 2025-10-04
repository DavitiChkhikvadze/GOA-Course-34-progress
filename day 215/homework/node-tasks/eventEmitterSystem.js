const EventEmitter = require("events");
const emitter = new EventEmitter();

// "start" — ბეჭდავს "System started"
emitter.on("start", () => {
  console.log("System started");
});

// "data" — ამოწმებს ლუწია თუ კენტი
emitter.on("data", (num) => {
  if (num % 2 === 0) {
    console.log(num, "ლუწია");
  } else {
    console.log(num, "კენტია");
  }
});

// "end" — ასრულებს პროცესს
emitter.on("end", () => {
  console.log("System ended");
  process.exit();
});

emitter.emit("start");
emitter.emit("data", 7);
emitter.emit("data", 12);
emitter.emit("end");
