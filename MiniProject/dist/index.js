"use strict";
function printDouble(msg) {
    console.log(msg);
    console.log(msg);
}
printDouble("안녕!");
//dom 다루기
//document에 있는 모든것들은 타입이 정해져있다.
//그래서 사용할때 타입을 지정해줘야한다.
//"target": "es5" 이와같이 
//다른버전에서 지원하지않는 target을쓸때에는 tsconfig.json에서 lib에 추가하여 사용하도록한다.
