var popup = document.querySelector(".search_form");
var link = document.querySelector(".search a");
popup.classList.add("search_form--hidden");
link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle('search_form--hidden');
});