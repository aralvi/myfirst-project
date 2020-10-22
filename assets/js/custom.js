
      function classToggle() {
        const navs = document.querySelectorAll(".navbar__list");

        navs.forEach((nav) => nav.classList.toggle("navbar__ToggleShow"));
      }

      document
        .querySelector(".navbar__item__toggler")
        .addEventListener("click", classToggle);
