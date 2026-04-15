const msgs = [
    { text: "miw wiiiiw protocol activated 🐾", emoji: "🐈" },
    { text: "stop the glitching, drink water.", emoji: "✨" },
    { text: "certified Marwow moment detected", emoji: "🌟" },
    { text: "rebooting brain... please wait.", emoji: "🔄" },
        { text: "Cut the bs , come back on earth law sma7t.", emoji: "🔄" },
];

async function deployCat() {
    const idx = Math.floor(Math.random() * msgs.length);
    const textEl = document.getElementById("catMsgText");
    const imgEl = document.getElementById("catImage");

    textEl.textContent = "summoning cat...";

    try {
        const res = await fetch(
            "https://api.thecatapi.com/v1/images/search?mime_types=gif",
        );
        const data = await res.json();
        imgEl.src = data[0].url;
        imgEl.onload = () => {
            imgEl.classList.add("show");
            textEl.textContent = msgs[idx].text;
        };
    } catch (e) {
        textEl.textContent = "Connection failed, but I'm still here.";
    }
}