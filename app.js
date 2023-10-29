AOS.init();

function bubbles() {
  let count = 100;
  let section = document.querySelector("section.pic");
  let i = 0;
  while (i < count) {
    let bubble = document.createElement("i");
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    let size = Math.random() * 5;

    bubble.style.left = x + "px";
    bubble.style.top = y + "px";
    bubble.style.width = 1 + size + "px";
    bubble.style.height = 1 + size + "px";
    bubble.style.animationDuration = size + "s";
    // bubble.style.animationDelay = "5s";

    section.appendChild(bubble);
    i++;
  }
}
bubbles();

// Progress bar-------

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}

// window.onload = () => {
function click() {
  function move() {
    var i = 0;
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("Bar");
      var span = document.querySelector(".percentage");
      var width = 0;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 80) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          span.innerHTML = width + "%";
        }
      }
    }
  }
  function css() {
    var i = 0;
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("Bar-css");
      var span = document.querySelector(".e-css");
      var width = 0;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 55) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          span.innerHTML = width + "%";
        }
      }
    }
  }
  function script() {
    var i = 0;
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("Bar-script");
      var span = document.querySelector(".e-script");
      var width = 0;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 50) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          span.innerHTML = width + "%";
        }
      }
    }
  }
  function boot() {
    var i = 0;
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("Bar-boot");
      var span = document.querySelector(".e-boot");
      var width = 0;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 60) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          span.innerHTML = width + "%";
        }
      }
    }
  }
  function word() {
    var i = 0;
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("Bar-word");
      var span = document.querySelector(".e-word");
      var width = 0;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 75) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          span.innerHTML = width + "%";
        }
      }
    }
  }
  script();
  word();
  boot();
  move();
  css();
}
click();
// }

// Tabs---Resume

let taB = document.querySelectorAll("#TAB li");
let seC = document.querySelectorAll(".tAb");

taB.forEach((tab, index) => {
  tab.addEventListener("click", (event) => {
    event.stopPropagation()
    seC.forEach((con) => {
      con.classList.remove("is-active");
    });
    taB.forEach((con) => {
      con.classList.remove("is-active");
    });

    seC[index].classList.add("is-active");
    taB[index].classList.add("is-active");
    click();
  });
});

let taBB = document.querySelectorAll(".taabB li");
let sEC = document.querySelectorAll(".tT");

taBB.forEach((tab, index) => {
  tab.addEventListener("click", (event) => {
    event.stopPropagation()
    sEC.forEach((con) => {
      con.classList.remove("is-active");
    });
    taBB.forEach((con) => {
      con.classList.remove("is-active");
    });

    sEC[index].classList.add("is-active");
    taBB[index].classList.add("is-active");
  });
});

let tB = document.querySelectorAll(".pric-Tab li");
let tB_W = document.querySelectorAll(".rAte");

tB.forEach((tab, index) => {
  tab.addEventListener("click", (event) => {
    event.stopPropagation()
    tB_W.forEach((con) => {
      con.classList.remove("is-active");
    });
    tB.forEach((con) => {
      con.classList.remove("is-active");
    });

    tB_W[index].classList.add("is-active");
    tB[index].classList.add("is-active");
  });
});

let mybutton = document.getElementById("btn-back-to-top");
let back_grond = document.getElementById("c");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    mybutton.style.display = "block";
    back_grond.style.display = "block";
  } else {
    mybutton.style.display = "none";
    back_grond.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// JQuery

var c = document.getElementById("c"),
  ctx = c.getContext("2d"),
  cw = (c.width = 300),
  ch = (c.height = 300),
  parts = [],
  partCount = 200,
  partsFull = false,
  hueRange = 50,
  globalTick = 0,
  rand = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

var Part = function () {
  this.reset();
};

Part.prototype.reset = function () {
  this.startRadius = rand(1, 25);
  this.radius = this.startRadius;
  this.x = cw / 2 + (rand(0, 6) - 3);
  this.y = 250;
  this.vx = 0;
  this.vy = 0;
  this.hue = rand(globalTick - hueRange, globalTick + hueRange);
  this.saturation = rand(50, 100);
  this.lightness = rand(20, 70);
  this.startAlpha = rand(1, 10) / 100;
  this.alpha = this.startAlpha;
  this.decayRate = 0.1;
  this.startLife = 7;
  this.life = this.startLife;
  this.lineWidth = rand(1, 3);
};

Part.prototype.update = function () {
  this.vx += (rand(0, 200) - 100) / 1500;
  this.vy -= this.life / 50;
  this.x += this.vx;
  this.y += this.vy;
  this.alpha = this.startAlpha * (this.life / this.startLife);
  this.radius = this.startRadius * (this.life / this.startLife);
  this.life -= this.decayRate;
  if (
    this.x > cw + this.radius ||
    this.x < -this.radius ||
    this.y > ch + this.radius ||
    this.y < -this.radius ||
    this.life <= this.decayRate
  ) {
    this.reset();
  }
};

Part.prototype.render = function () {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  ctx.fillStyle = ctx.strokeStyle =
    "hsla(" +
    this.hue +
    ", " +
    this.saturation +
    "%, " +
    this.lightness +
    "%, " +
    this.alpha +
    ")";
  ctx.lineWidth = this.lineWidth;
  ctx.fill();
  ctx.stroke();
};

var createParts = function () {
  if (!partsFull) {
    if (parts.length > partCount) {
      partsFull = true;
    } else {
      parts.push(new Part());
    }
  }
};

var updateParts = function () {
  var i = parts.length;
  while (i--) {
    parts[i].update();
  }
};

var renderParts = function () {
  var i = parts.length;
  while (i--) {
    parts[i].render();
  }
};

var clear = function () {
  ctx.globalCompositeOperation = "destination-out";
  ctx.fillStyle = "hsla(0, 0%, 0%, .3)";
  ctx.fillRect(0, 0, cw, ch);
  ctx.globalCompositeOperation = "lighter";
};

var loop = function () {
  window.requestAnimFrame(loop, c);
  clear();
  createParts();
  updateParts();
  renderParts();
  globalTick++;
};

window.requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (a) {
      window.setTimeout(a, 1e3 / 60);
    }
  );
})();

loop();

// Scrool Active NavBar

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 500;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector("#head a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("#head a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
