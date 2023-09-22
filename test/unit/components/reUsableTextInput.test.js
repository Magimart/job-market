import { screen, render } from "@testing-library/vue";
import { describe, it } from "vitest";
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
   
       let awaitedUserInput =  await userEvent.type(inputData, "n");
   
    });

});










