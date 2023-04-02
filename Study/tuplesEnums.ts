// 튜플         --기본적으로 배열의 모습을하는데 길이와 타입이 고정되어 있음
//자바스크립트에는 존재하지 않는 개념

const color: [number,number,number] = [23,51,23];
// const color2: [number,number,number] = [23,51,23,15];              
//위의 경우 number3개를 선언했는데 4개를 넣어주어 에러

 type HTTPResponse = [number, string];

 const goodRes: HTTPResponse = [200,"OK"];
//  const goodRes1: HTTPResponse = ["OK",200];
//위의 경우 순서가 달라져서 에러

goodRes[0] = 40; //첫번째에 number로 들어가있으므로 바로 값을 넣을 수 있음
// goodRes[0] = "40";   --같은 type이 아닐시에는 에러

//튜플은 push와 pop을 할 수 있다.
//튜플은 백그라운드에서 실행되는 배열이기떄문에 배열이 생성된 후 푸시를 사용하면 tpyescript가 오류를 표시하지 않는다.
goodRes.push(1351);
goodRes.push("12345");
//이상하다....ㅋㅋ
goodRes.pop()
goodRes.pop()
goodRes.pop()
goodRes.pop()
//이렇게 하면 빈배열이됨

const responses: HTTPResponse[] = [[404,"Not Fount"],[200,"OK"]];
//위처럼 값을 넣을때에는 그 타입만 지켜주면 됨



//Enum          --명명된 상수 집합을 정의할 수 있다...? 반복적으로 참조하는 값의 집합이 있을 경우에 사용
//보통 0에서 1씩 증가하는 숫자를 사용하게 된다.
//문자열로도 지정은 가능하다.
//이 역시 자바스크립트에는 없음

//위, 아래, 왼쪽, 오른쪽 // 대기중,발송됨, 발송완료  등

enum OrderStatus { 
    PENDING,    //0
    SHIPPED,    //1
    DELIVERED,  //2
    RETURNED,   //3
}
const myStatus = OrderStatus.DELIVERED;
//myStatus의 값은 2가 들어간다

function isDelivered(status: OrderStatus){
    return status === OrderStatus.DELIVERED;        //여기도 리턴2가된다.
}


enum  ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right",
    ERROR = 23,
}
//꼭 같은 타입이 들어갈 필요는 없다.

ArrowKeys.UP //의 값은 "up"


//enum은 실제로 JavaScript에 영향을 미치게 된다. 추가적인 코드로 나타내게 됨
//위의 OrderStatus를 js로 바꾸면

// var OrderStatus;
// (function (OrderStatus) {
//     OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
//     OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
//     OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
//     OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
// })(OrderStatus || (OrderStatus = {}));

//위와 같이 나온다.

const order ={
    orderNumber: 32154,
    status : OrderStatus.PENDING   
}
//위처럼 제시했을때 enum OrderStatus로 선언하면 똑같이 js에서 출력되지만
//const enum OrderStatus로 선언을 하게되면 
const order1 ={
    orderNumber: 32154,
    status : 0
}

//PENDING은 0의 값을 가지고 불변한 속성을 갖기 때문에 0으로 js에 표기된다. 문자열인경우에는 문자열로 바로 표기된다.