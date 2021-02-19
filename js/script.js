const monitor = $("#monitor");
let curNum = "";
let curOpe = "";
let hasFirstNum = false;
let tmpNum = "";
let tmpResult = "";

$(".numpad").click(function () {
  curNum += $(this).text();
  outMonitor(curNum);
});

$(".operator").click(function () {
  curOpe = $(this).text();
  if (!hasFirstNum) {
    tmpNum = Number(curNum);
    hasFirstNum = true;
    curNum = "";
  } else {
    //resultOut
    tmpNum = tmpResult;
    _result();
  }
});

$("#equal").click(_result);

function _result() {
  if (!hasFirstNum) {
    //do nothing
  } else {
    tmpResult = result(tmpNum, curOpe, Number(curNum));
    outMonitor(tmpResult);
    curNum = "";
  }
}

function result(firstNum, ope, secondNum) {
  switch (ope) {
    case "+":
      return firstNum + secondNum;
    default:
      break;
  }
}
function outMonitor(num) {
  monitor.html(num);
}
