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
      translateX: [0, 'calc(50vw - 4.8em)'],
      duration: 250
    })
    .add({
      targets: '#camera',
      translateY: { value: '-50%', duration: 0 },
      opacity: 1,
      translateX: [40, '-50%'],
      duration: 250
    })
    //circle2
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
      translateX: [0, 'calc(50vw - 4.8em)'],
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
      translateX: [0, 'calc(50vw - 4.8em)'],
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
      translateX: [0, 'calc(50vw - 4.8em)'],
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
  delay: function(el, i) {
    return i * 250;
  },
  loop: 3,
  direction: 'alternate'
});

//icons social media
let t2 = anime.timeline({
  easing: 'easeInOutExpo',
  duration: 500
});

t2.add({
  targets: '#icon1',
  duration: 900,
  opacity: [0, 100],
  translateX: [-100, 0]
}).add({
  targets: '#icon2',
  duration: 900,
  opacity: [0, 100],
  translateX: [-100, 0]
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

//onclick circles

//initially
document.querySelector('.close').style.display = 'none';
document.querySelector('.photography').style.display = 'none';

const cameraStroke = anime({
  targets: '#camera .p',
  strokeDashoffset: [anime.setDashoffset, 0],
  duration: 2200,
  delay: function(el, i) {
    return i * 250;
  },
  easing: 'easeInCirc',
  loop: true,
  direction: 'alternate',
  autoplay: false
});

var textWrapper = document.querySelector('.photography');
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

const cameraContent = anime({
  targets: '.photography .letter',
  translateX: [40, 0],
  translateZ: 0,
  opacity: [0, 1],
  duration: 1200,
  delay: (el, i) => 500 + 30 * i,
  autoplay: false
});

document.querySelector('#camera').onclick = () => {
  anime({
    targets: '#circle1',
    scale: 50,
    translateX: { value: 'calc(50vw - 4.8em)', duration: 0 },
    duration: 250,
    easing: 'easeInCirc'
  });
  document.getElementById('Title').style.display = 'none';
  document.querySelector('#camera').style.fill = 'rgba(0,0,0,0)';
  document.querySelector('.close').style.display = 'block';
  document.querySelector('.photography').style.display = 'block';
  document.querySelector('#circle1').style.zIndex = '2';
  cameraStroke.play();
  cameraContent.play();
};

document.querySelector('.close').onclick = () => {
  anime({
    targets: '#circle1',
    scale: [50, 1],
    translateX: { value: 'calc(50vw - 4.8em)', duration: 0 },
    duration: 250,
    easing: 'easeOutCirc'
  });
  document.querySelector('#circle1').style.zIndex = '0';
  document.getElementById('Title').style.display = 'block';
  document.querySelector('.close').style.display = 'none';
  document.querySelector('.photography').style.display = 'none';
};
