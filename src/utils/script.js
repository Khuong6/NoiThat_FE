document.addEventListener("DOMContentLoaded", function () {
  const pages = document.querySelectorAll(".page");
  let pageIndex = 0;

  function flipPage() {
    pages[pageIndex].classList.toggle("flip");
    pageIndex = (pageIndex + 1) % pages.length;
    setTimeout(flipPage, 2000); // Auto flip every 2 seconds
  }

  flipPage();
});
