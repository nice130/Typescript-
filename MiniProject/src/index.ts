const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;    //형변환을 해줌

btn.addEventListener("click",function(){
    alert(input.value);
    input.value='';
})
