gsap.registerPlugin(ScrollTrigger);
const timeline = gsap.timeline()
timeline.from('.home-nav-links',{
    stagger: 0.25,
    duration: 3,
    opacity: 0,
    y: 10,
    ease: 'expo.inOut',
    delay:1
})
.from("#landingLeadText",{
    duration:4,
    y: 20,
    opacity: 0,
    ease: "expo.out",
}, "-=2.8")
.from("#landingSubLeadText",{
    duration:4,
    y: 20,
    opacity: 0,
    ease: "expo.out",
},"-=3.8")
.from("#CTABtn",{
    duration:4,
    y:10,
    opacity:0,
    ease:"expo.out",
},"-=3.8")
.from('.containerRight',{
    duration:0.2,
    x:100,
    scale:0.4,
    opacity:0,
    ease:"expo.out",
},"-=3.4")
.to('#filter',{
    duration:0.2,
    x:"100%",
    ease:"expo.inOut",
},"-=2")


const tl = gsap.timeline({
    scrollTrigger: {
        trigger:'#about_us_section',
        start: 'top center',
        end: 'center center',
        delay:2,
        scrub:0.1
    }
})

tl.from('#aboutUs',{
    duration:1,
    opacity:0,
    y:200,
    skewY:10,
    scale:0.5
})