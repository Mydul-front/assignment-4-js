/* function calculateVAT(price) {
  if (typeof price !== "number" || price < 0) {
    return "invalid";
  }
  const VAT = (price * 7.5) / 100;
  return VAT;
}
const results = calculateVAT(1500);
console.log(results); */

/* function validContact(contact) {
  if (typeof contact !== "string") {
    return "Invalid";
  }
  if (contact.length !== 11) {
    return false;
  }

  if (!contact.startsWith("01")) {
    return false;
  }

  if (contact.includes(" ")) {
    return false;
  }

  return true;
}

const results = validContact("01750345651");
console.log(results); */

/* function  willSuccess( marks ) {
          let pass =0;
          let fail =0;
          if(!Array.isArray(marks)){
               return 'Invalid';
          }
          for(let i=0; i<marks.length; i++){
               if(typeof marks[i] !== 'number'){
                   return "Invalid";
               }
                
               if(marks[i] >=50){
                    pass++;
               }
               else{
                    fail++;
               }
          }
          return pass > fail;

}
const results = willSuccess(70,80);
console.log(results); */

/* const person1 = {
  name: "kader",
  gender: "male",
  age: 25,
};
const person2 = { name: "mitu", gender: "female", age: 20 };

function validProposal(person1, person2) {
  if (
    typeof person1 !== "object" ||
    typeof person2 !== "object" ||
    Array.isArray(person1) ||
    Array.isArray(person2)
  ) {
    return "Invalid";
  }
  if (person1.gender === person2.gender) {
    return false;
  }
  const ageDifference = Math.abs(person1.age - person2.age);
  if (ageDifference > 7) {
    return false;
  }
  return true;
}

const results = validProposal(person1, person2);
console.log(results); */





function  calculateSleepTime( times ) {
          for(let i=0; i<times.length; i++){
               if(typeof times[i] !== 'number'){
                    return 'Invalid';
               }
               
          }
}

