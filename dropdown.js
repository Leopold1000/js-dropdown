document.addEventListener("DOMContentLoaded", function() {
    var dropdown_elements = document.querySelectorAll(".dropdown-parent");
    // into array
    dropdown_elements = Array.from(dropdown_elements);

    // iterate over all dropdowns
    dropdown_elements.forEach(dd_parent => {
        dd_parent_children = dd_parent.children;
        var dd_head;
        var dd_content;



        

        for (var i = 0; i < dd_parent_children.length; i++) {
            if (dd_parent_children[i].classList.contains("dropdown-head")){
                dd_head = dd_parent_children[i];
            } else if (dd_parent_children[i].classList.contains("dropdown-content")){
                dd_content = dd_parent_children[i];
            }
        }
        // create an arrow
        var new_arrow = document.createElement("div");
        new_arrow.classList.add("dropdown-arrow");

        // reference element is the first child, so we can insert arrow before anything else
        var reference_element = dd_head.firstChild;
        dd_head.insertBefore(new_arrow, reference_element);


        dd_head.addEventListener("click", function() {
            new_arrow.classList.toggle("rotated");
            if (dd_content.style.display === "none" || dd_content.style.display === ""){
                dd_content.style.display = "block";
            } else {
                dd_content.style.display = "none";
            }
        });
    });

});
