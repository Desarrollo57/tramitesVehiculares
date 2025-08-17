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
        },
        100:{
            slidesPerView:1,
        }
    }
});
// capturar datos del formulario
const nombre = document.querySelector('#nombre-cliente').value;
const opcion = document.querySelector('#opcion').value;
const btnEnviar = document.querySelector('#btn-enviar').value;
const telefono = 573116516129;

//crear funcion usando los inputs
function enviarMensaje(){
    var telefono = 573116516129;
    var nombre = document.querySelector('#nombre-cliente').value;
    var opcion = document.querySelector('#opcion').value;
    var url = "https://wa.me/" + telefono + "?text=Hola mi nombre es: " + nombre + " requiero mas información de: " + opcion;

// Validar que los campos no estén vacíos
    if (!nombre || !opcion) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    window.open(url, '_blank').focus();

    //var mensaje = `https://api.whatsapp.com/send?phone=573116516129&text=Hola mi nombre es: ${nombre.value}`;
    btnEnviar.href = mensaje;
}