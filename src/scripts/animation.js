export * from "gsap";
export * from "gsap/ScrollTrigger";
export * from "gsap/ScrollToPlugin";
export * from "gsap/TextPlugin";
export {splitType};

import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import  splitType  from "split-type";

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin,TextPlugin);


export function cleanText(e) {
    if (typeof(e) === "string") {
        return cleanText(document.querySelectorAll(e));
    } else if (e[0] && e[0].innerHTML) {
        for (var i = 0; i < e.length; i++) {
            cleanText(e[i]);
        }
        return;
    }
    e.innerHTML = e.innerHTML.replace(/\-/g, "‑").replace(/V/g, "‌V‌").replace(/\./g, "‌.‌").replace(/,/g, "‌,‌").replace(/A/g, "‌A‌").replace(/fi/g, "f‌i");
}