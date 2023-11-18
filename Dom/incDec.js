const inc = document.getElementById("inc");
const dis = document.getElementById("dis");
const dec = document.getElementById("dec");
const Reset = document.getElementById("Reset");


inc.addEventListener("click", () => {
const value = Number(dis.innerText);
if (value >= 10) {
alert("10+ values are not allowed");
} else {
dis.innerText = value + 1;
}
});

Reset.addEventListener("click", () => {
dis.innerText = 0;
});

dec.addEventListener("click", () => {
    const value = Number(dis.innerText);
    if (value > 0) {
    dis.innerText = value - 1;
    } else {
    alert("Negative value not allowed");
    }
    });