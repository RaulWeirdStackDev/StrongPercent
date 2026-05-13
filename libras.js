const peso = document.querySelector("#peso");
const resultado = document.querySelector("#resultado");



const kilos = () => {
    const total = peso.value / 0.453592;
    resultado.textContent = "El peso es de: " + total + " libras";
};