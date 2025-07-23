const menu = document.querySelector('.menu-list');
const toggle = document.getElementById('toggle');
const navbar = document.querySelector('.navbar');

toggle.addEventListener('click', function(){
    menu.classList.toggle('active');
});

window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

var swiper = new Swiper('.categories-swiper',{ 
    slidesPerView:3,
    spaceBetween:30,
    loop:true,
    autoplay:true,
    breakpoints:{
        1400:{
            slidesPerView:3,
        },
        1200:{
            slidesPerView:2.5,
        },
        900:{
            slidesPerView:2,
        },
        500:{
            slidesPerView:1,
        }
    }
});

var swiper = new Swiper('.tst-swiper',{ 
    slidesPerView:3,
    spaceBetween:30,
    loop:true,
    autoplay:true,
    breakpoints:{
        1400:{
            slidesPerView:3,
        },
        1200:{
            slidesPerView:2.5,
        },
        900:{
            slidesPerView:2,
        },
        500:{
            slidesPerView:1,
        }
    }
});

var swiper = new Swiper('.blog-swiper',{ 
    slidesPerView:3,
    spaceBetween:30,
    loop:true,
    autoplay:true,
    breakpoints:{
        1400:{
            slidesPerView:3,
        },
        1200:{
            slidesPerView:2.5,
        },
        900:{
            slidesPerView:2,
        },
        500:{
            slidesPerView:1,
        }
    }
});