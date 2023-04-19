import { OBJEKTUMLISTA } from "./adatok.js";

start();

function start() {
  const articleEleme = $("article");
  let card = kartyaLetre(OBJEKTUMLISTA);
  articleEleme.html(card);
}

function kartyaLetre(OBJEKTUMLISTA) {
  let cardContainer = "<div class='card-container'>"; // Külső konténer elem
  for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
    cardContainer += "<div class='card' style='width:350px'>";
    cardContainer += "<div class='card-body'>";
    for (let key in OBJEKTUMLISTA[index]) {
      cardContainer += `<p class='card-text'> ${OBJEKTUMLISTA[index][key]}</p>`;
    }
    // Hozzáadunk egy eseménykezelő függvényt a gombhoz
    cardContainer += `<button class='btn btn-success' onclick='console.log("Clicked on item number: ${index}")'>BUY</button>`;
    cardContainer += " ";
    cardContainer += `<button class='btn btn-primary view-button' id='${index}'>VIEW</button>`;
    cardContainer += `<div><img id="img-${index}" src=""></div>`;
    cardContainer += "</div>";
    cardContainer += "</div>";
  }
  cardContainer += "</div>"; // Külső konténer elem lezárása
  return cardContainer;
}



$(".view-button").click(function () {   // View gomb megnyitáskor ezek futnak le
  var id_ = $(this).prop('id');         // Lekérjük az ID-t az adott gombnak
  var id = parseInt(id_);               // A gomb IDját átconvertáljuk számmá! Ezért tudjuk növelni és csökkenteni

  let hossz = OBJEKTUMLISTA.length;
  if (id == 0) {
    $(".bal").css("cursor", "not-allowed"); // Kurzor megváltoztatás ha nincs tobb item
    $(".bal").prop("disabled", true);       // letiltjuk a gombra kattintást
  } 
  else if (id == hossz) {
    $(".jobb").css("cursor", "not-allowed");
    $(".jobb").prop("disabled", true);
  }
  else{
    $(".bal").css("cursor", "pointer");
    $(".jobb").css("cursor", "pointer");
    $(".bal").prop("disabled", false);
    $(".jobb").prop("disabled", false);
  }



  $(".bal").prop("id", (id-1) );          // A bal gomb id="" -ját csökkentjük 1-el
  $(".jobb").prop("id", (id+1) );         // A Jobb gomb id="" -ját növeljük 1-el

  $(".kepNez").attr("src", "/kesek/kep-" + id + ".jpg");        // A .kepnez <img> src="" - linkjét átrakjuk az aktuális képre amire kattintunk (view)
  $(".blur").fadeIn(250, "linear").css("display", "block")     // A blur DIV-et előhozzuk animálva
  $(".view").fadeIn(400, "linear").css("display", "flex")     // A view képnézőt előhozzuk animálva
});

$(".exit").click(function () {
  $(".blur").fadeOut(250, "linear") // Exit gomb nyomásakor a blur divet eltűntetjük
  $(".view").fadeOut(400, "linear") // Exit gomb nyomáskor a view-t eltűntetjük
});


$(".bal").click(function () {
  var id_ = $(this).prop('id'); // Lekérjük az ID-t az adott gombnak
  var id = parseInt(id_);       // A gomb IDját átconvertáljuk számmá! Ezért tudjuk növelni és csökkenteni

  let hossz = OBJEKTUMLISTA.length;

  if (id == 0) {
    $(".bal").css("cursor", "not-allowed");
    $(".bal").prop("disabled", true);
  } 
  else if (id == hossz) {
    $(".jobb").css("cursor", "not-allowed");
    $(".jobb").prop("disabled", true);
  }
  else{
    $(".bal").css("cursor", "pointer");
    $(".jobb").css("cursor", "pointer");
    $(".bal").prop("disabled", false);
    $(".jobb").prop("disabled", false);
  }

  $(".bal").prop("id", (id-1) );
  $(".jobb").prop("id", (id+1) );
  $(".kepNez").attr("src", "/kesek/kep-" + id + ".jpg");  // A .kepnez <img> src="" - linkjét átrakjuk az aktuális képre amire kattintunk (view)
});


$(".jobb").click(function () {
  var id_ = $(this).prop('id');
  var id = parseInt(id_);
  console.log("JOBB: " + id)

  let hossz = OBJEKTUMLISTA.length - 1;
  if (id == 0) {
    $(".bal").css("cursor", "not-allowed").prop("disabled", true);
    $(".bal").prop("disabled", true);
  } 
  else if (id == hossz) {
    $(".jobb").css("cursor", "not-allowed");
    $(".jobb").prop("disabled", true);
  }
  else{
    $(".bal").css("cursor", "pointer");
    $(".jobb").css("cursor", "pointer");
    $(".bal").prop("disabled", false);
    $(".jobb").prop("disabled", false);
  }

  $(".jobb").prop("id", (id+1) );
  $(".bal").prop("id", (id-1) );

  $(".kepNez").attr("src", "/kesek/kep-" + id + ".jpg");
});




