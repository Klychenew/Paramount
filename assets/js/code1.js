let bodyPag = document.querySelector ("body")
let sectionFondoHome1 = document.createElement ("section")
sectionFondoHome1.className = "fondoHome1"
bodyPag.appendChild(sectionFondoHome1)

// BARRA DE NAVEGACION -------------------------------

let navbar = document.createElement ("nav")
navbar.className = "navbar navbar-expand-lg"
sectionFondoHome1.appendChild (navbar)

let divNavbar = document.createElement ("div")
divNavbar.className = "container-fluid"
navbar.appendChild(divNavbar)

let a_divNavbar = document.createElement ("a")
a_divNavbar.className = "navbar-brand" 
a_divNavbar.setAttribute ("href", "#")
divNavbar.appendChild (a_divNavbar)

let img_divNavbar = document.createElement ("img")
img_divNavbar.setAttribute("style", "margin-left: 6px")
img_divNavbar.setAttribute ("src","assets/img/paramount.logo.svg")
img_divNavbar.setAttribute ("height","28px")
divNavbar.appendChild (img_divNavbar)

let div_divNavbar = document.createElement ("div")
div_divNavbar.className = "collapse navbar-collapse"
divNavbar.appendChild (div_divNavbar)

let ul_div_divNavbar = document.createElement ("ul")
ul_div_divNavbar.className = "navbar-nav"
div_divNavbar.appendChild (ul_div_divNavbar)

let li_ul_div_divNavbar = document.createElement ("li")
li_ul_div_divNavbar.className = "nav-item"
ul_div_divNavbar.appendChild (li_ul_div_divNavbar)

let a_li_ul_div_divNavbar = document.createElement ("a")
a_li_ul_div_divNavbar.className = "nav-link active"
a_li_ul_div_divNavbar.setAttribute ("style", "font-family:'Figtree'; color: rgb(255, 255, 255); font-size: 14px;")
a_li_ul_div_divNavbar.setAttribute ("href", "#")
a_li_ul_div_divNavbar.innerText = "Halo  VER AHORA"
li_ul_div_divNavbar.appendChild (a_li_ul_div_divNavbar)

let span_ul_div_divNavbar = document.createElement ("span")
span_ul_div_divNavbar.setAttribute ("style", "font-family:'Figtree'; color: rgb(255, 255, 255); font-size: 14px;")
span_ul_div_divNavbar.innerText = "INICIAR SESION"
ul_div_divNavbar.appendChild (span_ul_div_divNavbar)

// SECCION 01 TEXTOS -------------------------------

let divTextosHome1 = document.createElement ("div")
divTextosHome1.className = " d-flex flex-column col-5 p-5"
sectionFondoHome1.appendChild (divTextosHome1)

let H1_divTextosHome1 = document.createElement ("h1")
H1_divTextosHome1.innerHTML = "HISTORIAS ÚNICAS. ESTRELLAS ICÓNICAS. UNA MONTAÑA DE ENTRETENIMIENTO." 
divTextosHome1.appendChild (H1_divTextosHome1)

let H4_divTextosHome1 = document.createElement ("h4")
H4_divTextosHome1.className = "mt-3" 
H4_divTextosHome1.innerHTML = "Suscríbete por $13,900.00 COP al Mes. <br> Cancela en cualquier momento. <br> Únete ahora y obtén 7 días gratis." 
divTextosHome1.appendChild (H4_divTextosHome1)

let div_2_TextosHome1 = document.createElement ("div")
div_2_TextosHome1.className = "d-flex flex-column ps-5"
sectionFondoHome1.appendChild (div_2_TextosHome1)

let Button_1_sectionFondoHome1 = document.createElement ("button")
Button_1_sectionFondoHome1.className = "mb-3"
Button_1_sectionFondoHome1.innerText = "SUSCRÍBETE A PARAMOUNT+"
div_2_TextosHome1.appendChild (Button_1_sectionFondoHome1)

let Button_2_sectionFondoHome1 = document.createElement ("button")
Button_2_sectionFondoHome1.className = "mb-3"
Button_2_sectionFondoHome1.innerText = "YA TENGO PARAMOUNT+"
div_2_TextosHome1.appendChild (Button_2_sectionFondoHome1)

let Button_3_sectionFondoHome1 = document.createElement ("button")
Button_3_sectionFondoHome1.className = "mb-3"
Button_3_sectionFondoHome1.innerText = "INICIA SESIÓN CON TU PROVEEDOR "
div_2_TextosHome1.appendChild (Button_3_sectionFondoHome1)

// SECCION 02 FOTO 2 HALO -------------------------------

let sectionFondoHome2 = document.createElement ("section")
sectionFondoHome2.className = "fondoHome2"
bodyPag.appendChild(sectionFondoHome2)

let divTextosHome2 = document.createElement ("div")
divTextosHome2.className = "d-flex flex-column col-5"
sectionFondoHome2.appendChild (divTextosHome2)

let H1_divTextosHome2 = document.createElement ("h1")
H1_divTextosHome2.className = "ms-5"
H1_divTextosHome2.setAttribute ("style", "margin-top: 80px")
H1_divTextosHome2.innerHTML = "SOMOS ORIGINALES Y EXCLUSIVOS" 
divTextosHome2.appendChild (H1_divTextosHome2)























