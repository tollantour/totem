const sr = ScrollReveal();

sr.reveal('.info-left', {
    origin:'top',
    distance:'50px',
    duration:2000,
    scale:0.5,
    reset:true
});

sr.reveal('.info-right', {
    origin:'right',
    distance:'50px',
    duration:1000,
    scale:0.5,
    reset:true
});

sr.reveal('.header-content-left', {
    origin:'top',
    distance:'300px',
    duration:2000,
    reset:true
});



sr.reveal('.header-content-right', {
    origin:'right',
    distance:'300px',
    duration:2000,
    reset:true
});

sr.reveal('.header-gallery-left', {
    origin:'left',
    distance:'300px',
    duration:2000,
    reset:true
});

sr.reveal('.header-img-left', {
    origin:'center',
    distance:'300px',
    duration:2000,
    reset:true
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });