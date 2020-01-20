    var navMain = document.querySelector(".page-header");
    var navToggle = document.querySelector(".main-nav__togle");

    document.body.classList.remove("page-body--no-js");
    document.body.classList.remove("page-header--open");
    navMain.classList.add("page-header--close");

    navToggle.addEventListener('click', function() {
      if (navMain.classList.contains("page-header--open")) {
        navMain.classList.remove("page-header--open");
        navMain.classList.add("page-header--close");
      } else {
        navMain.classList.add("page-header--open");
        navMain.classList.remove("page-header--close");
      }
    });
