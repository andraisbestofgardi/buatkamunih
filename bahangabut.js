const gombalButton = document.getElementById("gombal-button");
const gombalText = document.getElementById("gombal-text");

const gombalanList = [
    "Kamu itu seperti kopi, selalu bikin aku terjaga setiap hari.",
    "Aku nggak bisa hidup tanpa kamu, karena kamu adalah alasan aku tersenyum.",
    "Kamu adalah alasan aku percaya kalau cinta itu nyata.",
    "Kamu seperti bintang di langit, selalu bersinar terang dalam hidupku.",
    "Kalau aku jadi matematika, kamu adalah solusi dari semua masalahku."
];

gombalButton.addEventListener("click", () => {
    const randomGombal = gombalanList[Math.floor(Math.random() * gombalanList.length)];
    gombalText.textContent = randomGombal;
});
