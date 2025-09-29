const EventEmitter = require("events");

class ChatEmitter extends EventEmitter {
  constructor() {
    super();
    this.members = [];
    this.history = []; 


    this.on("join", (user) => {
      if (this.members.includes(user)) {
        console.log(`${user} უკვე ჩატშია`);
        return;
      }
      this.members.push(user);
      console.log(`${user} joined the chat`);
    });

    this.on("leave", (user) => {
      if (!this.members.includes(user)) {
        console.log(`${user} ვერ მოიძებნა ჩატში`);
        return;
      }
      this.members = this.members.filter((u) => u !== user);
      console.log(`${user} left the chat`);
    });

    this.on("members", () => {
      if (this.members.length === 0) {
        console.log("ჩატში ამჟამად არავინაა 🚫");
      } else {
        console.log("👥 ჩატში არიან:");
        this.members.forEach((u, i) => console.log(`${i + 1}. ${u}`));
      }
    });

    this.on("message", (user, msg) => {
      if (!this.members.includes(user)) {
        console.log(`❌ ${user} ვერ აგზავნის მესიჯს, რადგან ჩატში არ არის`);
        return;
      }
      const formatted = `${user}: ${msg}`;
      console.log(formatted);
      this.history.push(formatted);
    });

    this.on("history", () => {
      if (this.history.length === 0) {
        console.log("💬 მესიჯების ისტორია ცარიელია");
      } else {
        console.log("💬 მესიჯების ისტორია:");
        this.history.forEach((m) => console.log(m));
      }
    });
  }
}

module.exports = ChatEmitter;
