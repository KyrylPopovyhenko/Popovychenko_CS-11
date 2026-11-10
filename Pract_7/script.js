
//Калькулятор за формулою Герона
const button = document.getElementById("calculate");

button.addEventListener("click", function() {
    
    const [a, b, c] = Array.from(document.querySelectorAll('.side'), item => Number(item.value));

    if (a + b + c <= 2 * Math.max(a, b, c) || [a, b, c].some(val => val <= 0 || !Number.isFinite(val))) {
        document.getElementById("result").textContent = "Incorrect sides";
    } else {
        const p = (a + b + c) / 2;
        const s = Math.sqrt(p * (p-a) * (p-b) * (p-c));

        document.getElementById("result").textContent = s;
    }
});

//За двума сторонами і кутом між ними
