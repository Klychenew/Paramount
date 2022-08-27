let bodyPag = document.querySelector("body")
let navbar = document.createElement ("nav")
navbar.className = "navbar navbar-expand-lg bg-light" 
bodyPag.appendChild (navbar)

let divUNONavbar = document.createElement ("div") 
divUNONavbar.className = "container-fluid"
navbar.appendChild (divUNONavbar)

let aUNOdiv = document.createElement ("a")
aUNOdiv.className = "navbar-brand"
aUNOdiv.setAttribute ("href", "#")
divUNONavbar.appendChild (aUNOdiv)

 