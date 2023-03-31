// 유니온타입 --숫자 또는 문자열등으로 선언하거나 특정 함수가 두 가지 타입을 모두 쓸 수 있음
let age : number|string|boolean = 21;
age = 23;
age = "24";
age = true;
//이렇게 여러 타입을 넣을 수 있다.

type Point = {
    x: number;
    y: number;
};

type Loc = {
    lat: number;
    long: number;
}

let coordinates: Point | Loc ={x: 1, y: 34}

coordinates = {lat: 321.213, long: 23.233};

//function 에 유니온 타입 입히기
function printAge(age: number | string): void {
    console.log(`저는 ${age} 살 입니다.`)
}
printAge(33);
printAge("33");

function calculateTax(price: number | string, tax: number){
    if(typeof price === "string"){
        price = parseFloat(price.replace("$",""));
    }
    return price * tax;
}

// 두가지이상 타입을 갖는 배열 유니온타입
// 괄호를 넣어 묶어준 후 배열선언해 준다
const stuff: (number | string)[]=[1,2,3,"asd"]
// const stuff1: number[] | string[]=[1,2,3,"ㅁㄴㅇㄹ"] 이경우는 숫자만 들어가는 배열이거나 문자만 들어가는 배열

//만들어진 두가지 타입을 가져온다면 그 타입을 맞춰줘야한다.
const coords: (Point | Loc)[] = []; //위에 만들어놓은 타입
coords.push({lat: 321.213, long:23.334}); 
// coords.push({x:3}) 이렇게 2개가선ㄴ언되어있는 타입인 경우 두개를 정확하게 입력해 줘야한다.