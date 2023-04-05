//인터페이스는 객체의 형태를 묘사하는데에 사용된다.
//오직 객체에만 사용

interface Point {   //객체로 선언
    x:number;
    y:number;
}

const pt: Point = {x: 123, y: 1234}     //사용법

interface Person {
    readonly id: number;     //필수값
    first: string;
    last: string;
    nickname?: string;
    // sayHi: ()=> string;
    sayHi():string; //둘다사용가능
}

const thomas: Person = {    //위 Person인터페이스를 가져와 사용 예시
    id: 1234,
    first: "Yoo",
    last: "younghoon",
    nickname: "Hoon",
    sayHi: ()=>{
        return "Hi";
    }
};



interface Product {
    name: string;
    price: number;
    applyDiscount(discount: number) : number;   //함수를 객체에 넣고 파람값 number로 주고 return도 number로 받는다
};

const shoes: Product = {    //Product를 사용한 예시
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount(amount: number){
        const newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
}

console.log(shoes.applyDiscount(0.4));      //60        price에 1-0.4를 곱해줘서 나온값



//인터페이스는 만든 이후에 다시 열어서 새로운 프로퍼티를 추가 할 수 있다.
//덮어쓰거나 삭제하지 않고 추가되는 개념

interface Dog {
    name: string;
    age: number;
}

interface Dog{
    breed: string;
    bark(): string;
}


const elton: Dog = {
    name: "Elton",
    breed: "Shepherd",
    age: 1,
    bark() {
        return "wang";
    },
}

//위와 같이 추가되어 4개의 프로퍼티를 다 사용해 주어야한다.