function twoFer(person) {
    if (person === void 0) { person = "you"; }
    return "One for ".concat(person, ", one for me.");
}
console.log(twoFer("영훈"));
console.log(twoFer());
var isLeapYear = function (year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? true : false;
};
console.log(isLeapYear(2012));
console.log(isLeapYear(2013));
