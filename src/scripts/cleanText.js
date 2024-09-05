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