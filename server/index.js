import express from "express";
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/events", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");

  const interval = setInterval(() => {
    res.write("data: teste\n\n"); // \n and data: is required to work
  }, 2000);

  req.on("close", () => {
    clearInterval(interval);
    res.end();
  });
});

app.listen(3000, () => console.log("SSE on http://localhost:3000/events"));
