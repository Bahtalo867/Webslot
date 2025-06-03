const symbols = ["🍒", "🍋", "⭐", "🍉", "🔔", "7️⃣"];

function spin() {
  for (let i = 1; i <= 5; i++) {
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    document.getElementById("reel" + i).textContent = symbol;
  }
}
