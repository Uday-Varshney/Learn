const EventEmmit = require("events");

const event = new EventEmmit();

event.on("say", () => {
  console.log("Hello uday");
});
event.on("say", () => {
  console.log("Hello jii");
});
event.on("say", () => {
  console.log("Hello varshney");
});

event.emit("say");
