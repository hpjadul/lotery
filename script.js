document.getElementById("shuffleButton").addEventListener("click", function() {
  const input = document.getElementById("numberInput").value.trim();
  if (input === "") {
    alert("Masukkan nomor peserta terlebih dahulu!");
    return;
  }

  const numbers = input.split(",").map(num => num.trim());
  const randomIndex = Math.floor(Math.random() * numbers.length);
  const winner = numbers[randomIndex];

  document.getElementById("winner").textContent = winner;
});
