"use strict";
var btn = document.getElementById("btn");
var input = document.getElementById("todoinput"); //형변환을 해줌
btn.addEventListener("click", function () {
    alert(input.value);
    input.value = '';
});
