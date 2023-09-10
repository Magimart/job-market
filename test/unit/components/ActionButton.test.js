import { screen, render } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import { userEvent } from "@testing-library/user-event";
import ActionBtn from "../../../src/components/ActionBtn.vue";


describe("the test for action button", ()=>{
     it("it tests action btn components", ()=>{

         render(ActionBtn  , {
             props:{
                text: "click me",
                type:"primary"
             }
         })

         const isActionBtn = screen.getByRole("button", {
              name: /click me/i 
         })
         expect(isActionBtn).toBeInTheDocument();
     })

     it("checks the style applied", ()=>{

         render(ActionBtn  , {
             props:{
                text: "click me",
                type:"primary"
             }
         })

         const isActionBtn = screen.getByRole("button", {
              name: /click me/i 
         })
         expect(isActionBtn).toHaveClass("primary");
     })
})








