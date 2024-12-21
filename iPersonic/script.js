class PersonalityQuiz { // class or module
    constructor() {
        this.init();
    }

    init() {
        this.displayFooter();
    }

    displayFooter() { // function or method
        let footerHTML = '<p> © iPersonic | <a href="#">Personality Test</a> | <a href="#">Career Test</a> | <a href="#">Persönlichkeitstest</a> | <a href="#">Berufstest</a> | <a href="#">Privacy Policy</a> | <a href="#">Felicitas Heyne</a> | <a href="#">Impressum</a> | <a href="#">Help & Contact</a> | iPersonic supports  <a href="#">Audiopedia Foundation</a></p>';
        footerHTML += '<p><a href="#">English</a> | <a href="#">Deutsch</a> | <a href="#">Español</a> | <a href="#">Français</a> | <a href="#">Português</a> | <a href="#">中文</a> | <a href="#">Русский</a> | <a href="#">हिंदी</a> | <a href="#">العربية</a> | <a href="#">日本語</a> | <a href="#">Bahasa Indonesia</a> | <a href="#">Sunda</a> | <a href="#">Bugis</a> | <a href="#">Italiano</a> | <a href="#">Svenska</a> | <a href="#">Nederlands</a> | <a href="#">עברית</a> | <a href="#">Afrikaans</a> | <a href="#">Bosanski</a> | <a href="#">Català</a> | <a href="#">Čeština</a> | <a href="#">Hrvatski</a> | <a href="#">Magyar</a> | <a href="#">Română</a> | <a href="#">Slovenski</a> | <a href="#">Slovenský</a> | <a href="#">Srpski</a> | <a href="#">Български</a></p>';

        const footerContainer = document.querySelector(".footer-container");
        footerContainer.innerHTML = footerHTML;
    }
}

// Iniatilize PersonalityQuiz module
new PersonalityQuiz(); 