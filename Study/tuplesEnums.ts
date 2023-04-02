// 튜플         --기본적으로 배열의 모습을하는데 길이와 타입이 고정되어 있음

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