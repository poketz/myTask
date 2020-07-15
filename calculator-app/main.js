let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let selectSign = document.getElementById("selectSign");
let result = document.getElementById("result");
let selected;

let test = function () {
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  let num1 = parseInt(input1);
  let num2 = parseInt(input2);
  switch (selected) {
    case "+":
      result.innerHTML = num1 + num2;
      break;
    case "-":
      result.innerHTML = num1 - num2;
      break;
    case "×":
      result.innerHTML = num1 * num2;
      break;
    case "÷":
      result.innerHTML = num1 / num2;
      break;
  }
};

let hugou = function (selectHugou) {
  switch (selectHugou) {
    case 0:
      selectSign.innerHTML = "+";
      selected = "+";
      break;
    case 1:
      selectSign.innerHTML = "-";
      selected = "-";
      break;
    case 2:
      selectSign.innerHTML = "×";
      selected = "×";
      break;
    case 3:
      selectSign.innerHTML = "÷";
      selected = "÷";
      break;
  }
};

let reset = function () {
  selectSign.innerHTML = "ここに符号を表示してください";
  result.innerHTML = "0";
  input1.value = "";
  input2.value = "";
};
