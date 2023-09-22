import { screen, render } from "@testing-library/vue";
 import SearchResultNav from '@/components/SearchResultNav.vue';
import { expect, it } from "vitest";
import { RouterLinkStub } from "@vue/test-utils";

describe("SearchResultNav", ()=>{
   it("display  job search results count", ()=> {
 
      const $route = {
        name: "searchResults"
      }

        render(SearchResultNav,   {      
                global: {
                    mocks:{ 
                     $route: $route
                    },
                    stubs:{
                    FontAwesomeIcon:true,
                    RouterLink: RouterLinkStub,
                    }
                },
               
        });

    let isCompany = screen.getByText(/123/i);
      expect(isCompany).toBeInTheDocument()
   })
});

/**/

describe("SearchResultNav", ()=>{
    it("when the user is not on page does not display job search result count", ()=> {
  
       const $route = {
         name: "home"
       }
 
         render(SearchResultNav,   {      
                 global: {
                     mocks:{
                      $route: $route
                     },
                     stubs:{
                     FontAwesomeIcon:true,
                     RouterLink: RouterLinkStub,
                     }
                 },
                
         });
 
     const isScreen = screen.get;

     console.log("________________________ is screen___________",isScreen)
     let isJobCount = screen.queryByText("123"); 
       expect(isJobCount).not.toBeInTheDocument();

    })
 });


