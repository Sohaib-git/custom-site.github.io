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
      var span = document.querySelector(".html");
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
        if (width >= 70) {
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
        if (width >= 65) {
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
  function word() {
    var i = 0;
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("Bar-word");
      var span = document.querySelector(".e-word");
      var width = 0;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 90) {
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
  function word_back() {
    var i = 0;
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("Bar-word-B");
      var span = document.querySelector(".back-word");
      var width = 0;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 30) {
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
  function query() {
    var i = 0;
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("Bar-query");
      var span = document.querySelector(".e-query");
      var width = 0;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 70) {
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
  word_back();
  word();
  boot();
  move();
  css();
  query();
}
click();
// }

// Tabs---Resume

let taB = document.querySelectorAll(".TAB li");
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
  document.querySelector('.bo').scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

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


// side bar

$("img.bar_click").click(function(){
  $(".left").css("left", "0px");
  $(".img.bar_click").css("display", "none");
});
$("img.bar_close").click(function(){
  $(".left").css("left", "-160px");
  $(".img.bar_click").css("display", "block");
});


// Get Current Year

document.querySelector('.yeaR').innerHTML = new Date().getFullYear();

// Load More Button Javascript

document.getElementById('loadMore').addEventListener('click', function() {

  const hiddenItems = document.querySelectorAll('.portfolio .box.hidden');

  if (window.matchMedia('(max-width: 480px)').matches) {

    for (let i = 0; i < 2 && i < hiddenItems.length; i++) {
      hiddenItems[i].classList.remove('hidden');
    }
    
    // Hide the button if no more items to load
    if (hiddenItems.length <= 2) {
        this.style.display = 'none';
    }

  }else{{

    for (let i = 0; i < 3 && i < hiddenItems.length; i++) {
      hiddenItems[i].classList.remove('hidden');
    }
    
    // Hide the button if no more items to load
    if (hiddenItems.length <= 3) {
        this.style.display = 'none';
    }

  }

  }


  
  // Load 3 more items each click
  
});



window.addEventListener('resize', function(){
  if (window.matchMedia('(max-width: 480px)').matches) {
    let element = document.querySelector('.repLacE');

    if (element && element.classList.contains('repLacE')) {
      element.classList.replace('repLacE', 'hidden');
    };

  };
});

if (window.matchMedia('(max-width: 480px)').matches) {
  let element = document.querySelector('.repLacE');

  if (element && element.classList.contains('repLacE')) {
    element.classList.replace('repLacE', 'hidden');
  };

};


