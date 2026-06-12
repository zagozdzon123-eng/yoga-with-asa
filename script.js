// Enkel JavaScript för att underlätta hantering av händelser och framtida mätning.
document.addEventListener("DOMContentLoaded", function() {
    
    console.log("YogaWithAsa spårningsskript laddat. Klart för GA4 / GTM!");

    // Funktion för att fånga upp formulärinsändningar (simulering av konvertering innan externa verktyg kopplas)
    const forms = document.querySelectorAll("form");
    
    forms.forEach(form => {
        form.addEventListener("submit", function(event) {
            const formId = form.getAttribute("id");
            console.log("Formulär skickat: " + formId);
        });
    });

    // Exempel på klickspårning på primär CTA för Google Ads / Meta Ads
    const heroCta = document.getElementById("hero-cta-index");
    if(heroCta) {
        heroCta.addEventListener("click", function() {
            console.log("Klick på Hero CTA på startsidan registrerat.");
        });
    }
});