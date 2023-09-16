import userEvent from "@testing-library/user-event";
import { describe, expect } from "vitest";
import { screen, render } from "@testing-library/vue";
import CollapsableAccordion from "../../../src/components/CollapsableAccordion.vue";



describe("collapsal acordion", ()=> {

    it("it test open and close accordion", async()=>{
        render(CollapsableAccordion, {
            global: {
                stubs:{
                FontAwesomeIcon:true,
                }, 
            },
            props: {
                hearder: "My category"
            },
            slots: {
                default: `<h3>nested child</h3>`
            }
        } );
        
        expect(screen.queryByText("nested child")).not.toBeInTheDocument()

       const button = screen.getByRole("button", {name:/my category/i});
        await userEvent.click(button);
       expect(screen.getByText("nested child")).toBeInTheDocument()



    });
    it("note that test of title and decription are all same as the above")

     
});









