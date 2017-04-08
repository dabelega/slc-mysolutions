

var myApp = require('../app/library.js');
var jasmine = require('jasmine');

describe ("Prime Tests", function() {

  it("should return '[]' for an empty string input", function(){
    expect(myApp.getPrimes()).toBe([]);
  });

  it("should return '[2,3,5]' for input 5", function(){
     expect(myApp.getPrimes(5)).toBe([2,3,5]);

  });

  it("should return 'false' for input 0", function(){
     expect(myApp.getPrimes(0)).toBe(false);
  });

  
  it("should return 'false' for negative input", function(){
     expect(myApp.getPrimes(-10)).toBe(false);
  });
    
 it("should return '[2,3,5,7,11,13,17]' for input 17", function(){
   expect(myApp.getPrimes(17)).toBe([ 2, 3, 5, 7, 11 , 13 , 17 ]);

  }); 


});



