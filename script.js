let mitexto = document.getElementById("text");
let lista = document.getElementsByClassName("lista");
let cargando = document.getElementById("loading");
let buscando = document.getElementById("searching");
let eltexto = document.getElementById("text");
let fondo = document.getElementsByClassName("imagen")[0];

let url = document.location.href;

let MiUrl2 = "https://docs.google.com/spreadsheets/d/1YXjp8ANJopHhJ0ByyQgsjJwKpxu72oFE/edit?usp=sharing&ouid=112199374666929425781&rtpof=true&sd=true";
let MiCelda = "https://docs.google.com/spreadsheets/d/1YXjp8ANJopHhJ0ByyQgsjJwKpxu72oFE/edit#gid=1492913522&range=A9";

//let MiUrl3 = MiUrl2 + MiCelda

let substraer = "";
let data = "";
let response = "";

//let fondo = document.getElementsByClassName("bg-image")[0];

      var k = url.substr(url.lastIndexOf("k=")+2);
      console.log(k);
      if(k){
	      FuncionFetch(MiUrl2)
      }

async function FuncionFetch(archivo){
	let miobjeto = await fetch(archivo);
	let texto = await miobjeto.text();
	let mivar = "<"+ texto.substr(texto.lastIndexOf("sheets-viewport"));
	mivar = "<"+ mivar.substr(mivar.lastIndexOf('div id="1492913522"'));
	mitexto.innerHTML = mivar;
	let extraer = await mitexto.getElementsByTagName("td")[0].innerHTML;
	extraer = await extraer.replace("Sucursal Limon 4<br>",'<div class="sucursala lista">Sucursal Limon 4</div>');
	extraer = await extraer.replace("Codigo:",'<div class="sucursalb lista">C&oacute;digo:</div> <div class="sucursalc">- ');
	extraer = await extraer.replace("<br>Descripcion:",'</div><div class="sucursalb lista">Descripci&oacute;n:</div> <div class="sucursalc"> - ');
	extraer = await extraer.replace("<br>Precio:",'</div><div class="sucursalb lista">Precio:</div> <div class="sucursalc"> -');
	mitexto.innerHTML = extraer+"</div>";//+" Pesos";
	let sofmeger = await document.getElementsByClassName("softmerge-inner");
	fondo.style.filter="blur(8px)";
	sofmeger[0].style.width="100%";
	cargando.style.opacity="0";
	buscando.style.opacity="0";
	eltexto.style.opacity="1";
//	sofmeger[0].style.left="50%";
//	sofmeger[0].style.translate="50%";
/*	lista[0].style.wordBreak="break-all";
	lista[1].style.wordBreak="break-all";
	lista[2].style.wordBreak="break-all";
	lista[3].style.wordBreak="break-all";
	lista[4].style.wordBreak="break-all";
	lista[5].style.wordBreak="break-all";
	lista[6].style.wordBreak="break-all";
	lista[0].style.width="70%";
	lista[1].style.display="flex";
	lista[2].style.display="flex";
	lista[3].style.display="flex";
	lista[4].style.display="flex";
	lista[5].style.display="flex";
	lista[6].style.display="flex";*/
//	ocultar1.style.opacity="0.0";
//	ocultar2.style.opacity="0.0";

//	mitexto.style.opacity="1";
}


