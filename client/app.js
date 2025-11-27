const connectBtn = document.getElementById("connectBtn");

connectBtn.addEventListener("click", async () => {
  try {
    const response = await fetch("http://localhost:3000/events");

    console.log(response);
  } catch (error) {
    console.log(error);
  }
});
