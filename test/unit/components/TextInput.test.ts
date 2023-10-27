import { screen, render } from "@testing-library/vue";
// import { describe, expect, it } from "vitest";
import  userEvent  from "@testing-library/user-event";
import TextInput from "@/components/TextInput.vue";



describe("User inputed data", ()=>{


    it("check if user has entered someing or not", async()=>{
  
        const {emitted} =  render(TextInput, {
            props: {
                modelValue: ""
            },
       });

        const inputData = screen.getByRole("textbox");
        console.log("this firing ______________üüüüüüüüüüüüüüüüüüüü")
        await userEvent.type(inputData, "felix");
        const isMessage = emitted()["update:modelValue"];

        expect(isMessage).toEqual([["f"], ["fe"], ["fel"],["feli"], ["felix"]])  
    });

});










