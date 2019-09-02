import anime from 'animejs/lib/anime.es';
import './style.css';

if (window.innerWidth > 800) {
  let t1 = anime.timeline({
    easing: 'easeInOutSine',
    duration: 1250
  });

  t1.add({
      targets: '#circle1',
      translateX: { value: '-50%', duration: 0 },
      translateY: { value: '-50%', duration: 0 },
      scale: [0, 9],
      duration: 500
    })
    .add({
      targets: '#circle1',
      scale: 1,
      duration: 500,
      delay: 700
    })
    .add({
      targets: '#circle1',
      scale: 1,
      translateX: [0, 'calc(50vw - 3.5em)'],
      duration: 250
    }) //circle2
    .add({
      targets: '#circle2',
      translateX: { value: '-50%', duration: 0 },
      translateY: { value: '-50%', duration: 0 },
      scale: [0, 9],
      duration: 500
    })
    .add({
      targets: '#circle2',
      scale: 1,
      duration: 500,
      delay: 700
    })
    .add({
      targets: '#circle2',
      scale: 1,
      translateX: [0, 'calc(50vw - 3.5em)'],
      translateY: '60%',
      duration: 250
    }) //circle3
    .add({
      targets: '#circle3',
      translateX: { value: '-50%', duration: 0 },
      translateY: { value: '-50%', duration: 0 },
      scale: [0, 9],
      duration: 500
    })
    .add({
      targets: '#circle3',
      scale: 1,
      duration: 500,
      delay: 700
    })
    .add({
      targets: '#circle3',
      scale: 1,
      translateX: [0, 'calc(50vw - 3.5em)'],
      translateY: '170%',
      duration: 250
    }) //circle4
    .add({
      targets: '#circle4',
      translateX: { value: '-50%', duration: 0 },
      translateY: { value: '-50%', duration: 0 },
      scale: [0, 9],
      duration: 500
    })
    .add({
      targets: '#circle4',
      scale: 1,
      duration: 500,
      delay: 700
    })
    .add({
      targets: '#circle4',
      scale: 1,
      translateX: [0, 'calc(50vw - 3.5em)'],
      translateY: '280%',
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
document.querySelector('.close').style.display = 'none';
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

document.querySelector('#circle1').onclick = () => {
  zoom1.play();
  console.log('hgh')
  document.getElementById('Title').style.display = 'none';
  document.querySelector('.close').style.display = 'block';
};

document.querySelector('.close').onclick = () => {
  zoomOut.play();
  document.getElementById('Title').style.display = 'block';
  document.querySelector('.close').style.display = 'none';
}