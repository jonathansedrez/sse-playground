const connectBtn = document.getElementById("connectBtn");
const disconnectBtn = document.getElementById("disconnectBtn");

let sse;

connectBtn.addEventListener("click", () => {
  if (sse) return;

  sse = new EventSource("http://localhost:3000/events");

  sse.onopen = () => {
    console.log("Connection opened");
  };

  sse.onmessage = (event) => {
    console.log("event", event);
  };

  sse.close;

  sse.onerror = (error) => {
    console.error("Connection error:", error);
  };
});

disconnectBtn.addEventListener("click", () => {
  debugger;
  if (!sse) return;
  console.log("Connection closed");
  sse.close();
});
