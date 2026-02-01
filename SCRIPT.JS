const socket = io();

function sendMessage() {
   const username = document.getElementById("username").value;

socket.emit("chat message", {
    user: username,
    message: input.value
}); 
}

socket.on("chat message", (msg) => {
    const messages = document.getElementById("messages");
    const p = document.createElement("p");
    p.textContent = msg.user + ": " + msg.message;
    messages.appendChild(p);
});
