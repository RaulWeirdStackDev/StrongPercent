const peso = document.querySelector("#peso");
const porcentje = document.querySelector("#porcentaje");
const resultado = document.querySelector("#resultado");
const calcular = document.querySelector("#calcular");

calcular.addEventListener("click", () => {
    const total = (peso.value * porcentje.value) / 100;
    resultado.textContent = "El peso es de: " + total + "kg";
});