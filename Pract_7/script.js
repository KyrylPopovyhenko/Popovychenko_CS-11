
//Калькулятор за формулою Герона
const button = document.getElementById("calculate");

button.addEventListener("click", function() {
    
    const [a, b, c] = Array.from(document.querySelectorAll('.side'), item => Number(item.value));

    if (a + b + c <= 2 * Math.max(a, b, c) || [a, b, c].some(val => val <= 0 || !Number.isFinite(val))) {
        document.getElementById("result").textContent = "Incorrect sides";
        return
    }
    const p = (a + b + c) / 2;
    const s = Math.sqrt(p * (p-a) * (p-b) * (p-c));

    document.getElementById("result").textContent = s;
});

//За двума сторонами і кутом між ними
const button2 = document.getElementById("calculate2");

button2.addEventListener("click", function() {
    const a = Number(document.getElementById('sideA2').value);
    const b = Number(document.getElementById('sideB2').value);
    const angle = Number(document.getElementById('angle').value);

    if ([a, b].some(val => val <= 0 || !Number.isFinite(val)) || angle <= 0 || angle >= 180 || !Number.isFinite(angle)) {
        document.getElementById("result2").textContent = "Incorrect values";
        return
    }
    const radians = angle * Math.PI / 180;
    const sinAngle = Math.sin(radians);

    const s = (a * b * sinAngle) / 2;

    document.getElementById("result2").textContent = s;
});

//За стороною і висотою
const button3 = document.getElementById("calculate3");

button3.addEventListener("click", function() {
    const a = Number(document.getElementById('sideA3').value);
    const height = Number(document.getElementById('height').value);

    if ([a, height].some(val => val <= 0 || !Number.isFinite(val))) {
        document.getElementById("result3").textContent = "Incorrect values";
        return
    }
    const s = (a * height) / 2;

    document.getElementById("result3").textContent = s;
});