const menuBtn = document.querySelector('.mobilebar'),
menuSide = document.querySelector('.absolute-menu'),
crossBtn = document.querySelector('.absolute-menu-cross')

menuBtn.addEventListener('click', asideMenu)

function asideMenu() {
    menuSide.classList.toggle('active-menu')
}

crossBtn.addEventListener('click', function() {
    menuSide.classList.remove('active-menu')
})

document.addEventListener('mouseup', e => {
    if(!menuSide.contains(e.target)) {
        menuSide.classList.remove('active-menu')
    }
})

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 140) {
        document.querySelector('#header').classList.add('fixed')
    } else {
        document.querySelector('#header').classList.remove('fixed')
    }
})

const plusIcons = document.querySelectorAll('.aside-box_title'),
menuSub = document.querySelectorAll('.aside-box_title ul') 

for(let i = 0; i < plusIcons.length; i++) {
    plusIcons[i].addEventListener('click', function() {
        let openMenu = this.querySelector('.aside-box_title ul')

        if(openMenu.classList.contains('collapsed')) {
            openMenu.classList.remove('collapsed')
            return
        }
        // for(let k = 0; k < menuSub.length; k++) {
        //     menuSub[k].classList.remove('collapsed')
        // }
        openMenu.classList.add('collapsed')
    })
}

const doorColors = document.querySelectorAll('.card-box-info_colors-img img');
doorColors.forEach(item => {
    item.addEventListener('click', function() {
        console.log('click');
        doorColors.forEach(el => {
            el.classList.remove('active')
        })
        item.classList.add('active')
    })
})


const swiper = new Swiper('.swiper-main', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: "auto",

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const swiper1 = new Swiper('.swiper-products', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 7,

    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },

    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 320px
        480: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        767: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        991: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      },

    pagination: {
        el: '.swiper-pagination1',
    },
});

const swiper2 = new Swiper('.swiper-projects', {
    direction: 'horizontal',
    loop: true,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        scale: 1,
        slideShadows: false,
    },

    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },

    // pagination: {
    //     el: '.swiper-pagination',
    // },
});

const swiper3 = new Swiper('.swiper-license', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,

    navigation: {
        nextEl: '.swiper-button-next3',
        prevEl: '.swiper-button-prev3',
    },

    breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 30,
          }
      },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const swiper4 = new Swiper('.swiper-office', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,

    navigation: {
        nextEl: '.swiper-button-next4',
        prevEl: '.swiper-button-prev4',
    },

    breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
          }
      },

    pagination: {
        el: '.swiper-pagination5',
        clickable: true,
    },
});

const swiper5 = new Swiper('.swiper-indoor', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: "auto",

    navigation: {
        nextEl: '.swiper-button-next5',
        prevEl: '.swiper-button-prev5',
    },

    pagination: {
        el: ".swiper-pagination6",
        clickable: true,
    },
});

const swiper6 = new Swiper('.swiper-bathroom', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: "auto",

    navigation: {
        nextEl: '.swiper-button-next6',
        prevEl: '.swiper-button-prev6',
    },

    pagination: {
        el: ".swiper-pagination7",
        clickable: true,
    },
});

// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     rows: true,
//     rowsCount: 2,
//     // responsive:{
//     //     0:{
//     //         items:1
//     //     },
//     //     600:{
//     //         items:3
//     //     },
//     //     1000:{
//     //         items:5
//     //     }
//     // }
// })



// $('.mask').mask('+7 (777) 999-99-99');