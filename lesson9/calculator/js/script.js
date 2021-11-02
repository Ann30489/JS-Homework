$(document).ready(function () {

  function calculator() {
    let sum = "";
    let arrNum;
    let inputVal = document.getElementById("screen");
    $(".buttons .digit").on('click', function () {
      let num = $(this).attr('value');
      sum += num;
      $("#screen").html(sum);
      arrNum = inputVal.innerHTML.split("");
    });

    $(".buttons .operator").on('click', function (e) {
      e.preventDefault();
      let operator = $(this).attr('value');
      sum += operator;
      $("#screen").html(sum);
      arrNum = inputVal.innerHTML;
      if (/(?=(\D{2}))/g.test(sum)) {
        sum = arrNum.substring(0, arrNum.length - 1);
        $("#screen").html(sum);
      }

    });

    $("#equal").on('click', function () {
      let total = eval(sum);
      $("#screen").html(total % 1 != 0 ? total.toFixed(2) : total);
    });

    $("#clear").on('click', function () {
      sum = "";
      arr = [];
      $("#screen").html(0);
    });

  };
  calculator();
});
