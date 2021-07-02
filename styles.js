
window.onload = function () {
  var can = document.getElementById('canvas'),
    spanProcent = document.getElementById('procent'),
    c = can.getContext('2d');
  var can2 = document.getElementById('canvas2'),
    spanProcent2 = document.getElementById('procent2'),
    c2 = can2.getContext('2d');

  var posX = can.width / 2,
    posY = can.height / 2,
    posX2 = can2.width / 2,
    posY2 = can2.height / 2,
    fps = 1000 / 200,
    procent = 0,
    procent2 = 0,
    oneProcent = 360 / 100,
    result = oneProcent * 50,
    oneProcent2 = 360 / 100,
    result2 = oneProcent2 * 100;

  c.lineCap = 'round';
  c2.lineCap = 'round2';
  arcMove();

  function arcMove() {
    var deegres = 0;
    var acrInterval = setInterval(function () {
      deegres += 1;
      c.clearRect(0, 0, can.width, can.height);
      procent = deegres / oneProcent;

      spanProcent.innerHTML = procent.toFixed();

      c.beginPath();
      c.arc(posX, posY, 70, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + 360));
      c.strokeStyle = '#b1b1b1';
      c.lineWidth = '1';
      c.stroke();

      c.beginPath();
      c.strokeStyle = '#3949AB';
      c.lineWidth = '1';
      c.arc(posX, posY, 70, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + deegres));
      c.stroke();
      if (deegres >= result) clearInterval(acrInterval);
    }, fps);


    var acrInterval2 = setInterval(function () {
      deegres += 1;
      c2.clearRect(0, 0, can2.width, can2.height);
      procent2 = deegres / oneProcent2;

      spanProcent2.innerHTML = procent2.toFixed();

      c2.beginPath();
      c2.arc(posX2, posY2, 70, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + 360));
      c2.strokeStyle = '#b1b1b1';
      c2.lineWidth = '1';
      c2.stroke();

      c2.beginPath();
      c2.strokeStyle = '#3949AB';
      c2.lineWidth = '1';
      c2.arc(posX2, posY2, 70, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + deegres));
      c2.stroke();
      if (deegres >= result2) clearInterval(acrInterval2);
    }, fps);

  }


}