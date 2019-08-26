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
        })

} else {
    document.getElementById('circle1').innerHTML = "Mobile"
}

//title 
anime({
    targets: '#Title .y',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 3200,
    delay: function (el, i) {
        return i * 250;
    }
});

//icons
let t2 = anime.timeline({
    easing: 'easeInOutSine',
    duration: 500
});

t2.add({
    targets: '#icon1',
    duration: 900,
    translateX: 100
}).add({
    targets: '#icon2',
    duration: 900,
    translateX: 100
})

//corner-logo
anime({
    targets: '.corner-logo',
    borderRadius: ['0%', '50%'],
    easing: 'easeInOutQuad',
    loop: true,
    duration: 2000,
    delay: 500,
    direction: 'alternate',
    rotate: [0, 360],
    elasticity: 600,
})

//onclick circle one

const circleOne = document.querySelector('#circle1');
console.log(circleOne)