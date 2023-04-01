//highScore라는 boolean과 number가 들어갈 수 있는 변수를 만들어라
var highScore;
highScore = false;
highScore = 1234;
//문자와 숫자를 쓸수있는 배열 만들기 다만 한배열에 같이있으면안됨
var stuff1 = [];
stuff1 = [2, 3, 4];
stuff1 = ["1", "2"];
var colors = [];
//한사람의 이름으로 된 단일 문자열이나 여러명의 이름으로 된 배열을 받는 greet라는 함수를 만든다.
//이름이 하나라면 "Hello, <name>"와 같은 형태로 출력하고 여러개라면 이름 각각을 넣어 출력한다.
var funcName = ["영훈", "훈훈"];
function greet(funcName) {
    for (var _i = 0, funcName_1 = funcName; _i < funcName_1.length; _i++) {
        var i = funcName_1[_i];
        console.log("Hello, ".concat(i));
    }
}
greet(funcName);
var greet1 = function (person) {
    if (typeof person === 'string') {
        console.log("Hello, ".concat(person));
    }
    else {
        for (var _i = 0, person_1 = person; _i < person_1.length; _i++) {
            var p = person_1[_i];
            console.log("Hello, ".concat(p));
        }
        ;
    }
};
