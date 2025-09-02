let serials = "S100S S300S S5000S S950000S";

//S[3Numbers]S
console.log(serials.match(/s\d{3}s/gi));

//S[4 or 5 Numbers]S
console.log(serials.match(/s\d{4,5}s/gi));

//S[at last 4 Numbers]S
console.log(serials.match(/s\d{4,}s/gi));

//RegExp Quantifiers part 3

let myString = "We Leve Programming";

let names = "1Osamaz 2Ahmedz 3Mohamad 4MoustafaZ 5GamalZ";

//$ => End with something:

console.log(/ing$/gi.test(myString));
console.log(/z$/gi.test(names));

// ^ => Start with something:
console.log(/^we/gi.test(myString));
console.log(/^z/gi.test(names));

// ? => Followed by something , ?! => Not Folloewd By Something

console.log(names.match(/\d\w{5}(?=z)/gi));

console.log(names.match(/\d\w{8}(?!=z)/gi));
