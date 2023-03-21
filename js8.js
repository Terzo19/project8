const subLength = (string,char) => {
  let newString = string.split("");
  let counter = 0;
  let indexDiff = [];
  let difference = 0;
  console.log(newString); // making sure that newString was converted into an array
  
   for(let i = 0 ; i < newString.length ; i++){
       if(newString[i] === char){
         counter++;
         indexDiff.push(i);
         console.log(`counter: ${counter}`);  // making sure that the counter works
         console.log(`indexes: ${i}`);     // checking if the index number of the characters is correctly pushed into the indexDiff array
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
