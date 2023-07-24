document.getElementById("btn_calcular").addEventListener('click', presentar);

function sumardatos() {
  var vivienda = parseFloat(document.getElementById("vivienda").value);
  var educacion = parseFloat(document.getElementById("educacion").value);
  var alimentacion = parseFloat(document.getElementById("alimentacion").value);
  var vestimenta = parseFloat(document.getElementById("vestimenta").value);
  var turismo = parseFloat(document.getElementById("turismo").value);
  var salud = parseFloat(document.getElementById("salud").value);

  var sumaGastos = vivienda + educacion + alimentacion + vestimenta + turismo + salud;
 
  return sumaGastos;
}

function calcularImpuestoRenta(ingresos) {
  var impuesto = 0;

  if (ingresos <= 11290) {
    impuesto = 0;
  } else if (ingresos <= 14390) {
    impuesto = (ingresos - 11290) * 0.05;
  } else if (ingresos <= 17990) {
    impuesto = (ingresos - 14390) * 0.10 + 155;
  } else if (ingresos <= 21600) {
    impuesto = (ingresos - 17990) * 0.12 + 515;
  } else if (ingresos <= 43180) {
    impuesto = (ingresos - 21600) * 0.15 + 948;
  } else if (ingresos <= 64770) {
    impuesto = (ingresos - 43180) * 0.20 + 4187;
  } else if (ingresos <= 86360) {
    impuesto = (ingresos - 64770) * 0.25 + 8503;
  } else {
    impuesto = (ingresos - 86360) * 0.35 + 13903;
  }

 
  return impuesto;
}

function presentar() {
  var person = document.getElementById("nombre").value;
  var calculo = calcularImpuestoRenta(sumardatos());
  document.write("<h2>Nombre: " + person + " Debe pagar: " + calculo + "</h2>");
  console.log(person, calculo);
}
