const peso = document.querySelector("#peso");
const resultado = document.querySelector("#resultado");
const calcular = document.querySelector("#calcular");

calcular.addEventListener("click", () => {
    const total = (peso.value * 0.453592) ;
    resultado.textContent = "El peso es de: " + total + "kg";
});