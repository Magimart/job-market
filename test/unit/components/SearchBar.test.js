import { screen, render } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import SearchBar from "../../../src/components/SearchBar.vue";
import userEvent  from "@testing-library/user-event";



describe("job search form result", ()=>{
   describe("decribes when the user submits a form", ()=>{
        it("it directs user to a page with searched results paramater", async()=>{
          
            const pushVTestMock = vi.fn() 
            const $router = {pushVTestMock};

           
            render(SearchBar, {
                 global:{
                    stubs:{
                      FontAwesomeIcon:true,
                    },
                    mocks:{
                        $router: $router
                    }
                 }
            });

          const isUserInput =  screen.getByRole('textbox', {  name: /proffession/i});
          await userEvent.type(isUserInput, "web developer");
           
          const isLocationInput =  screen.getByRole('textbox', {name: /area/i});
          await userEvent.type(isLocationInput, "Berlin");


          const isSubmitButton = screen.getByRole('button', {
            name: /search/i
          })

          // assimilate click event triggered from user
          await userEvent.click(isSubmitButton)

           expect(pushVTestMock).toHaveBeenCalledWith({
              name: "searchResults", 
              query:{ userInput: "web developer", location: "Berlin"}
           })

        });
   
   });
})


