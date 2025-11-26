import express from "express";
const app = express();

app.get("/events", (req, res) => {
  res.send({ message: "ok" });
});

app.listen(3000, () => console.log("SSE on http://localhost:3000/events"));
