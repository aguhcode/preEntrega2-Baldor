const montoInput = document.getElementById("monto");
const monedaDesdeInput = document.getElementById("moneda-desde");
const monedaHastaInput = document.getElementById("moneda-hasta");
const resultadoDiv = document.getElementById("resultado");

// defino las tasas de cambio
const tasasDeCambio = {
    USD: 1.0,
    EUR: 0.85,
    GBP: 0.74,
    ARS: 520,
    REAL: 24,
    

};

// genero las opciones para los select de moneda
const monedas = Object.keys(tasasDeCambio);

monedas.forEach(moneda => {
    const optionDesde = document.createElement("option");
    const optionHasta = document.createElement("option");
    
    optionDesde.text = moneda;
    optionHasta.text = moneda;

    monedaDesdeInput.add(optionDesde);
    monedaHastaInput.add(optionHasta);
});

function convertirMoneda() {
    const monto = parseFloat(montoInput.value);
    const monedaDesde = monedaDesdeInput.value;
    const monedaHasta = monedaHastaInput.value;
    
    if (isNaN(monto)) {
        resultadoDiv.textContent = "Ingrese un monto valido";
        return;
    }
    
    if (tasasDeCambio[monedaDesde] && tasasDeCambio[monedaHasta]) {
        const tasaConversion = tasasDeCambio[monedaHasta] / tasasDeCambio[monedaDesde];
        const montoConvertido = monto * tasaConversion;
        resultadoDiv.textContent = `El monto convertido es: ${montoConvertido.toFixed(2)} ${monedaHasta}`;
    } else {
        resultadoDiv.textContent = "Moneda no valida";
    }
}
