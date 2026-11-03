
// ==========================================
// MI PROYECTO DE VIDA DIGITAL
// SARHA MENDOZA
// ==========================================


// MENÚ DE NAVEGACIÓN

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Cerrar menú" : "Abrir menú"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// CERRAR EL MENÚ AL SELECCIONAR UNA SECCIÓN

const menuItems = document.querySelectorAll(".nav-links a");

menuItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Abrir menú");

        menuToggle.textContent = "☰";

    });

});


// AÑO AUTOMÁTICO DEL PIE DE PÁGINA

const currentYear = document.getElementById("current-year");

currentYear.textContent = new Date().getFullYear();


// CALCULADORA DE AHORRO

const savingGoal = document.getElementById("saving-goal");

const savingMonthly = document.getElementById("saving-monthly");

const calculateButton = document.getElementById("calculate-saving");

const savingMonths = document.getElementById("saving-months");

const savingMessage = document.getElementById("saving-message");


// FORMATO DE DINERO COLOMBIANO

function formatCOP(value) {

    return new Intl.NumberFormat("es-CO", {

        style: "currency",

        currency: "COP",

        maximumFractionDigits: 0

    }).format(value);

}


// FUNCIÓN PARA CALCULAR EL AHORRO

function calculateSaving() {

    const goal = Number(savingGoal.value);

    const monthly = Number(savingMonthly.value);


    // VALIDAR LOS DATOS

    if (
        !Number.isFinite(goal) ||
        !Number.isFinite(monthly) ||
        goal <= 0 ||
        monthly <= 0
    ) {

        savingMonths.textContent = "Revisa los valores";

        savingMessage.textContent =
            "Ingresa una meta y un ahorro mensual mayores que cero.";

        return;

    }


    // CALCULAR LOS MESES NECESARIOS

    const months = Math.ceil(goal / monthly);


    // MOSTRAR EL RESULTADO

    if (months === 1) {

        savingMonths.textContent = "1 mes";

    } else {

        savingMonths.textContent = months + " meses";

    }


    // CALCULAR EL AHORRO ACUMULADO

    const totalSaved = monthly * months;

    const extra = totalSaved - goal;


    // MOSTRAR UN MENSAJE PERSONALIZADO

    savingMessage.textContent =
        "Ahorrando " +
        formatCOP(monthly) +
        " cada mes, alcanzarías tu meta de " +
        formatCOP(goal) +
        " en aproximadamente " +
        months +
        (months === 1 ? " mes." : " meses.") +
        (extra > 0
            ? " El ahorro acumulado sería de " +
              formatCOP(totalSaved) +
              "."
            : "");


}


// ACTIVAR LA CALCULADORA

calculateButton.addEventListener("click", calculateSaving);


// CALCULAR AL CARGAR LA PÁGINA

calculateSaving();


// BOTÓN VOLVER ARRIBA

const backToTop = document.getElementById("back-to-top");


// MOSTRAR EL BOTÓN CUANDO SE DESPLAZA LA PÁGINA

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        backToTop.classList.add("visible");

    } else {

        backToTop.classList.remove("visible");

    }

});


// REGRESAR AL INICIO

backToTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
