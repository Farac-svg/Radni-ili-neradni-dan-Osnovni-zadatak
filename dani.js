var danas = new Date();
var brojDana = danas.getDay();

var nazivDana = "";
var vrstaDana = "";
var posebnaPoruka = "";


if (brojDana >= 1 && brojDana <= 5) {
  vrstaDana = "radni dan";
  if (brojDana === 1) {
    nazivDana = "Ponedjeljak";
    posebnaPoruka = "Ja najviše volim JS od svih programskih jezika";
  } else if (brojDana === 2) {
    nazivDana = "Utorak";
    posebnaPoruka = "utorak je malo bolji";
  } else if (brojDana === 3) {
    nazivDana = "Srijeda";
    posebnaPoruka = "bože sačuvaj";
  } else if (brojDana === 4) {
    nazivDana = "Četvrtak";
    posebnaPoruka = "Mali petak!";
  } else if (brojDana === 5) {
    nazivDana = "Petak";
    posebnaPoruka = "Vikend na Vidiku!";
  }
} 

else {
  vrstaDana = "neradni dan";

  if (brojDana === 0) {
    nazivDana = "Nedjelja";
    posebnaPoruka = "nedjelja je dobra ak je dan nakon praznik/nema škole";
  } else {
    nazivDana = "Subota";
    posebnaPoruka = "TOOOOOOOOO";
  }
}