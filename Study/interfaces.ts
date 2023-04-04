//인터페이스는 객체의 형태를 묘사하는데에 사용된다.
//오직 객체에만 사용

interface Point {
    x:number;
    y:number;
}

const pt: Point = {x: 123, y: 1234}

interface Person {
    readonly id: number;     //필수값
    first: string;
    last: string;
    nickname?: string;
    // sayHi: ()=> string;
    sayHi():string; //둘다사용가능
}

const thomas: Person = {
    id: 1234,
    first: "Yoo",
    last: "younghoon",
    nickname: "Hoon",
    sayHi: ()=>{
        return "Hi";
    }
};
