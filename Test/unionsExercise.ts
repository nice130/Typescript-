
//highScore라는 boolean과 number가 들어갈 수 있는 변수를 만들어라
let highScore: boolean | number;
highScore = false;
highScore = 1234;


//문자와 숫자를 쓸수있는 배열 만들기 다만 한배열에 같이있으면안됨
let stuff1: string[] |number[]= []; 

stuff1= [2,3,4];
stuff1= ["1","2"];

//SkillLevel이라는 리터럴 타입을 만든다.
//"Beginner", "Intermediate", "Advanced" 로 만든다.
type SkillLevel = "Beginner" | "Intermediate" | "Advanced";



//SkiSchoolStudent 라는 타입을 만든다 name은 문자열 age는 숫자로 
//sport 문자열 리터럴 타입으로 "ski" | "snowboard"여야 한다.
//level은 SkillLevel 타입에서 정의한 값을 갖는다.

type SkiSchoolStudent = {
    name: string;
    age: number;
    sport : "ski" | "snowboard";
    level : SkillLevel; 
}

//RGB 색상을 나타내는 타입을 정의 
//타입 별칭 R,G,B를 만든다
//HSL 색상을 나타내는 타입 정의
//타입 H,S,L 을 만든다
//RGB와 HSL 색상 타입이 혼합된 colors라는 배열을 만든다.
type RGB={
    r:number;
    g:number;
    b:number;
}
type HSL={
    h:number;
    s:number;
    l:number;
}

let colors: (RGB | HSL) [] = [];

//한사람의 이름으로 된 단일 문자열이나 여러명의 이름으로 된 배열을 받는 greet라는 함수를 만든다.
//이름이 하나라면 "Hello, <name>"와 같은 형태로 출력하고 여러개라면 이름 각각을 넣어 출력한다.
let funcName: string[] = ["영훈","훈훈"]
function greet(funcName): void{
    for(let i of funcName){
        console.log(`Hello, ${i}`);
    }
}
greet(funcName);

const greet1 = (person: string | string[]) : void =>{
    if(typeof person === 'string'){
        console.log(`Hello, ${person}`);
    }else{
        for (let p of person){
            console.log(`Hello, ${p}`);
        };
    }
}