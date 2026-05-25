const peso = document.querySelector("#peso");
const porcentje = document.querySelector("#porcentaje");
const resultado = document.querySelector("#resultado");
const calcular = document.querySelector("#calcular");
const body = document.querySelector("body");
const navLinks= document.querySelectorAll("a")

const calcularPeso= () => {
    const total = (peso.value * porcentje.value) / 100;
    resultado.textContent = "El peso es de: " + total + "kg";
};

const libras= () =>  {
    const total = (peso.value * 0.453592) ;
    resultado.textContent = "El peso es de: " + total + "kg";
};

const kilos = () => {
    const total = peso.value / 0.453592;
    resultado.textContent = "El peso es de: " + total + " libras";
};




