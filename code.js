let bodyPag = document.querySelector("body")
let navbar = document.createElement ("nav")
navbar.className = "navbar navbar-expand-lg bg-light" 
bodyPag.appendChild (navbar)

let divUNONavbar = document.createElement ("div") 
divUNONavbar.className = "container"
navbar.appendChild (divUNONavbar)

let aUNOdiv = document.createElement ("a")
aUNOdiv.className = "navbar-brand"
aUNOdiv.setAttribute ("href", "#")
divUNONavbar.appendChild (aUNOdiv)

let imgLogoDiv = document.createElement ("img")
imgLogoDiv.setAttribute ("src" , "img/paramount.logo.svg")
imgLogoDiv.setAttribute ("height" , "28px")
aUNOdiv.appendChild (imgLogoDiv)

let divDOSdiv = document.createElement ("div")
divDOSdiv.className = "collapse navbar-collapse" 
divDOSdiv.setAttribute ("id" , "navbarNav")
divUNONavbar.appendChild (divDOSdiv)

let UL_nav_Bar = document.createElement ("ul")
UL_nav_Bar.className = "navbar-nav"
divDOSdiv.appendChild (UL_nav_Bar)

let  LI_nav_Bar_1 = document.createElement ("li")
LI_nav_Bar_1.className = "nav-item"
UL_nav_Bar.appendChild (LI_nav_Bar_1)

let a_LI_1 = document.createElement ("a")
a_LI_1.className = "nav-link active" 
a_LI_1.setAttribute ("aria-current", "page") 
a_LI_1.setAttribute ("href", "#")
a_LI_1.innerText = "Halo Ver AHORA"
UL_nav_Bar.appendChild (a_LI_1)

let LI_nav_Bar_2 = document.createElement ("li")
LI_nav_Bar_2.className = "nav-item"
LI_nav_Bar_2.innerText = "INICIAR SESIÓN"
UL_nav_Bar.appendChild (LI_nav_Bar_2)

let a_LI_nav_Bar_2 = document.createElement ("a")
a_LI_nav_Bar_2.className = "nav-link" 
a_LI_nav_Bar_2.setAttribute ("href", "#")
LI_nav_Bar_2.appendChild (a_LI_nav_Bar_2)

// section ----------------

let sectionPag = document.createElement ("section")
sectionPag.className = "padded-container"
bodyPag.appendChild (sectionPag)

let divSectionPag = document.createElement ("div")
divSectionPag.className = "grid"
sectionPag.appendChild (divSectionPag)

let Div_2_divSectionPag = document.createElement ("div")
Div_2_divSectionPag.className = "grid-item"
divSectionPag.appendChild (Div_2_divSectionPag)

let h1Section = document.createElement ("h1")
h1Section.setAttribute ("data-row-position", "0")
h1Section.className = "includeInScrollTracking"
h1Section.innerText = "HISTORIAS ÚNICAS. ESTRELLAS ICÓNICAS. UNA MONTAÑA DE ENTRETENIMIENTO."
Div_2_divSectionPag.appendChild (h1Section)

let div01Section = document.createElement ("div")
div01Section.className = "upsell-text"
Div_2_divSectionPag.appendChild (div01Section)

let strongSection = document.createElement ("strong")
strongSection.innerText = "Suscríbete por $13,900.00&nbsp;COP al Mes."
div01Section.appendChild  (strongSection)

let br_strongSection = document.createElement ("br")
strongSection.appendChild (br_strongSection)

let strongSection2 = document.createElement ("strong")
strongSection2.innerText = "Únete ahora y obtén 7 días gratis."
div01Section.appendChild  (strongSection2)

let div02Section = document.createElement ("div")
div02Section.className = "hero__cta"
Div_2_divSectionPag.appendChild (div02Section)

let aDiv02Section = document.createElement ("a")
aDiv02Section.setAttribute ("href", "/co/signup/")
aDiv02Section.className = "button focusable button__extra-large js-cta-tracking"
aDiv02Section.setAttribute ("aa-link", "upsell|top|suscrÍbete a paramount+||||||||||||")
aDiv02Section.setAttribute ("role", "link")
aDiv02Section.setAttribute ("tabindex", "0")
div02Section.appendChild (aDiv02Section)

let div_A_Div02Section = document.createElement ("div")
div_A_Div02Section.className = "button__text"
div_A_Div02Section.innerText = "SUSCRÍBETE A PARAMOUNT+"
aDiv02Section.appendChild (div_A_Div02Section)

let span_div02Section = document.createElement ("span")
span_div02Section.className = ("hero__alt")
div02Section.appendChild (span_div02Section)

let aSpan_div02Section = document.createElement ("a")
aSpan_div02Section.setAttribute ("href", "/co/signin/")
aSpan_div02Section.className = "button focusable button__extra-large terciary"
aSpan_div02Section.setAttribute ("role", "link")
aSpan_div02Section.setAttribute ("tabindex", "0")
div02Section.appendChild (aSpan_div02Section)

let div_a_Span_div02Section = document.createElement ("div")
div_a_Span_div02Section.className = "button__text"
div_a_Span_div02Section.innerText = "YA TENGO PARAMOUNT+ "
aSpan_div02Section.appendChild (div_a_Span_div02Section)

let a_2_Span_div02Section = document.createElement ("a")
a_2_Span_div02Section.setAttribute ("href")
a_2_Span_div02Section.className = 



















//footer ________________________________

let footer = document.createElement ("footer")
footer.setAttribute ("aa-region", "global footer")
bodyPag.appendChild (footer)










