let a = document.querySelectorAll("input");
let b = document.querySelector("button");
let p = document.querySelector("p");

a.forEach(element => {
    element.addEventListener("input", () => {
        if (element.value == "" || !element.checkValidity()) {
            element.nextElementSibling.classList.add("fa-x");
            element.nextElementSibling.classList.remove("fa-check");
            element.nextElementSibling.style.color = "red"; 
        } else {
            element.nextElementSibling.classList.add("fa-check");
            element.nextElementSibling.classList.remove("fa-x");
            element.nextElementSibling.style.color = "green"; 
        }
    });
});

b.addEventListener("click", () => {
    a.forEach(element => {
        if (element.checkValidity()) {
            p.innerText = "Qeydiyyat ugurludur!";
            p.style.color = "green";
        } 
        if(!element.checkValidity()) {
            p.innerText = "Formda yanlis melumetlar var!";
            p.style.color = "red";
        }
    });
    a.forEach(element => {
        element.value = "";
    });
});
