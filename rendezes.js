export function rendez(lista, kulcs, irany) {
  rendezesSzovegSzerint(lista, kulcs, irany);

}

function rendezesSzovegSzerint(lista, kulcs, irany) {
  let eredmeny;
  lista.sort(function (a, b) {
    if (a[kulcs] > b[kulcs]) {
      eredmeny = 1;
    } else {
      eredmeny = -1;
    }
    eredmeny *= irany;
    return eredmeny;
  });
}
