class PersonalityQuiz { // class or module
    constructor() {
        this.personalities = [
            {'fx': 'BBBB', 'url': '1.html', 'label': 'Idealis Penyelaras'},
            {'fx': 'ABBB', 'url': '2.html', 'label': 'Idealis Terlibat'},
            {'fx': 'ABAB', 'url': '3.html', 'label': 'Pemikir Dinamis'},
            {'fx': 'ABAA', 'url': '4.html', 'label': 'Pemikir Pendobrak'},
            {'fx': 'ABBA', 'url': '5.html', 'label': 'Idealis Spontan'},
            {'fx': 'AABA', 'url': '6.html', 'label': 'Pelaku Santai'},
            {'fx': 'AABB', 'url': '7.html', 'label': 'Realis Sosial'},
            {'fx': 'AAAB', 'url': '8.html', 'label': 'Realis Bertekad'},
            {'fx': 'AAAA', 'url': '9.html', 'label': 'Pelaku Bersemangat'},
            {'fx': 'BAAA', 'url': '10.html', 'label': 'Pelaku Individualistis'},
            {'fx': 'BABA', 'url': '11.html', 'label': 'Pelaku Peka'},
            {'fx': 'BABB', 'url': '12.html', 'label': 'Realis Baik Hati'},
            {'fx': 'BAAB', 'url': '13.html', 'label': 'Realis Tepercaya'},
            {'fx': 'BBAB', 'url': '14.html', 'label': 'Pemikir Mandiri'},
            {'fx': 'BBAA', 'url': '15.html', 'label': 'Pemikir Analitis'},
            {'fx': 'BBBA', 'url': '16.html', 'label': 'Idealis Pemimpi'}
        ];

        this.quizOptions = [
            {
                1: "Saya agak ramah, membuka hati dan saya suka berada bersama-sama dengan orang lain.",
                2: "Saya membutuhkan banyak waktu untuk sendirian dan agak hati-hati untuk memulai hubungan baru.",
            },
            {
                1: "Saya lebih suka bekerja praktis, menghasilkan hasil yang nyata.",
                2: "Saya lebih suka bekerja secara teori, mengembangkan ide-ide dan konsep baru.",
            },
            {
                1: "Saya pintar dalam hal analisis dan logika dan ketika saya ragu, saya membiarkan diri saya dipandu oleh otak saya.",
                2: "Saya sangat sensitif dan emosional dan bila ragu, aku membiarkan diriku dibimbing oleh hati saya."
            },
            {
                1: "Saya orang yang fleksibel dan spontan, kadang-kadang agak kacau.",
                2: "Saya orang yang handal dan terorganisir dengan baik. Saya lebih memilih untuk merencanakan masa depan."
            }
        ];
        
        this.init();
    }

    init() {
        this.displayFooter();
        this.displayDropdownMenu();
        this.displayLogo();
    }

    displayDropdownMenu() {
        let dropdownMenuHTML = "<ul>";
        
        // start loop variable this.personalities
        for(let i = 0; i < this.personalities.length; i++) {
            dropdownMenuHTML += "<li><a href='"+this.personalities[i]['url']+"'>"+this.personalities[i]['label']+"</a></li>";
        }

        dropdownMenuHTML += "</ul>";

        const topMenuContainer = document.querySelector('.dropdown-menu-container');
        topMenuContainer.innerHTML = dropdownMenuHTML;
    }

    displayLogo() {
        let logoHTML = '<a href="index.html"><img src="ipersonic-logo.png"/></a>';

        const logoContainer = document.querySelector('.logo-container');
        logoContainer.innerHTML = logoHTML;
    }    

    displayFooter() { // function or method
        let footerHTML = '<p> © iPersonic | <a href="#">Personality Test</a> | <a href="#">Career Test</a> | <a href="#">Persönlichkeitstest</a> | <a href="#">Berufstest</a> | <a href="#">Privacy Policy</a> | <a href="#">Felicitas Heyne</a> | <a href="#">Impressum</a> | <a href="#">Help & Contact</a> | iPersonic supports  <a href="#">Audiopedia Foundation</a></p>';
        footerHTML += '<p><a href="#">English</a> | <a href="#">Deutsch</a> | <a href="#">Español</a> | <a href="#">Français</a> | <a href="#">Português</a> | <a href="#">中文</a> | <a href="#">Русский</a> | <a href="#">हिंदी</a> | <a href="#">العربية</a> | <a href="#">日本語</a> | <a href="#">Bahasa Indonesia</a> | <a href="#">Sunda</a> | <a href="#">Bugis</a> | <a href="#">Italiano</a> | <a href="#">Svenska</a> | <a href="#">Nederlands</a> | <a href="#">עברית</a> | <a href="#">Afrikaans</a> | <a href="#">Bosanski</a> | <a href="#">Català</a> | <a href="#">Čeština</a> | <a href="#">Hrvatski</a> | <a href="#">Magyar</a> | <a href="#">Română</a> | <a href="#">Slovenski</a> | <a href="#">Slovenský</a> | <a href="#">Srpski</a> | <a href="#">Български</a></p>';

        const footerContainer = document.querySelector(".footer-container");
        footerContainer.innerHTML = footerHTML;
    }
}

// Initialize PersonalityQuiz module
new PersonalityQuiz(); 