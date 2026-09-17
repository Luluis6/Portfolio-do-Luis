/* =========================================
   MENU MOBILE
========================================= */

const menuButton =
    document.getElementById("menuButton");

const nav =
    document.getElementById("nav");


menuButton.addEventListener("click", () => {

    nav.classList.toggle("open");

});


/* =========================================
   FECHAR MENU AO CLICAR
========================================= */

const navLinks =
    document.querySelectorAll(".nav a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

    });

});


/* =========================================
   LINK ATIVO
========================================= */

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 100;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   BOTÃO VOLTAR AO TOPO
========================================= */

const backTop =
    document.getElementById("backTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================================
   ANIMAÇÃO DAS BARRAS
========================================= */

const progressBars =
    document.querySelectorAll(
        ".progress-bar span"
    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const width =
                        entry.target.style.width;

                    entry.target.style.width = "0";


                    setTimeout(() => {

                        entry.target.style.transition =
                            "width 1.2s ease";

                        entry.target.style.width =
                            width;

                    }, 150);


                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: .5
        }

    );


progressBars.forEach(bar => {

    observer.observe(bar);

});


/* =========================================
   MENSAGEM SECRETA
========================================= */

const secretMessage =
    document.querySelector(".secret-message");


secretMessage.addEventListener("click", () => {

    secretMessage.classList.toggle("secret-active");


    if (
        secretMessage.classList.contains("secret-active")
    ) {

        secretMessage.querySelector("p").innerHTML =
            "Você desbloqueou<br>o Easter Egg. ⚡";

    } else {

        secretMessage.querySelector("p").innerHTML =
            "Você encontrou<br>um segredo...";

    }

});