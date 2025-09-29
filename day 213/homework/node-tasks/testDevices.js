const { Door, Window, Light } = require("./devices");

const door = new Door();
const windowObj = new Window();
const light = new Light();

door.emit("open");
door.emit("open");
door.emit("close");
door.emit("close");

windowObj.emit("open");
windowObj.emit("close");
windowObj.emit("close");

light.emit("on");
light.emit("on");
light.emit("off");
light.emit("off");
