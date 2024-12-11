document.addEventListener('DOMContentLoaded', function () {
    // Elemente selektieren
    const buchungLink = document.getElementById('buchung-link');
    const buchungsbereich = document.getElementById('buchungsbereich');
    const buchungsform = document.getElementById('buchungsform');
    const bestätigung = document.getElementById('bestätigung');

    // Event Listener für den Buchung-Link
    buchungLink.addEventListener('click', function (event) {
        event.preventDefault(); // Verhindert das Standardverhalten des Links
        buchungsbereich.style.display = 'block'; // Sichtbar machen
        buchungsbereich.classList.add('show');   // Animation aktivieren
    });

    // Event Listener für das Formular
    buchungsform.addEventListener('submit', function (event) {
        event.preventDefault(); // Verhindert das Neuladen der Seite
        
        // Formulardaten holen
        const name = document.getElementById('name').value;
        const datum = document.getElementById('datum').value;

        // Bestätigungsnachricht anzeigen
        bestätigung.innerHTML = `<p>Vielen Dank, ${name}! Ihre Buchung für den ${datum} ist erfolgreich.</p>`;

        // Formular ausblenden
        buchungsbereich.style.display = 'none';
        buchungsbereich.classList.remove('show'); // Animation zurücksetzen
    });
});

