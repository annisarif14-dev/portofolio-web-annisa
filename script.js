window.addEventListener("scroll", function () {
  
  const semuaSection = document.querySelectorAll("section");
  const semuaMenu = document.querySelectorAll(".nav-links a");

  let idBagianAktif = "";

  semuaSection.forEach(function (bagian) {
    const posisiBagian = bagian.offsetTop - 100;

    if (window.scrollY >= posisiBagian) {
      idBagianAktif = bagian.getAttribute("id"); 
    }
  });

  semuaMenu.forEach(function (menu) {
    
    menu.classList.remove("active");

    if (menu.getAttribute("href") === "#" + idBagianAktif) {
      menu.classList.add("active");
    }
  });

});