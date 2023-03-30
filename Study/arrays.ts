//변수명: 타입[] = [] 로 정의해줄수있다
const activeUsers: string[] = [];
activeUsers.push("hoon");

const ageList: number[] = [45,56,13];
ageList[0] = 99;
// ageList[0] = "asd" 안됨

const bools: Array<boolean> = [];
const bools2: boolean[] = [];   //bools와 bools2는 같다 표기만 다르게 한것

type Point2 = {
    x: number,
    y: number
}

const coords: Point2[] = [];    //type오브젝트를 미리만들고 배열을 입힐 수도 있다.
coords.push({x:23, y:8});
// coords.push({x:23, y:"8"})  다른타입을 넣을 수 없다.



//다차원 배열
const board: string[][] = [["X","O","X"],["X","O","X"],["X","O","X"]];
