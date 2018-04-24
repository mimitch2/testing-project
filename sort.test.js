let acaDash = require("aca-dash-mimitch2");
let sort = acaDash.sort;

const names = ["Jon","Bob","Ted","Barney","Lilly","Robin","Saul","Axe"];



let helloArray = filter(names,onlyThreeLetters);

test('filter finds all names with 3 letters', () => {
 expect(helloArray).toEqual(["Jon","Bob","Ted","Axe"]);
});