
module.exports = {

aritGeo: function(myArray) {
  if(myArray.length === 0){
    return 0;
  }
  
  var aDiff = myArray[1] - myArray[0];
  var gRatio = myArray[1]/myArray[0];
  var aCounter = 0;
  var gCounter = 0;
  
  for(var i = 0; i < myArray.length - 1; i++){
    if(myArray[i + 1] - myArray[i] === aDiff){
      aCounter += 1;
    }
    
    if(myArray[i + 1]/myArray[i] === gRatio){
      gCounter += 1;
    }
  }
  
  if(aCounter === myArray.length - 1){
    return "Arithmetic";
  }else if(gCounter === myArray.length - 1){
   return "Geometric"; 
  }else{
    return -1;
  }
  
}
}
