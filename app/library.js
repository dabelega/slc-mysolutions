module.exports = {

getPrimes: function(n){


  var primeArray = [];
  //Return false if n is less than zero
  if(n <= 0){
    return false;
  }
  
  
        for(var num = 1; num <= n; num++){
          var tally = 0;
          for(var i = num; i>=1; i--){
              if(num % i === 0){
                tally = tally + 1;
              }
            }
      
         if (tally === 2){
            primeArray.push(num);
         }
      }
      return primeArray;
  
  
    } 
}
