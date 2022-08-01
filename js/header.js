$(document).ready(function() {


    //animation of text

    setTimeout(function() {
        new TypeIt("#hello-text", {
                speed: 100,
                waitUntilVisible: true,
                afterComplete: function(instance) {
                    instance.destroy();
                }
            })
            .type(`Hello world!`, { delay: 1000 })
            .move(-12)
            .type('<span>[</span>')
            .move(12)
            .type('<span>]</span>')


        .go();
    }, 100);

    setTimeout(function() {
        new TypeIt("#my-text", {
                speed: 50,
                waitUntilVisible: true,
                afterComplete: function(instance) {
                    instance.destroy();
                }
            })
            .type(`This is my personal site`, { delay: 1000 })
            .type(', <br>you can get to know my skills and work more closely.')
            .go();
    }, 6000);




    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');
    const welcomeText=document.querySelector('.welcome-text');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        document.body.classList.toggle('scroll-block')
            welcomeText.classList.toggle('delWelcomeText');
        links.forEach(item => {
            item.classList.toggle('fade');
        });

    })





    //animated  text

})