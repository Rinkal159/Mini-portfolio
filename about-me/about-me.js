const headingCont = document.querySelector("#heading-cont");

headingCont.addEventListener("click", (e) => {

    if(e.target.className = "about-heading") {
        const currHeading = document.querySelector(".special-underline");
        const newHeading = e.target;

        currHeading.classList.remove("special-underline");
        newHeading.classList.add("special-underline");
        
        const currDesc = document.getElementById(currHeading.textContent);
        const newDesc = document.getElementById(newHeading.textContent);

        currDesc.classList.remove("active");
        newDesc.classList.add("active");

    } else {
        
    }
})