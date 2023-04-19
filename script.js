import { OBJEKTUMLISTA, kulcsLista } from "./adatok.js";
import { rendez } from "./rendezes.js";

//sorrendbe rendezés
let szamol = 1;

$(function () {
  start();
});

function start() {
  $(".tablazat").html(tablaLetre(OBJEKTUMLISTA));
  let thElem = $("th");

  thElem.on("click", function () {
    let kulcs = $(event.target).attr("id");
    rendez(OBJEKTUMLISTA, kulcs, szamol);
    szamol *= -1;
    console.log(OBJEKTUMLISTA);
    start();
  });
  console.log(OBJEKTUMLISTA[0]);

  let torlesElem = $(".deleteX");

  torlesElem.on("click", function () {
    let torlendo = event.target.id;
    OBJEKTUMLISTA.splice(torlendo, 1);
    //splice() fog kelleni
    console.log(OBJEKTUMLISTA);
    start();


  });
}

function tablaLetre(lista) {
  let tabla = "<div class='table-responsive'>";
  tabla += '<table class="table table table-bordered">';
  tabla += "<thead class='table-primary'> <tr>";

  for (const key in kulcsLista) {
    tabla += `<th id="${key}"> ${kulcsLista[key]} </th>`;
  }
  tabla += "<th></th> <th></th></tr></thead>";

  for (let index = 0; index < lista.length; index++) {
    tabla += `<tr id="tr${index}">`;
    const object = lista[index];

    for (const key in object) {
      const element = object[key];
      tabla += `<td ><span id="S${key}"> ${element} </span></td>`;
    }
    tabla += `<td><button id="${index}" class="deleteX btn btn-danger" type="button">X</button></td> 
      <td><button id="${index}" class="editE btn btn-info" type="button">E</button></td></tr>`;
  }
  tabla += "</table> </div>";
  return tabla;
}
function rendezKi(lista) {
  const tbodyElem = $(".tablazat tbody");
  tbodyElem.empty();
  /**^ Ezzel kiürítjük a táblázatot */
  let tdElem;

  for (let index = 0; index < lista.length; index++) {
    const object = lista[index];
    let trElem = $("<tr>").attr("id", `tr${index}`);

    for (const key in object) {
      const element = object[key];
      tdElem = $("<td>").html(`<span id="S${key}">${element}</span>`);
      trElem.append(tdElem);
    }
    tdElem += `<td><button id=\"${index}\" class=\"torles btn btn-danger\" type=\"button\">X</button></td></tr>`;
    trElem.append(tdElem);
    tdElem += `<td><button id="${index}" class="szerkeszt btn btn-success" type="button">Szerkesztés</button></td></tr>`;
    trElem.append(tdElem);

    tbodyElem.append(trElem);
  }
}
