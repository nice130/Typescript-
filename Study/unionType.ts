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
// coords.push({x:3})  --오류  이렇게 2개가선언되어있는 타입인 경우 두개를 정확하게 입력해 줘야한다.



// 리터럴 타입  Literal Types
let zero: 0 = 0;  //zero를 number가 아닌 0으로 선언하면
// zero=1;  --오류      다른값을 넣으려고 했을때 0이 아니면 오류가 난다.

let hi: "hi" = "hi"; //  문자열도 똑같이 hi를 넣으면 hi만 넣을수있다.
hi="hi";
// hi="bye"  --오류

let mood: "Happy" | "Sad" = "Happy";    //mood에 Happy와 Sad를 타입을 넣으면
mood = "Sad"         //"Happy" or "Sad" 만 넣어줄 수 있다.
// mood  = "angry"      --오류

type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Satterday" | "Sunday" | 1;  //문자뿐만아니라 숫자도 같이 넣어줄 수 있음

let today: DayOfWeek = "Satterday"  //DayOfWeek에 요일모두를 타입으로 넣어 필요한 요일을 넣어 사용하는 예시

//이처럼 다양한 옵션을 넣어 사용할 때 유용하다. 다만 특정 타입의 값만 넣어서 쓸 수 있다.

