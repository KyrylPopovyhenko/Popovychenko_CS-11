function calculateHeron(a, b, c) {
        const p = (a + b + c) / 2;
        const s = Math.sqrt(p * (p - a) * (p - b) * (p - c));

        return s;
    }

//Калькулятор за формулою Герона
const button = document.getElementById("calculate");

button.addEventListener("click", function() {
    
    const [a, b, c] = Array.from(document.querySelectorAll('.side'), item => Number(item.value));

    if (a + b + c <= 2 * Math.max(a, b, c) || [a, b, c].some(val => val <= 0 || !Number.isFinite(val))) {
        document.getElementById("result").textContent = "Incorrect sides";
        return
    }
    const s = calculateHeron(a, b, c);
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

//За 3 сторонами і радіусом описаного кола
const button4 = document.getElementById("calculate4");

button4.addEventListener("click", function() {
    const [a, b, c] = Array.from(document.querySelectorAll('.side3'), item => Number(item.value));
    const r = Number(document.getElementById('radius').value);

    if (a + b + c <= 2 * Math.max(a, b, c) || [a, b, c, r].some(val => val <= 0 || !Number.isFinite(val))) {
        document.getElementById("result4").textContent = "Incorrect values";
        return
    }

    const sHeron = calculateHeron(a, b, c);
    const correctR = (a * b * c) / (4 * sHeron);

    if (Math.abs(correctR - r) > 0.001) {
        document.getElementById("result4").textContent = "Incorrect radius";
        return
    }
    
    const s = (a * b * c) / (4 * r);

    document.getElementById("result4").textContent = s;
});

// Перевірка на число-паліндром
const button5 = document.getElementById("calculate5");

button5.addEventListener("click", function() {
    const number = document.getElementById('pali').value;

    if (!Number.isInteger(Number(number)) || number === "" || Number(number) < 0) {
        document.getElementById("result5").textContent = "Incorrect number";
        return
    }

    for (let i = 0; i < number.length / 2; i++) {
        if (number[i] !== number[number.length - 1 - i]) {
            document.getElementById("result5").textContent = "Не паліндром";
            return
        }
    }
    
    document.getElementById("result5").textContent = "Паліндром";
})


// Перевірка на анаграму
const button6 = document.getElementById("calculate6");

button6.addEventListener("click", function() {
    const [word, word2] = Array.from(document.querySelectorAll('.word'), item => item.value.toLowerCase().trim());

    if (word2 === "" || word === "") {
        document.getElementById("result6").textContent = "Please enter two words";
        return
    }

    const letters = word.split("").sort().join("");
    const letters2 = word2.split("").sort().join("");

    if (letters === letters2) {
        document.getElementById("result6").textContent = "Анаграма";
        return
    } 

    document.getElementById("result6").textContent = "Не анаграма";
})

// Число Фібоначі за кроком
const button7 = document.getElementById("calculate7");

button7.addEventListener("click", function() {

    const key = Number(document.getElementById('step').value);

    if (key <= 0 || !Number.isInteger(key) || !Number.isFinite(key)) {
        document.getElementById("result7").textContent = "Incorrect number";
        return
    }

    let a = 1;
    let b = 1;

    for (let i = 3; i <= key; i++) {
        let c = a + b;
        a = b;
        b = c;

    }

    document.getElementById("result7").textContent = b;
})

// Число Фібоначі за кроком
const button8 = document.getElementById("calculate8");

button8.addEventListener("click", function() {

    const key = Number(document.getElementById('value').value);

    if (key <= 0 || !Number.isInteger(key) || !Number.isFinite(key)) {
        document.getElementById("result8").textContent = "Incorrect number";
        return
    }

    let a = 1;
    let b = 1;

    while (b < key) {
        let c = a + b;
        a = b;
        b = c;
    }
    
    if (b !== key) {
        document.getElementById("result8").textContent = "Не у послідовності";
        return
    }

    document.getElementById("result8").textContent = "У послідовності";
})
