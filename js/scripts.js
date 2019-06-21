 var link = document.querySelector(".search a");
        var popup = document.querySelector(".search_form--see");
        
        link.addEventListener("click", function(evt) {
            evt.preventDefault();
            popup.classList.add('search_form');
           
            popup.classList.toggle("search_form--see");

        });