const connectBtn = document.getElementById("connectBtn");

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

  sse.onerror = (error) => {
    console.error("Connection error:", error);
  };
});
