import anime from 'animejs/lib/anime.es';
import './style.css';

let t1 = anime.timeline({
  easing: 'easeInOutSine',
  duration: 1250
});

t1.add({
  targets: '#circle1',
  keyframes: [
    { translateX: 0, translateY: 0, scale: [0, 9], duration: 500 },
    { scale: 1, duration: 500, delay: 700 },
    { translateX: 'calc(50vw - 4.8em)', duration: 250 }
  ],
})
  .add({
    targets: '#camera',
    translateY: { value: '-50%', duration: 0 },
    opacity: 1,
    translateX: [40, '-50%'],
    duration: 250
  }) //circle2
  .add({
    targets: '#circle2',
    keyframes: [
      { translateX: 0, translateY: 0, scale: [0, 9], duration: 500 },
      { scale: 1, duration: 500, delay: 700 },
      { translateX: 'calc(50vw - 4.8em)', translateY: '110%', duration: 250 }
    ],
  })
  .add({
    targets: '#code',
    translateY: { value: '-50%', duration: 0 },
    opacity: 1,
    translateX: [40, '-50%'],
    duration: 250
  }) //circle3
  .add({
    targets: '#circle3',
    keyframes: [
      { translateX: 0, translateY: 0, scale: [0, 9], duration: 500 },
      { scale: 1, duration: 500, delay: 700 },
      { translateX: 'calc(50vw - 4.8em)', translateY: '220%', duration: 250 }
    ],
  })
  .add({
    targets: '#design',
    translateY: { value: '-50%', duration: 0 },
    opacity: 1,
    translateX: [40, '-50%'],
    duration: 250
  });

//title
anime({
  targets: '#Title .y',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1900,
  delay: (el, i) => i * 250,
  loop: 3,
  direction: 'alternate'
});

//icons social media
anime({
  easing: 'easeInOutExpo',
  targets: '.social-icon',
  duration: 900,
  opacity: [0, 100],
  translateX: [-100, 0],
  delay: anime.stagger(100)
});

//corner-logo square to circle
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

//initially
document.querySelector('.close').style.display = 'none';
document.querySelector('.photography').style.display = 'none';

const textWrapper = document.querySelector('.photography');
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

const targets = [
  { id: '#circle1', icon: '#camera', heading: '.photography', svgclass: ' .p' },
  { id: '#circle2', icon: '#code', heading: '.photography', svgclass: ' .q' },
  { id: '#circle3', icon: '#design', heading: '.photography', svgclass: ' .a' }
];

let target;

const open = element => {
  target = targets[element];
  anime({
    targets: target.id,
    translateX: { value: 'calc(50vw - 4.8em)', duration: 0 },
    scale: 50,
    duration: 250,
    easing: 'easeInCirc'
  });
  document.getElementById('Title').style.display = 'none';
  document.querySelector('.close').style.display = 'block';
  document.querySelector(target.heading).style.display = 'block';
  document.querySelector(target.id).style.zIndex = '2';
  anime({
    targets: target.icon + target.svgclass,
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 2200,
    delay: anime.stagger(250),
    easing: 'easeInCirc',
    loop: true,
    direction: 'alternate'
  });
  anime({
    targets: target.heading + ' .letter',
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    duration: 1200,
    delay: anime.stagger(30, { start: 500 })
  });
};

const close = () => {
  anime({
    targets: target.id,
    translateX: { value: 'calc(50vw - 4.8em)', duration: 0 },
    scale: [50, 1],
    duration: 250,
    easing: 'easeOutCirc'
  });
  document.querySelector(target.id).style.zIndex = '0';
  document.getElementById('Title').style.display = 'block';
  document.querySelector('.close').style.display = 'none';
  document.querySelector(target.heading).style.display = 'none';
};

document.querySelector('#camera').onclick = () => open(0);
document.querySelector('#code').onclick = () => open(1);
document.querySelector('#design').onclick = () => open(2);
document.querySelector('.close').onclick = close;
