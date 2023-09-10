import { screen, render } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import ReUsableInput from "../../../src/components/IsReUsableInputs.vue";
import  userEvent  from "@testing-library/user-event";



describe("ReUsableInput", ()=>{

    it("check if user has entered someing or not", async()=>{
  
        const {emitted} =  render(ReUsableInput, {
            props: {
                modelValue: ""
            },
       });

        const inputData = screen.getByRole("textbox");
        console.log("this is the user text------xxx---x",  inputData)
   
         console.log(emitted())
       let awaitedUserInput =  await userEvent.type(inputData, "n");
        console.log("is emitted", emitted());

    });

});










