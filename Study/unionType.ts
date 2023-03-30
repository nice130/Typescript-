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