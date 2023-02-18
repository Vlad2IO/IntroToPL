const input1 = document.querySelector("#form1 > fieldset > input.js-input-arr");
const btn1 = document.querySelector("#form1 > fieldset > button.js-btn-result");
const output1 = document.querySelector("#form1 > fieldset > p.js-output");

const input2 = document.querySelector("#form2 > fieldset > input.js-input-arr");
const btn2 = document.querySelector("#form2 > fieldset > button.js-btn-result");
const output2 = document.querySelector("#form2 > fieldset > p.js-output");

const input3 = document.querySelector("#form3 > fieldset > input.js-input-arr");
const btn3 = document.querySelector("#form3 > fieldset > button.js-btn-result");
const output3 = document.querySelector("#form3 > fieldset > p.js-output");

const input4 = document.querySelector("#form4 > fieldset > input.js-input-arr");
const btn4 = document.querySelector("#form4 > fieldset > button.js-btn-result");
const output4 = document.querySelector("#form4 > fieldset > p.js-output");

btn1.addEventListener("click", () => {
  output1.innerHTML = getSumOfNumbers(input1.value);
});
btn2.addEventListener("click", () => {
  output2.innerHTML = getCranesMadeByEachChild(input2.value);
});
btn3.addEventListener("click", () => {
  output3.innerHTML = isThisLuckyTicket(input3.value);
});
btn4.addEventListener("click", () => {
  output4.innerHTML = isPossibleGetPieceAfterOneBreak(input4.value);
});

/* Задача 2: */
function getSumOfNumbers(num) {
  if (
    (num = num
      .toString()
      .split("")
      .map(Number)
      .reduce((pv, cv) => pv + cv, 0))
  ) {
    return num;
  } else {
    return "Ошибка: Значение содержит не только цифры";
  }
}

/* Задача 4: */
function getCranesMadeByEachChild(num) {
  if ((num = Number(num.toString()))) {
    return [num / 6, (num / 6) * 4, num / 6];
  } else {
    return "Ошибка: Значение содержит не только цифры";
  }
}

/* Задача 6: */
function isThisLuckyTicket(num) {
  try {
    if (num === "") {
      throw "Ошибка: Пустое значение";
    }
    numArr = Array.from(num.toString()).map((el) => {
      if (isNaN(Number(el))) throw "Ошибка: Вы ввели не число";
      return el;
    });

    let half1 = numArr.slice(0, numArr.length / 2);
    let half2 = numArr.slice(numArr.length / 2);
    return getSumOfNumbers(half1.join("")) === getSumOfNumbers(half2.join(""))
      ? "yes"
      : "no";
  } catch (error) {
    return error;
  }
}

/* Задача 8: */
function isPossibleGetPieceAfterOneBreak(num) {
  try {
    if (num === "") {
      throw "Ошибка: Пустое значение";
    }
    [n, m, k] = num.toString().split(" ");
    return (res = k < n * m && (k % n === 0 || k % m === 0) ? "yes" : "no");
  } catch (error) {
    return error;
  }
}
