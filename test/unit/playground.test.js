//import { describe, it, expect } from "vitest"; //is now imported globally look at modification on vite.config
import { evenOrOddNum,  multiplyNums } from "../../src/playground";



describe("sum of two nums", ()=>{
       it("it returns sum of two numbers", ()=>{
                expect(2+3).toBe(5);
        });
})

/**
 *describe("even or odd num", ()=>{
    it("it return if a num is even or odd", ()=>{
             expect(evenOrOddNum(5)).toBe("odd");
     });
})

you can also test if  number is even by nesting
 */


describe("even or odd num", ()=>{

      describe("when num is even", ()=>{
        it("it return if a num is even or odd", ()=>{
            expect(evenOrOddNum(4)).toBe("even");
    });
      })
})


// describe("when num is odd", ()=>{ check test coverage
//     it("it return string odd", ()=>{
//           expect(evenOrOddNum(5)).toBe("odd");
//     });
// });

describe("multiplication", ()=>{
       it("multiples two nums", ()=>{
            expect(multiplyNums(2,3)).toBe(6)
       })
})



