const {ref,toRefs,toRef, computed, reactive} = require("vue")


const fruits = ["orange", "banana", "mango", "ananas"]
const veges = ["sukuma", "tomato", "carrots"]
const combinedArr = [ ...fruits, ...veges]
console.log(combinedArr, "this is the combined array")


//export
 const evenOrOddNum = (num)=>{
   if(num % 2 === 0){
    return "even"
   }
   return "odd";
}



// importantant dig more
//export
 const multiplyNums = (num, num2)=>{
   let result = 0;

   for(let i= 0; i < num; i++){
      result = result + num2 //result += num2
   }
   return result;
}

// export const multiplyNums = (num, num2)=> num * num2



//_____________________setTimeOut(), setTimeInterval()
//setTimeout() runs the function once.
//setInterval() runs the function every set second or Time
const isSetInterval = setInterval(()=>{ 
  console.log("am printed every 2 seconds")
}, 2000)

// stop time intervaö after set time

setTimeout(()=> {
   clearInterval(isSetInterval, "function stops after 4 intervals")
}, 10000)



// __________________________ REACTIVE vEU


const person = ref({
    name :" felix"
    })
// let title = person.name + "magima";

// console.log(title)

person.name ="Oburu"

console.log(person.value.name, "here the value") // working

const title = computed(() => person.value.name + "this great")
console.log(title, " is tile")
console.log(title.value, " is title with value")

console.log(person.value, "here the value of the person")

/** with_____________ REACTIVE_____________ 
 * 
 * Note that reactive is only used on objects
*/


const isPerson = reactive({
   name :"felix"
})


const title2 = computed(() => isPerson.name + " Valentina")
// console.log(" is tile__xxÜÜ", title2)
 console.log(" is title with value", title2.value)
// console.log(isPerson.value, "here the value of the isPerson")

isPerson.name = "joice"
// console.log("with reactive----",title2);
console.log("with reactive----",title2.value);




const isPerson2 = reactive({
   fistName :"valent",
   lastName: "Atieno"
})


const title3 = computed(() => `${isPerson.name} ${isPerson.name}  Zeumer`)


const isNamelength = computed(()=> title3.value.length);

console.log(" is the length of the name", isNamelength.value.length)
isPerson2.fistName = "Atieno"
console.log("with reactive----",title3.value);


/**  __________destructing__________________using toRef() 
 * toRefs accepts only reactive object 
*/


const isPerson3 = reactive({
   firstName :"valentina",
   lastName: "Atieno"
})

const firstName = toRef(isPerson3, "firstName");
const lastName = toRef(isPerson3, "lastName");

const isComputeredTitle = computed(() => `${firstName.value} ${lastName.value}  with to ref`)
console.log("this is the value of a computered obj", isComputeredTitle.value);

isPerson3.firstName ="papa felix";
console.log("this is the computered title 1 ",  isComputeredTitle.value )

isPerson3.firstName ="oyuma";
console.log("this is the computered title two ",  isComputeredTitle.value )

isPerson3.lastName ="atieno";
console.log("this is the computered title three ",  isComputeredTitle.value )

/**_________________ toRefs() */


const isPerson4 = reactive({
   isFirstName :"valentina",
   isLastName: "Atieno"
})

const {isFirstName, isLastName}  = toRefs(isPerson4);

const isComputeredTitle2 = computed(() => `${isFirstName.value} ${isLastName.value}  with to toRefs()`)
console.log("default names ",isComputeredTitle2.value);
 isPerson4.isFirstName = "felix refs"
 console.log(isComputeredTitle2.value)

 isPerson4.isLastName = "oyuma refs"
 console.log(isComputeredTitle2.value)











