//title은 readonly로 만들고 originalTitle은 선택적으로 만들어라
//getProfit이라는 함수를 만들어 Movie객체의 grossWorldwid- budget 의 값을 리턴해라
var dune2 = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUS: 108327830,
        grossWorldwide: 400671789,
    },
};
var cats2 = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
        budget: 99700000,
        grossUS: 25715012,
        grossWorldwide: 1823851529,
    },
};
// function getProfit2(movie:Movie):number{
//     return movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
// }
// function getProfit2(movie:Movie): number{
//     const {grossWorldwide, budget} = movie.boxOffice;
//     return grossWorldwide - budget;
// }
function getProfit2(_a) {
    var _b = _a.boxOffice, grossWorldwide = _b.grossWorldwide, budget = _b.budget;
    return grossWorldwide - budget;
}
console.log(getProfit2(dune2));
console.log(getProfit2(cats2));
