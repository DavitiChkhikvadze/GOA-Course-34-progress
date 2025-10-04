const EventEmitter = require("events");
const emitter = new EventEmitter();

/*
👉 .on()
- უსმენს ივენთს მუდმივად.
- რამდენჯერაც .emit() გამოიძახებ, იმდენჯერ გაეშვება listener-ი.
*/
emitter.on("ping", () => {
  console.log("Ping from on()");
});

/*
👉 .once()
- უსმენს ივენთს მხოლოდ ერთხელ.
- პირველ .emit()-ის შემდეგ listener ავტომატურად იხსნება.
*/
emitter.once("ping", () => {
  console.log("Ping from once()");
});

// გამოიძახოთ ping ივენთი 3-ჯერ
emitter.emit("ping"); // ორივე იმუშავებს (on და once)
emitter.emit("ping"); // იმუშავებს მხოლოდ .on()
emitter.emit("ping"); // ისევ იმუშავებს მხოლოდ .on()

/*
📌 შედეგი კონსოლში:
Ping from on()
Ping from once()
Ping from on()
Ping from on()
*/

