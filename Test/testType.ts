function twoFer(person: string = "you"): string{

    return `One for ${person}, one for me.`
}

console.log(twoFer("영훈"));
console.log(twoFer());

const isLeapYear = (year: number): boolean =>{
    return (year % 4 === 0 && year %100 !==0) ||year % 400 === 0 ? true : false;
}

console.log(isLeapYear(2012));
console.log(isLeapYear(2013));