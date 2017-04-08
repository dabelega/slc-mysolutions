 module.exports = {

 fizzBuzz: function(num) {
  var msg = '';
  if (num % 3!== 0 && num % 5 !== 0){
    return num;
  }
  
  else {
    if (num % 3 === 0){
      msg += "Fizz";
   }
    if (num % 5 === 0){
      msg += "Buzz";
    }
  }
  return msg;
}
}