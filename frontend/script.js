const button = document.createElement("button");
button.innerHTML = "💀"; 
button.classList.add("chatbot-btn"); 
button.onclick = function () {
    window.open("https://precious-alpaca-0deb53.netlify.app/", "_blank");
};
document.body.appendChild(button);
