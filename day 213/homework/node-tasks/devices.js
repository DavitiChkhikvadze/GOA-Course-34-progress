const EventEmitter = require("events");

class Door extends EventEmitter {
  constructor() {
    super();
    this.isDoorOpen = false;

    this.on("open", () => {
      if (this.isDoorOpen) {
        console.log("🚪 კარი უკვე ღიაა");
        return;
      }
      this.isDoorOpen = true;
      console.log("🚪 კარი გაიხსნა");
    });

    this.on("close", () => {
      if (!this.isDoorOpen) {
        console.log("🚪 კარი უკვე დახურულია");
        return;
      }
      this.isDoorOpen = false;
      console.log("🚪 კარი დაიხურა");
    });
  }
}

class Window extends EventEmitter {
  constructor() {
    super();
    this.isWindowOpen = false;

    this.on("open", () => {
      if (this.isWindowOpen) {
        console.log("🪟 ფანჯარა უკვე ღიაა");
        return;
      }
      this.isWindowOpen = true;
      console.log("🪟 ფანჯარა გაიხსნა");
    });

    this.on("close", () => {
      if (!this.isWindowOpen) {
        console.log("🪟 ფანჯარა უკვე დახურულია");
        return;
      }
      this.isWindowOpen = false;
      console.log("🪟 ფანჯარა დაიკეტა");
    });
  }
}

class Light extends EventEmitter {
  constructor() {
    super();
    this.isLightOn = false;

    this.on("on", () => {
      if (this.isLightOn) {
        console.log("💡 ნათურა უკვე ანთებულია");
        return;
      }
      this.isLightOn = true;
      console.log("💡 ნათურა ჩაირთო");
    });

    this.on("off", () => {
      if (!this.isLightOn) {
        console.log("💡 ნათურა უკვე ჩამქრალია");
        return;
      }
      this.isLightOn = false;
      console.log("💡 ნათურა ჩამქრა");
    });
  }
}

module.exports = { Door, Window, Light };
