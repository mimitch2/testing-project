let acaDash = require("aca-dash-mimitch2");
let filter = acaDash.filter;

const numbers = [34, 200, 49, 3, 87, 43];



let helloArray = filter(names,onlyThreeLetters);

test('filter finds all names with 3 letters', () => {
 expect(helloArray).toEqual(["Jon","Bob","Ted","Axe"]);
});


