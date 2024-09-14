import {gsap, splitType, cleanText} from "../scripts/animation";
import GLightbox from 'glightbox';

// Init galleries
GLightbox({
    selector: ".gallery-item",
    loop: true,
    autoplayVideos: true,
    openEffect: 'fade',
    closeEffect: 'fade',
    plyr: {
        config: {
            loop: {
                active: true
            }
        }
    }
});

// Fixes jumpy text on revert()
cleanText('.description');

// GSAP variables
const hero = '.project-layout-image img';
const img = document.querySelector(hero);

const headText = new splitType('.project-header .title', { types: 'words'});
const headline = headText.words;

const subtitleText = new splitType('.project-header .subtitle', { types: 'words'});
const subtitle = subtitleText.words;

const descriptionText = new splitType('.description', {types: 'lines'});
const description = descriptionText.lines;

const labelText = new splitType('.meta-item .label', {types: 'words'});
const labels = labelText.words

const dataText = new splitType('.meta-item .data', {types: 'lines'});
const data = dataText.lines

const animatedElements = [headText, subtitleText, descriptionText, labelText, dataText]

// GSAP timeline
var tl = gsap.timeline();

tl.set('main', {visibility: 'visible'})

tl.fromTo(
    hero, {
        scale: 1.1,
        opacity: 0,
        filter: 'blur(10px)'
    }, {
        scale: 1,
        filter: 'blur(0px)',
        opacity: 1,
        duration: 1,
        ease: 'power4.out'
    }
)

tl.fromTo(
    headline, { 
        y: 100,
        opacity: 0
    },
    {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        ease: 'power4.out',
    }, "<"
)

tl.fromTo(
    subtitle, { 
        y: -100,
        opacity: 0
    },
    {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        ease: 'power4.out',
    }, "<"
)

tl.fromTo(
    description, { 
        y: -10,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        ease: 'power4.out',
        onComplete() {
            descriptionText.revert()
        }
    }, ">-=.75",
)

tl.fromTo(labels, {
        y: 20
    },
    {
        y: 0,
        duration: .5,
        stagger: 0.1,
        ease: 'power4.out',
    }, "<"
)

tl.fromTo(data, {
        y: -20,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: .5,
        stagger: 0.1,
        ease: "power4.out",
    }, "<"
)

tl.fromTo(".project-body *", {
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
    }, ">-=.5"
)


// Reverts text back to original state after animation completes
tl.eventCallback("onComplete", function() {
    animatedElements.forEach(element => element.revert())
})


img.addEventListener("load", () => {
    gsap.fromTo(
        hero, {
            scale: 1.1,
            opacity: 0,
            filter: 'blur(10px)'
        }, {
            scale: 1,
            filter: 'blur(0px)',
            opacity: 1,
            duration: 1,
            ease: 'power4.out'
        }
    )
})