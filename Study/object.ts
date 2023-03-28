//객체타입에 바로 값 넣기
let coordinate: { x: number; y: number } = { x: 34, y: 2 };

function randomCoordinate(): {x: number, y: number} {
    return { x: Math.random(), y: Math.random()};
}
function doublePoint(point: {x:number; y:number}): {
    x: number;
    y: number;
}{
    return {x: point.x *2, y: point.y * 2};
}


//타입 별칭 만들기       위 예시들처럼 만들지않고
type Point = {
    x: number;
    y: number;
}
let coordinate2 : Point = {x: 34, y: 2};        //coordinate2는 변수명 Point는 불러올 Type 이름
function doublePoint2(point: Point): Point{     //point 는 사용할 파람명 Point는 불러온 Type형식의 이름
    return {x: point.x *2, y: point.y * 2};
}
//이처럼 x와 y의 타입을 정해준 다음 type 이름을 불러 값을 넣을 수 있다.
//타입스크립트 규약은 아니지만 type 이름은 앞에 대문자로 넣어준다.

//Nested Objects : 개체 유형 매개 변수가 중첩된 함수 :  오브젝트안에 오브젝트가 있는경우?
type Song = {
    title : string;
    artist : string;
    numStreams : number;
    credits : { album: string; wirter: string};
};

function calculatePayout(song:Song): number{            //노래 재생1회당 0.4원 들어온다고 해서 걍 넣음ㅋㅋ
    return song.numStreams * 0.4
}

function printSong(song: Song): void {
    console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song ={
    title:"사랑했어",
    artist:"전상근&요이치로",
    numStreams: 12312354,
    credits: {
        album:"사랑했어",
        wirter:"Kz,김혜광,정수민"
    }
}

calculatePayout(mySong);
printSong(mySong);
//둘다 에러없음

//선택적 프로퍼티 생성도 가능하다 객체안에 프로퍼티를 다 안넣어도됨
type Point1 = {
    x:number;
    y:number;
    z?:number;   //프로퍼티명 뒤에 ? 를 넣어주면 된다.
}

const myPoint1: Point = {x:1, y:1}; //z를안넣어주어도 오류가안난다

//readonly 객체내의 특정 프로퍼티를 표시하거나 또는 배열이나 클래스에 접근할 때 사용
//단어그대로 읽기만 가능하고 수정 불가능
type User = {
    readonly id: number; //id가 변하면 안된다고 가정했을떄
    username: string;
}

const user: User = {
    id : 1234,
    username: "영훈"
}
console.log(user.id); //id를 그냥 불러올때 오류가안나지만
//user.id = 13541351  --id값을 변경하려고 하면 오류가남

//교차 타입 (intersection type)
type Circle = {
    radius: number;
};

type Colorful = {
    color: string;
};

type ColorfulCircle = Circle & Colorful; //여기서 아래처럼 오브젝트로 타입을 추가할 수도 있다.
type ColorfulCircle2 = Circle & Colorful & {
    count: number;
}

const happyFace: ColorfulCircle = {
    radius: 4,
    color : "yellow",
}

const happyFace2: ColorfulCircle2 = {
    radius: 6,
    color: "blue",
    count: 5,
}