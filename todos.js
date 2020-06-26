function imc() {
    var valt_tmp = document.f_imc.f_alt.value;
    var vpes_tmp = document.f_imc.f_pes.value;

    if ((valt_tmp == 0) || (vpes_tmp == 0)) {
        alert("Digite o peso ou altura");
    } else {
        var valt = valt_tmp.replace(",", ".");
        var vpes = vpes_tmp.replace(",", ".");

        var vimc = (vpes / Math.pow(valt, 2)).toFixed(1);
        alert("O IMC é: " + vimc);
    }
}