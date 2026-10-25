var danas = new Date();
var brojDana = danas.getDay();

var nazivDana = "";
var vrstaDana = "";
var posebnaPoruka = "";


if (brojDana >= 1 && brojDana <= 5) {
  vrstaDana = "radni dan";