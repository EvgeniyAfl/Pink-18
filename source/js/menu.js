    var navMain = document.querySelector(".main-nav");
    var navToggle = document.querySelector(".main-nav__togle");

    document.body.classList.remove("page-body--no-js");

    navToggle.addEventListener('click', function() {
      if (navMain.classList.contains("main-nav--close")) {
        navMain.classList.remove("main-nav--close");
        navMain.classList.add("main-nav--open");
      } else {
        navMain.classList.add("main-nav--close");
        navMain.classList.remove("main-nav--open");
      }
    });
