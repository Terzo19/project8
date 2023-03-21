// Write function below
const subLength = (string,char) => {
  let newString = string.split("");
  let counter = 0;
  let indexDiff = [];
  let difference = 0;
  console.log(newString);
  
   for(let i = 0 ; i < newString.length ; i++){
       if(newString[i] === char){
         counter++;
         indexDiff.push(i);
         console.log(`counter: ${counter}`);
         console.log(`indexes: ${i}`);
       }
   }
 
   difference = indexDiff[1] - indexDiff[0] - 1; //  we add -1 because each index starts at 0 and not at 1
 
   if(counter === 2){
     return difference + 2; // 2 is added because we have to include the positions of the two characters in the length between them
   }else { 
     return 0;
   }
 }
 
 console.log(subLength('manchester', 'e'));