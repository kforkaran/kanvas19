import anime from 'animejs/lib/anime.es';
import './style.css';

if (window.innerWidth > 800) {
  let t1 = anime.timeline({
    easing: 'easeInOutSine',
    duration: 1250
  });

  t1.add({
      targets: '#circle1',
      scale: 500,
      duration: 500
    })
    .add({
      targets: '#circle1',
      scale: 60,
      duration: 500,
      delay: 700
    })
    .add({
      targets: '#circle1',
      scale: 60,
      translateX: 11,
      duration: 250
    }) //circle2
    .add({
      targets: '#circle2',
      scale: 500,
      duration: 500
    })
    .add({
      targets: '#circle2',
      scale: 60,
      duration: 500,
      delay: 700
    })
    .add({
      targets: '#circle2',
      scale: 60,
      translateX: 11,
      translateY: 1.2,
      duration: 250
    }) //circle3

    .add({
      targets: '#circle3',
      scale: 500,
      duration: 500
    })
    .add({
      targets: '#circle3',
      scale: 60,
      duration: 500,
      delay: 700
    })
    .add({
      targets: '#circle3',
      scale: 60,
      translateX: 11,
      translateY: 2.4,
      duration: 250
    }) //circle4
    .add({
      targets: '#circle4',
      scale: 500,
      duration: 500
    })
    .add({
      targets: '#circle4',
      scale: 60,
      duration: 500,
      delay: 700
    })
    .add({
      targets: '#circle4',
      scale: 60,
      translateX: 11,
      translateY: 3.6,
      duration: 250
    });
} else {
  document.getElementById('circle1').innerHTML = 'Mobile';
}

//title
anime({
  targets: '#Title .y',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 2200,
  delay: function (el, i) {
    return i * 250;
  },
  loop: 3,
  direction: 'alternate'
});

//icons
let t2 = anime.timeline({
  easing: 'easeOutElastic',
  duration: 500
});

t2.add({
  targets: '#icon1',
  duration: 900,
  opacity: [0, 100],
  translateX: 100
}).add({
  targets: '#icon2',
  duration: 900,
  opacity: [0, 100],
  translateX: 100
});

//corner-logo
anime({
  targets: '.corner-logo',
  borderRadius: ['0%', '50%'],
  easing: 'easeInOutQuad',
  loop: true,
  translateY: 10,
  duration: 3000,
  delay: 500,
  direction: 'alternate',
  rotate: [0, 360],
  elasticity: 600
});

//onclick circles

const circles = ['1', '2', '3', '4'];

let zoom1 = anime({
  targets: '#circle1',
  scale: 2000,
  duration: 250,
  autoplay: false
});

let zoomOut = anime({
  targets: '#circle1',
  scale: 60,
  translateX: 11,
  duration: 250,
  autoplay: false
})

document.querySelector('#circle1').onclick = zoom1.play;

document.querySelector('.close').onclick = zoomOut.play;