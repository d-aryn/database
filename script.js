const prizes = [
  "5% скидка",
  "10% скидка",
  "Подарок",
  "20% скидка",
  "Попробуй ещё",
  "ПРИЗ"
];

// 👇 индекс нужного варианта
const targetIndex = 5;

let rotation = 0;

function spin() {
  const anglePerSegment = 360 / prizes.length;
  const fullSpins = 6 * 360;

  const stopAngle =
    fullSpins +
    (360 - (targetIndex * anglePerSegment + anglePerSegment / 2));

  rotation += stopAngle;

  document.getElementById("wheel").style.transform =
    `rotate(${rotation}deg)`;

  setTimeout(() => {
    alert("Вы выиграли: " + prizes[targetIndex]);
  }, 5000);
}
