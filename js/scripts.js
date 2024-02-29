var links = document.querySelectorAll('#menu a');

var navbarHeight = document.getElementById('navbar').offsetHeight;

links.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        var targetId = this.getAttribute('href').substring(1);

        var targetElement = document.getElementById(targetId);
        var targetOffset = targetElement.offsetTop - navbarHeight;

        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth'
        });

        links.forEach(function (item) {
            item.classList.remove('active');
        });

        this.classList.add('active');
    });
});


window.addEventListener('scroll', function () {
    var fromTop = window.scrollY + navbarHeight + 50;
    links.forEach(function (link) {
        var section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});