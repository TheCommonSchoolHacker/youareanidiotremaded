var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12;

function RhythmFunc() {
  document.getElementById("audioHahaha").play(); // Play music

  setTimeout(function() { b1 = openWindow('assets/faceWhite/index.html', percToN(50, screenWidth), percToN(50, screenHeight)); }, 2900);
  setTimeout(function() { b2 = openWindow('assets/faceWhite/index.html', percToN(0, screenWidth), percToN(100, screenHeight)); }, 3136);
  setTimeout(function() { b3 = openWindow('assets/faceWhite/index.html', percToN(100, screenWidth), percToN(0, screenHeight)); }, 3506);
  setTimeout(function() { b4 = openWindow('assets/faceWhite/index.html', percToN(0, screenWidth), percToN(0, screenHeight)); }, 3861);
  setTimeout(function() { b5 = openWindow('assets/faceWhite/index.html', percToN(100, screenWidth), percToN(100, screenHeight)); }, 4290);
  setTimeout(function() { b5.close(); }, 4590);
  setTimeout(function() { b4.close(); }, 4900);
  setTimeout(function() { b3.close(); }, 5221);
  setTimeout(function() { b2.close(); }, 5500);
  setTimeout(function() { b1.close(); b1 = openWindow('assets/faceWhite/index.html', percToN(50, screenWidth) - 50, percToN(50, screenHeight) - 50, 300, 300); }, 5579);
  setTimeout(function() { b1.close(); b1 = openWindow('assets/faceWhite/index.html', percToN(50, screenWidth) - 100, percToN(50, screenHeight) - 100, 400, 400); }, 5940);
  setTimeout(function() { b1.close(); b1 = openWindow('assets/faceBlack/index.html', percToN(50, screenWidth) - 50, percToN(50, screenHeight) - 50, 300, 300); }, 6300);
  setTimeout(function() { b1.close(); b1 = openWindow('assets/faceBlack/index.html', percToN(50, screenWidth) - 100, percToN(50, screenHeight) - 100, 400, 400); }, 6617);
  setTimeout(function() { b1.close(); b1 = openWindow('assets/faceWhite/index.html', percToN(50, screenWidth) - 50, percToN(50, screenHeight) - 50, 300, 300); }, 7043);
  setTimeout(function() { b1.close(); b1 = openWindow('assets/faceWhite/index.html', percToN(50, screenWidth) - 100, percToN(50, screenHeight) - 100, 400, 400); }, 7373);
  setTimeout(function() { b1.close(); b1 = openWindow('assets/faceWhite/index.html', percToN(50, screenWidth) - 50, percToN(50, screenHeight) - 50, 300, 300); }, 7704);
  // Smile snake (12 faces)
  setTimeout(function() { b1.close(); b1 = openWindow('assets/faceWhite/index.html', percToN(10, screenWidth), percToN(15, screenHeight)); }, 7852);
  setTimeout(function() { b2  = openWindow('assets/faceWhite/index.html', percToN(30, screenWidth), percToN(15, screenHeight), 216, 216); }, 7900);
  setTimeout(function() { b3  = openWindow('assets/faceWhite/index.html', percToN(50, screenWidth), percToN(15, screenHeight), 240, 240); }, 7947);
  setTimeout(function() { b4  = openWindow('assets/faceWhite/index.html', percToN(70, screenWidth), percToN(15, screenHeight), 260, 260); }, 8035);
  setTimeout(function() { b5  = openWindow('assets/faceWhite/index.html', percToN(90, screenWidth), percToN(27, screenHeight), 280, 280); }, 8082);
  setTimeout(function() { b6  = openWindow('assets/faceWhite/index.html', percToN(60, screenWidth), percToN(43, screenHeight), 300, 300); }, 8135);
  setTimeout(function() { b7  = openWindow('assets/faceWhite/index.html', percToN(40, screenWidth), percToN(71, screenHeight), 316, 316); }, 8175);
  setTimeout(function() { b8  = openWindow('assets/faceWhite/index.html', percToN(0, screenWidth), percToN(100, screenHeight), 332, 332); }, 8216);
  setTimeout(function() { b9  = openWindow('assets/faceWhite/index.html', percToN(20, screenWidth), percToN(50, screenHeight), 348, 348); }, 8260);
  setTimeout(function() { b10 = openWindow('assets/faceWhite/index.html', percToN(30, screenWidth), percToN(8,  screenHeight), 364, 364); }, 8311);
  setTimeout(function() { b11 = openWindow('assets/faceWhite/index.html', percToN(50, screenWidth), percToN(5,  screenHeight), 380, 380); }, 8391);
  setTimeout(function() { b12 = openWindow('assets/faceWhite/index.html', percToN(25, screenWidth), percToN(12, screenHeight), 400, 400); }, 8410);
  setTimeout(function() { b12.close(); }, 8750);
  setTimeout(function() { b11.close(); }, 9086);
  setTimeout(function() { b10.close(); }, 9412);
  setTimeout(function() { b9.close(); }, 9723);
  setTimeout(function() { b8.close(); }, 10057);
  setTimeout(function() { b7.close(); }, 10419);
  setTimeout(function() { b6.close(); }, 10742);
  setTimeout(function() { b5.close(); }, 10935);
  setTimeout(function() { b4.close(); }, 11103);
  setTimeout(function() {
		moveWindowSlowlyTo(b3, percToN(25, screenWidth), percToN(50, screenHeight), 2000);
		moveWindowSlowlyTo(b2, percToN(50, screenWidth), percToN(50, screenHeight), 2000);
		moveWindowSlowlyTo(b1, percToN(75, screenWidth), percToN(50, screenHeight), 2000);
  }, 11200);
}
