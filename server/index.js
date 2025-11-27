import express from "express";
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/events", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");

  setInterval(res.write(`data: ${new Date().toISOString()}`), 1000);
});

app.listen(3000, () => console.log("SSE on http://localhost:3000/events"));
