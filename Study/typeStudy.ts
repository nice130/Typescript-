
//--타입스크립트 설정
// .ts     //타입스크립트
// .tsx    //타입스크립트에 jsx파일을 더한 것
// 자바스크립트로 컴파일시 터미널에 tsc 파일명.ts   을 써주면 js파일생성됨
console.log(Math.round(8.12316549874));


//--타입
// let movieTitle: string= "NoteBook";  //var,let,const 변수명 : 변수타입 = "내용"; 으로 이루어진다
//타입을 쓸땐 모두 소문자로 해준다.
//string으로 정해준곳엔 숫자를 넣을 수 없다.
//movieTitle = 3; 오류

//string , number , boolean , bigint , symbol 등이 있음
//하지만 문자열 숫자 불리언이 가장 흔하게 쓰는 원시 타입이다.
//변수 선언시 변수타입을 선언 안해도 타입스크립트에서 알아서 정해준다.
let test = "테스트";
test = "이건되는데";
// tset = 1; 이경우에는 안된다. 문자열로 처음 할당해놓았기 때문이다.
//꼭 선언해야하는 경우도 있는데 뒤에 정리하도록한다.

//any타입
//any타입일 경우에는 타입스크립트에선 에러가 생겨도 에러를 리턴하지 않는다.
function square(num){
    return num * num;
}
square(3);
square("이것도");
square(true);   //변수에 직접 할당할때처럼 오류가 나오지 않음

//위의 상황을 방지할때에는 fucntion 내에서도 타입을 정해주면된다
function square1(num : number){
    return num*num;
}
// square1("안됨");
square1(1);//가능

function greet(person : string):string{
    return `Hi there, ${person}!`
}
// greet(32) <=에러

//위와 같이 function 옆에 : string 을 이용하여 retrun 하는 타입을 정해주거나 알려줄 수 있다.
//둘이상 반환하는 함수도 있다(유니온타입) 뒤에 나옴


//void 타입 : 아무것도 반환하지 않는 함수의 반환 타입으로 사용
function printTwice(msg: string): void{
    console.log(msg);
    console.log(msg);
}
//위와같이 return이 없는 경우


//--never : 절대 반환되지 않아야 할 함수를 처리할 때 사용 ex)예외발생
//          또 실행을 중단하지 않는 함수 무한루프
function makeError(msg: string){
    throw new Error(msg);
}

// function gameLoop(): never{
//     while(true){
//         console.log("Game Loop Running");
//     };
//     // return true; 이와 같이 return이 있으면 에러
// }


//Objects : 자바스크립트의 객체타입과 만드는건 같다.
function printName(person: {first: string, last: string}): void{
    console.log(`${person.first} $${person.last}`)
}

printName({first:"Yoo", last: "YoungHoon"});

//객체에 지정된 name값이 아닌 다른 값을 넣으면 에러
// printName({f:"Yoo",last:"Hoon"}) 일시 첫번째 f는 없는 name값이기 때문에 오류가 나온다

//객체타입에 바로 값 넣기
let coordinate: { x: number; y: number } = { x: 34, y: 2 };

function randomCoordinate(): {x: number, y: number} {
    return { x: Math.random(), y: Math.random()};
}

