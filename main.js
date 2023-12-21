// Get canvas and context
const cnv = document.getElementById("gameCanvas");
const ctx = cnv.getContext("2d");

// Fit the canvas to the window size
cnv.width = window.innerWidth;
cnv.height = window.innerHeight;

let gdspd = [1.45, 2.46, 4.18, 7.1, 12.08];
let gdset = 1;

let mouseX;
let mouseY;
let score = 0;

let degrees = Math.PI / 180;

let me = 0;
let yu = 1;
let meme = 255;
let itt;
let wut = [2.5, 2.6, 2.7, 2.8, 2.9];
function randomDec(low, high) {
  return Math.random() * (high - low) + low;
}

// Return a random integer b/t low (inclusive) and high (exclusive)
function randomInt(low, high) {
  return Math.floor(randomDec(low, high));
}

// Return a random rgb color- 'rgb(__, __, __)'
function randomRGB() {
  return `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(
    0,
    255
  )})`;
}

// Global Variables
let rects = [];
rects.push(
  newRect(
    Math.random() * 1183 + 50,
    Math.random() * 778 + 50,
    Math.random() * 80 + 20,
    Math.random() * 80 + 20,
    Math.random() * 14 - 7,
    Math.random() * 14 - 7
  )
);
rects.push(
  newRect(
    Math.random() * 1183 + 50,
    Math.random() * 778 + 50,
    Math.random() * 80 + 20,
    Math.random() * 80 + 20,
    Math.random() * 14 - 7,
    Math.random() * 14 - 7
  )
);
rects.push(
  newRect(
    Math.random() * 1183 + 50,
    Math.random() * 778 + 50,
    Math.random() * 80 + 20,
    Math.random() * 80 + 20,
    Math.random() * 14 - 7,
    Math.random() * 14 - 7
  )
);
rects.push(
  newRect(
    Math.random() * 1183 + 50,
    Math.random() * 778 + 50,
    Math.random() * 80 + 20,
    Math.random() * 80 + 20,
    Math.random() * 14 - 7,
    Math.random() * 14 - 7
  )
);
rects.push(
  newRect(
    Math.random() * 1183 + 50,
    Math.random() * 778 + 50,
    Math.random() * 80 + 20,
    Math.random() * 80 + 20,
    Math.random() * 14 - 7,
    Math.random() * 14 - 7
  )
);
rects.push(
  newRect(
    Math.random() * 1183 + 50,
    Math.random() * 778 + 50,
    Math.random() * 80 + 20,
    Math.random() * 80 + 20,
    Math.random() * 14 - 7,
    Math.random() * 14 - 7
  )
);
rects.push(
  newRect(
    Math.random() * 1183 + 50,
    Math.random() * 778 + 50,
    Math.random() * 80 + 20,
    Math.random() * 80 + 20,
    Math.random() * 14 - 7,
    Math.random() * 14 - 7
  )
);
rects.push(
  newRect(
    Math.random() * 1183 + 50,
    Math.random() * 778 + 50,
    Math.random() * 80 + 20,
    Math.random() * 80 + 20,
    Math.random() * 14 - 7,
    Math.random() * 14 - 7
  )
);
rects.push(
  newRect(
    Math.random() * 1183 + 50,
    Math.random() * 778 + 50,
    Math.random() * 80 + 20,
    Math.random() * 80 + 20,
    Math.random() * 14 - 7,
    Math.random() * 14 - 7
  )
);

let circles = [];
circles.push(
  newCircle(
    Math.random() * 1183 + 50,
    Math.random() * 778 + 50,
    Math.random() * 40 + 10,
    Math.random() * 14 - 7,
    Math.random() * 14 - 7
  )
);
circles.push(
  newCircle(
    Math.random() * 1183 + 50,
    Math.random() * 778 + 50,
    Math.random() * 40 + 10,
    Math.random() * 14 - 7,
    Math.random() * 14 - 7
  )
);
circles.push(
  newCircle(
    Math.random() * 1183 + 50,
    Math.random() * 778 + 50,
    Math.random() * 40 + 10,
    Math.random() * 14 - 7,
    Math.random() * 14 - 7
  )
);
circles.push(
  newCircle(
    Math.random() * 1183 + 50,
    Math.random() * 778 + 50,
    Math.random() * 40 + 10,
    Math.random() * 14 - 7,
    Math.random() * 14 - 7
  )
);
circles.push(
  newCircle(
    Math.random() * 1183 + 50,
    Math.random() * 778 + 50,
    Math.random() * 40 + 10,
    Math.random() * 14 - 7,
    Math.random() * 14 - 7
  )
);
circles.push(
  newCircle(
    Math.random() * 1183 + 50,
    Math.random() * 778 + 50,
    Math.random() * 40 + 10,
    Math.random() * 14 - 7,
    Math.random() * 14 - 7
  )
);
circles.push(
  newCircle(
    Math.random() * 1183 + 50,
    Math.random() * 778 + 50,
    Math.random() * 40 + 10,
    Math.random() * 14 - 7,
    Math.random() * 14 - 7
  )
);
circles.push(
  newCircle(
    Math.random() * 1183 + 50,
    Math.random() * 778 + 50,
    Math.random() * 40 + 10,
    Math.random() * 14 - 7,
    Math.random() * 14 - 7
  )
);
circles.push(
  newCircle(
    Math.random() * 1183 + 50,
    Math.random() * 778 + 50,
    Math.random() * 40 + 10,
    Math.random() * 14 - 7,
    Math.random() * 14 - 7
  )
);
circles.push(
  newCircle(
    Math.random() * 1183 + 50,
    Math.random() * 778 + 50,
    Math.random() * 40 + 10,
    Math.random() * 14 - 7,
    Math.random() * 14 - 7
  )
);
circles.push(
  newCircle(
    Math.random() * 1183 + 50,
    Math.random() * 778 + 50,
    Math.random() * 40 + 10,
    Math.random() * 14 - 7,
    Math.random() * 14 - 7
  )
);
circles.push(
  newCircle(
    Math.random() * 1183 + 50,
    Math.random() * 778 + 50,
    Math.random() * 40 + 10,
    Math.random() * 14 - 7,
    Math.random() * 14 - 7
  )
);

function changespd() {
  let rand = Math.random();
  if (rand < 1 / 10) {
    gdset = gdspd[randomInt(0, 4)];
  }
}

function reset() {
  score = 0;
  // Global Variables
  rects = [];
  rects.push(
    newRect(
      Math.random() * 1183 + 50,
      Math.random() * 778 + 50,
      Math.random() * 80 + 20,
      Math.random() * 80 + 20,
      Math.random() * 14 - 7,
      Math.random() * 14 - 7
    )
  );
  rects.push(
    newRect(
      Math.random() * 1183 + 50,
      Math.random() * 778 + 50,
      Math.random() * 80 + 20,
      Math.random() * 80 + 20,
      Math.random() * 14 - 7,
      Math.random() * 14 - 7
    )
  );
  rects.push(
    newRect(
      Math.random() * 1183 + 50,
      Math.random() * 778 + 50,
      Math.random() * 80 + 20,
      Math.random() * 80 + 20,
      Math.random() * 14 - 7,
      Math.random() * 14 - 7
    )
  );
  rects.push(
    newRect(
      Math.random() * 1183 + 50,
      Math.random() * 778 + 50,
      Math.random() * 80 + 20,
      Math.random() * 80 + 20,
      Math.random() * 14 - 7,
      Math.random() * 14 - 7
    )
  );
  rects.push(
    newRect(
      Math.random() * 1183 + 50,
      Math.random() * 778 + 50,
      Math.random() * 80 + 20,
      Math.random() * 80 + 20,
      Math.random() * 14 - 7,
      Math.random() * 14 - 7
    )
  );
  rects.push(
    newRect(
      Math.random() * 1183 + 50,
      Math.random() * 778 + 50,
      Math.random() * 80 + 20,
      Math.random() * 80 + 20,
      Math.random() * 14 - 7,
      Math.random() * 14 - 7
    )
  );
  rects.push(
    newRect(
      Math.random() * 1183 + 50,
      Math.random() * 778 + 50,
      Math.random() * 80 + 20,
      Math.random() * 80 + 20,
      Math.random() * 14 - 7,
      Math.random() * 14 - 7
    )
  );
  rects.push(
    newRect(
      Math.random() * 1183 + 50,
      Math.random() * 778 + 50,
      Math.random() * 80 + 20,
      Math.random() * 80 + 20,
      Math.random() * 14 - 7,
      Math.random() * 14 - 7
    )
  );
  rects.push(
    newRect(
      Math.random() * 1183 + 50,
      Math.random() * 778 + 50,
      Math.random() * 80 + 20,
      Math.random() * 80 + 20,
      Math.random() * 14 - 7,
      Math.random() * 14 - 7
    )
  );

  circles = [];
  circles.push(
    newCircle(
      Math.random() * 1183 + 50,
      Math.random() * 778 + 50,
      Math.random() * 40 + 10,
      Math.random() * 14 - 7,
      Math.random() * 14 - 7
    )
  );
  circles.push(
    newCircle(
      Math.random() * 1183 + 50,
      Math.random() * 778 + 50,
      Math.random() * 40 + 10,
      Math.random() * 14 - 7,
      Math.random() * 14 - 7
    )
  );
  circles.push(
    newCircle(
      Math.random() * 1183 + 50,
      Math.random() * 778 + 50,
      Math.random() * 40 + 10,
      Math.random() * 14 - 7,
      Math.random() * 14 - 7
    )
  );
  circles.push(
    newCircle(
      Math.random() * 1183 + 50,
      Math.random() * 778 + 50,
      Math.random() * 40 + 10,
      Math.random() * 14 - 7,
      Math.random() * 14 - 7
    )
  );
  circles.push(
    newCircle(
      Math.random() * 1183 + 50,
      Math.random() * 778 + 50,
      Math.random() * 40 + 10,
      Math.random() * 14 - 7,
      Math.random() * 14 - 7
    )
  );
  circles.push(
    newCircle(
      Math.random() * 1183 + 50,
      Math.random() * 778 + 50,
      Math.random() * 40 + 10,
      Math.random() * 14 - 7,
      Math.random() * 14 - 7
    )
  );
  circles.push(
    newCircle(
      Math.random() * 1183 + 50,
      Math.random() * 778 + 50,
      Math.random() * 40 + 10,
      Math.random() * 14 - 7,
      Math.random() * 14 - 7
    )
  );
  circles.push(
    newCircle(
      Math.random() * 1183 + 50,
      Math.random() * 778 + 50,
      Math.random() * 40 + 10,
      Math.random() * 14 - 7,
      Math.random() * 14 - 7
    )
  );
  circles.push(
    newCircle(
      Math.random() * 1183 + 50,
      Math.random() * 778 + 50,
      Math.random() * 40 + 10,
      Math.random() * 14 - 7,
      Math.random() * 14 - 7
    )
  );
  circles.push(
    newCircle(
      Math.random() * 1183 + 50,
      Math.random() * 778 + 50,
      Math.random() * 40 + 10,
      Math.random() * 14 - 7,
      Math.random() * 14 - 7
    )
  );
  circles.push(
    newCircle(
      Math.random() * 1183 + 50,
      Math.random() * 778 + 50,
      Math.random() * 40 + 10,
      Math.random() * 14 - 7,
      Math.random() * 14 - 7
    )
  );
  circles.push(
    newCircle(
      Math.random() * 1183 + 50,
      Math.random() * 778 + 50,
      Math.random() * 40 + 10,
      Math.random() * 14 - 7,
      Math.random() * 14 - 7
    )
  );
}

// Game loop
function gameLoop() {
  // Clear canvas
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Draw walls/circles
  drawflash();
  changespd();
  checkCol();
  drawCircles();
  drawRects();

  requestAnimationFrame(gameLoop);
}

// Start game loop
gameLoop();

function newCircle(x, y, r, spdx, spdy) {
  return {
    x: x,
    y: y,
    r: r,
    spdx: spdx,
    spdy: spdy,
  };
}
function newRect(x, y, w, h, spdx, spdy) {
  return {
    x: x,
    y: y,
    w: w,
    h: h,
    spdx: spdx,
    spdy: spdy,
  };
}

function drawCircles() {
  ctx.lineWidth = 6;
  ctx.strokeStyle = `rgb(0, ${meme}, 0)`;
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    if ((circle.spdx > -0.8) & (circle.spdx < 0.8)) {
      circle.spdx = circle.spdx * 1.1;
    }
    if ((circle.spdy > -0.8) & (circle.spdy < 0.8)) {
      circle.spdy = circle.spdy * 1.1;
    }
    if (circle.x + circle.r >= 1283) {
      if (circle.spdx > 0) {
        circle.spdx = circle.spdx * -1;
      }
    }
    if (circle.x - circle.r <= 0) {
      if (circle.spdx < 0) {
        circle.spdx = circle.spdx * -1;
      }
    }
    if (circle.y + circle.r >= 878) {
      if (circle.spdy > 0) {
        circle.spdy = circle.spdy * -1;
      }
    }
    if (circle.y - circle.r <= 0) {
      if (circle.spdy < 0) {
        circle.spdy = circle.spdy * -1;
      }
    }
    circle.x += circle.spdx * gdset;
    circle.y += circle.spdy * gdset;
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.r, 0, 360 * degrees);
    ctx.stroke();
  }
}

function drawRects() {
  ctx.strokeStyle = `rgb(${meme}, 0, 0)`;
  ctx.lineWidth = 6;
  for (let i = 0; i < rects.length; i++) {
    let rect = rects[i];
    if ((rect.spdx > -0.8) & (rect.spdx < 0.8)) {
      rect.spdx = rect.spdx * 1.1;
    }
    if ((rect.spdy > -0.8) & (rect.spdy < 0.8)) {
      rect.spdy = rect.spdy * 1.1;
    }
    if (rect.x + rect.w >= 1283) {
      if (rect.spdx > 0) {
        rect.spdx = rect.spdx * -1;
      }
    }
    if (rect.x <= 0) {
      if (rect.spdx < 0) {
        rect.spdx = rect.spdx * -1;
      }
    }
    if (rect.y + rect.h >= 878) {
      if (rect.spdy > 0) {
        rect.spdy = rect.spdy * -1;
      }
    }
    if (rect.y <= 0) {
      if (rect.spdy < 0) {
        rect.spdy = rect.spdy * -1;
      }
    }
    rect.x += rect.spdx * gdset;
    rect.y += rect.spdy * gdset;
    ctx.strokeRect(rect.x, rect.y, rect.w, rect.h);
  }
}

function checkCol() {
  let gmova = "nah";
  for (let i = 0; i < rects.length; i++) {
    let shmect = rects[i];
    if (ptInSquare(mouseX, mouseY, shmect.x, shmect.y, shmect.w, shmect.h)) {
      gmova = "yea";
    }
  }
  if (gmova == "yea") {
    alert("GAME OVER");
    reset();
  }
  for (let i = 0; i < circles.length; i++) {
    let shmircle = circles[i];
    if (ptInCircle(mouseX, mouseY, shmircle.x, shmircle.y, shmircle.r)) {
      circles.splice(i, 1);
      score += 1;
    }
  }
  if (score >= 12) {
    alert("YOU WIN");
  }
}

function drawflash() {
  determineuseless();
  console.log("yo, " + yu + " " + me);
  document.body.style.backgroundColor = `rgb(0, 0, ${me})`;
}

// Event Stuff
document.addEventListener("mousemove", mousemoveHandler);

function mousemoveHandler(e) {
  // Get rectangle info about canvas location
  let cnvRect = cnv.getBoundingClientRect();

  // Calc mouse coordinates using mouse event and canvas location info
  mouseX = Math.round(e.clientX - cnvRect.left);
  mouseY = Math.round(e.clientY - cnvRect.top);
}

function determineuseless() {
  me += yu * gdset;

  if (me >= 255) {
    itt = Math.round(randomInt(0, 4));
    yu = wut[itt];
    yu = yu * -1;
  }

  if (me <= 0) {
    itt = Math.round(randomInt(0, 4));
    yu = wut[itt];
  }
  meme = 255 - me;
}

function ptInCircle(x1, y1, x, y, r) {
  let xdist;
  let ydist;
  let dist;
  if (x1 >= x) {
    xdist = x1 - x;
  } else {
    xdist = x - x1;
  }
  if (y1 >= y) {
    ydist = y1 - y;
  } else {
    ydist = y - y1;
  }
  dist = Math.sqrt(xdist ** 2 + ydist ** 2);
  if (dist < r) {
    return true;
  } else {
    return false;
  }
}

function ptInSquare(x1, y1, x, y, w, h) {
  let colchunk = 0;
  if (x1 >= x) {
    colchunk += 1;
  }
  if (y1 >= y) {
    colchunk += 1;
  }
  if (x1 <= x + w) {
    colchunk += 1;
  }
  if (y1 <= y + h) {
    colchunk += 1;
  }
  if (colchunk == 4) {
    return true;
  } else {
    return false;
  }
}
