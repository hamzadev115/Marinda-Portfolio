const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl=gsap.timeline();
tl.to("#main",{
    y:"100vh",
    scale:0.5,
    duration:1,
})
tl.to("#main",{
    y:"-60vh",
    duration:1,
    delay:1
})
tl.to("#main",{
    rotate:360,
    scale:1,
})