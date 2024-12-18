// Rasti visus lemputes elementus
const lightBulbs = document.querySelectorAll('.light-bulb');

// Funkcija, kuri perjungia eglutės apšvietimą
function toggleTreeLights(event) {
    const lightBulb = event.currentTarget; // Pasirenkame tą lemputę, kuri buvo paspausta
    const isActive = lightBulb.classList.contains('lights-on');
    if (isActive) {
        lightBulb.classList.remove('lights-on'); // Išjungti šviesą
    } else {
        lightBulb.classList.add('lights-on'); // Įjungti šviesą
    }
}

// Pridėti paspaudimo įvykį visoms lemputėms
lightBulbs.forEach(bulb => {
    bulb.addEventListener('click', toggleTreeLights);
});

