import gsap from 'gsap';
import splitType from 'split-type';
import { cleanText } from '../scripts/cleanText';

// Fixes jumpy text on revert()
cleanText('.description');

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

var tl = gsap.timeline();

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
    }
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

tl.eventCallback("onComplete", function() {
    animatedElements.forEach(element => element.revert())
})