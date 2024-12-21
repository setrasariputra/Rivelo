class PersonalityQuiz { // class or module
    constructor() {
        this.init();
    }

    init() {
        this.displayFooter();
    }

    displayFooter() { // function or method
        let footerHTML = 'test footer content link';

        const footerContainer = document.querySelector(".footer-container");
        footerContainer.innerHTML = footerHTML;
    }
}

// Iniatilize PersonalityQuiz module
new PersonalityQuiz(); 