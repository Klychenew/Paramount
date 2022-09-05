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

let H4_divTextosHome2 = document.createElement ("h4")
H4_divTextosHome2.className = "ms-5 mt-4"
H4_divTextosHome2.innerHTML = "Disfruta de historias únicas, estrellas icónicas y programas <br> exclusivos que no encontrarás en ningún otro lugar." 
divTextosHome2.appendChild (H4_divTextosHome2)

// SECCION 03 FOTO 3 -------------------------------

let sectionFondoHome3 = document.createElement ("section")
sectionFondoHome3.className = "fondoHome3"
bodyPag.appendChild(sectionFondoHome3)

let divTextosHome3 = document.createElement ("div")
divTextosHome3.className = "d-flex flex-column col-3"
sectionFondoHome3.appendChild (divTextosHome3)

let H1_divTextosHome3 = document.createElement ("h1")
H1_divTextosHome3.className = "ms-5"
H1_divTextosHome3.setAttribute ("style", "margin-top: 80px")
H1_divTextosHome3.innerHTML = "TENEMOS TU CONTENIDO FAVORITO" 
divTextosHome3.appendChild (H1_divTextosHome3)

let H4_divTextosHome3 = document.createElement ("h4")
H4_divTextosHome3.className = "ms-5 mt-4"
H4_divTextosHome3.innerHTML = "Desde películas taquilleras y series reconocidas a tus programas favoritos, en Paramount+ podrás disfrutarlo todo una y otra vez." 
divTextosHome3.appendChild (H4_divTextosHome3)

// SECCION 04 FOTO 4 -------------------------------

let sectionFondoHome4 = document.createElement ("section")
sectionFondoHome4.className = "fondoHome4"
bodyPag.appendChild(sectionFondoHome4)

let divTextosHome4 = document.createElement ("div")
divTextosHome4.className = "d-flex flex-column"
sectionFondoHome4.appendChild (divTextosHome4)

let H1_divTextosHome4 = document.createElement ("h1")
H1_divTextosHome4.className = "mt-5 mx-auto mt-5"
H1_divTextosHome4.innerHTML = "CUANDO QUIERAS, DONDE QUIERAS" 
divTextosHome4.appendChild (H1_divTextosHome4)

let H4_divTextosHome4 = document.createElement ("h4")
H4_divTextosHome4.className = "mx-auto mt-4"
H4_divTextosHome4.innerHTML = "Suscríbete por $13,900.00 COP al Mes. <br> Cancela en cualquier momento." 
divTextosHome4.appendChild (H4_divTextosHome4)

// botones finales 

let div_2_TextosHome4 = document.createElement ("div")
div_2_TextosHome4.className = "d-flex flex-column ps-5 mx-auto mt-5"
sectionFondoHome4.appendChild (div_2_TextosHome4)

let Button_1_sectionFondoHome4 = document.createElement ("button")
Button_1_sectionFondoHome4.className = "mb-3"
Button_1_sectionFondoHome4.innerText = "SUSCRÍBETE A PARAMOUNT+"
div_2_TextosHome4.appendChild (Button_1_sectionFondoHome4)

let Button_2_sectionFondoHome4 = document.createElement ("button")
Button_2_sectionFondoHome4.className = "mb-3"
Button_2_sectionFondoHome4.innerText = "YA TENGO PARAMOUNT+"
div_2_TextosHome4.appendChild (Button_2_sectionFondoHome4)

let Button_3_sectionFondoHome4 = document.createElement ("button")
Button_3_sectionFondoHome4.className = "mb-3"
Button_3_sectionFondoHome4.innerText = "INICIA SESIÓN CON TU PROVEEDOR"
div_2_TextosHome4.appendChild (Button_3_sectionFondoHome4)

// Footer

let FooterPag = document.createElement ("footer")
bodyPag.appendChild (FooterPag)

let sectionFooter = document.createElement ("section")
sectionFooter.setAttribute ("style", "background-color:rgb(0, 0, 0)")
FooterPag.appendChild (sectionFooter)

let divSectionFooter = document.createElement ("div")
divSectionFooter.className = "container textoFooter"
sectionFooter.appendChild (divSectionFooter)

let div1_divSectionFooter = document.createElement ("div")
div1_divSectionFooter.className = "row"
divSectionFooter.appendChild (div1_divSectionFooter)

// footer NAVEGACION DEL SITIO 

let div1_div1_divSectionFooter = document.createElement ("div")
div1_div1_divSectionFooter.className = "col-3 mt-5"
div1_divSectionFooter.appendChild (div1_div1_divSectionFooter)

let H6_div1_divSectionFooter = document.createElement ("h6")
H6_div1_divSectionFooter.className = "mb-4"
H6_div1_divSectionFooter.innerText = "Navegación del sitio"
div1_div1_divSectionFooter.appendChild (H6_div1_divSectionFooter)

let li_div1_div1_divSectionFooter1 = document.createElement ("li")
li_div1_div1_divSectionFooter1.setAttribute ("style", "list-style: none;")
li_div1_div1_divSectionFooter1.innerText = "Paramount+ Colombia"
div1_div1_divSectionFooter.appendChild (li_div1_div1_divSectionFooter1)

let li_div1_div1_divSectionFooter2 = document.createElement ("li")
li_div1_div1_divSectionFooter2.setAttribute ("style", "list-style: none;")
li_div1_div1_divSectionFooter2.innerText = "Paramount+ Global"
div1_div1_divSectionFooter.appendChild (li_div1_div1_divSectionFooter2)

// footer PRIVACIDAD Y

let div1_div1_divSectionFooter2 = document.createElement ("div")
div1_div1_divSectionFooter2.className = "col-3 mt-5"
div1_divSectionFooter.appendChild (div1_div1_divSectionFooter2)

let H6_div1_divSectionFooter2 = document.createElement ("h6")
H6_div1_divSectionFooter2.className = "mb-4"
H6_div1_divSectionFooter2.innerText = "Privacidad y términos"
div1_div1_divSectionFooter2.appendChild (H6_div1_divSectionFooter2) 

let li_div1_div1_divSectionFooter3 = document.createElement ("li")
li_div1_div1_divSectionFooter3.setAttribute ("style", "list-style: none;")
li_div1_div1_divSectionFooter3.innerText = "Acuerdo de Suscripción"
div1_div1_divSectionFooter2.appendChild (li_div1_div1_divSectionFooter3)

let li_div1_div1_divSectionFooter4 = document.createElement ("li")
li_div1_div1_divSectionFooter4.setAttribute ("style", "list-style: none;")
li_div1_div1_divSectionFooter4.innerText = "Términos de Uso"
div1_div1_divSectionFooter2.appendChild (li_div1_div1_divSectionFooter4)

let li_div1_div1_divSectionFooter5 = document.createElement ("li")
li_div1_div1_divSectionFooter5.setAttribute ("style", "list-style: none;")
li_div1_div1_divSectionFooter5.innerText = "Política de privacidad y Política"
div1_div1_divSectionFooter2.appendChild (li_div1_div1_divSectionFooter5)

let li_div1_div1_divSectionFooter6 = document.createElement ("li")
li_div1_div1_divSectionFooter6.setAttribute ("style", "list-style: none;")
li_div1_div1_divSectionFooter6.innerText = "Política de cookies"
div1_div1_divSectionFooter2.appendChild (li_div1_div1_divSectionFooter6)



// footer SOPORTE

let div1_div1_divSectionFooter3 = document.createElement ("div")
div1_div1_divSectionFooter3.className = "col-3 mt-5"
div1_divSectionFooter.appendChild (div1_div1_divSectionFooter3)

let H6_div1_divSectionFooter3 = document.createElement ("h6")
H6_div1_divSectionFooter3.className = "mb-4"
H6_div1_divSectionFooter3.innerText = "Soporte"
div1_div1_divSectionFooter3.appendChild (H6_div1_divSectionFooter3)

let li_div1_div1_divSectionFooter7 = document.createElement ("li")
li_div1_div1_divSectionFooter7.setAttribute ("style", "list-style: none;")
li_div1_div1_divSectionFooter7.innerText = "Ayuda / Contáctanos"
div1_div1_divSectionFooter3.appendChild (li_div1_div1_divSectionFooter7)

let li_div1_div1_divSectionFooter8 = document.createElement ("li")
li_div1_div1_divSectionFooter8.setAttribute ("style", "list-style: none;")
li_div1_div1_divSectionFooter8.innerText = "Guia de clasificaciones"
div1_div1_divSectionFooter3.appendChild (li_div1_div1_divSectionFooter8)


let div1_div1_divSectionFooter4 = document.createElement ("div")
div1_div1_divSectionFooter4.className = "textoFooter p-4"
div1_div1_divSectionFooter4.innerText = "© 2022 Paramount. Todos los derechos reservados."
div1_divSectionFooter.appendChild (div1_div1_divSectionFooter4)



























