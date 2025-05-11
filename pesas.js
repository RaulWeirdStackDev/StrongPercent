const peso = document.querySelector("#peso");
const porcentje = document.querySelector("#porcentaje");
const resultado = document.querySelector("#resultado");
const calcular = document.querySelector("#calcular");
const body = document.querySelector("body");
const navLinks= document.querySelectorAll("a")

const calcularPorcentaje= () => calcular.addEventListener("click", () => {
    const total = (peso.value * porcentje.value) / 100;
    resultado.textContent = "El peso es de: " + total + "kg";
});

const libras= () => calcular.addEventListener("click", () => {
    const total = (peso.value * 0.453592) ;
    resultado.textContent = "El peso es de: " + total + "kg";
});

const theme = () => {
    body.addEventListener("click", () => {
        const currentBg = getComputedStyle(body).backgroundColor;

        if (currentBg === "rgb(20, 18, 18)") {
            body.style.backgroundColor = "white";
            body.style.color = "black";
            navLinks.forEach(link => link.style.color = "black");
        } else {
            body.style.backgroundColor = "#141212";
            body.style.color = "white";
            navLinks.forEach(link => link.style.color = "white");
        }
    });
};

