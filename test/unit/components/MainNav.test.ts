import { screen, render } from "@testing-library/vue";
import MainNav from '@/components/MainNav.vue';
import { expect, it } from "vitest";
import userEvent  from "@testing-library/user-event";
import { RouterLinkStub } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { useUserStore } from "../../../src/stores/users";
import type { Mock } from "vitest";

import { useRoute } from "vue-router";
vi.mock("vue-router")


describe(MainNav, ()=>{

    const  routeMock = useRoute as Mock;
  
      const renderMainNav = ()=>{

          routeMock.mockReturnValue ({name: "home"});
          const pinia = createTestingPinia()

          render(MainNav ,   {                     
              global: {
                  plugins: [pinia],
                  stubs:{
                  FontAwesomeIcon:true,
                  RouterLink: RouterLinkStub,
                  }
               }
            }
           );
        }
   it("this displays company name", ()=> {
      renderMainNav()

        // screen.getByText("job makts");
        const isCompany = screen.getByText("job makts");
        console.group(isCompany)

        expect(isCompany).toBeInTheDocument();
   });

//    it("this displays nav items", ()=>{

//         renderMainNav();

//         const isListNames = screen.getAllByRole("listitem")
//         const isArrayOfItems = isListNames.map((el)=>{
//                 return el.textContent;
//         })

//         expect(isArrayOfItems).toEqual( [ 
//             'Teams', 'how we hire', 'students', 'life with us', 'jobs' 
//         ])

//    });
})

// describe("Main nav component data injected", ()=>{
//     const pinia = createTestingPinia() 
//     it("this displays company name is intended to fail", ()=> {

//         const $route = {
//             name: "home"
//         }
//         render(MainNav, {
//                 global: {
//                 plugins: [pinia],
//                 mocks:{ 
//                         $route
//                 },
//                 stubs:{
//                     FontAwesomeIcon:true,
//                     RouterLink: RouterLinkStub,
//                 }
//             },
//              data(){
//                  return{
//                      company: "job makts" //search markt this inject company name with defined data
//                  }
//              }
//        });
//        let isCompanyName = screen.getByText("/job makts/i"); 
//        expect(isCompanyName).toBeInTheDocument()
//     });

 

//     it("this returns the profile image url", async()=> {

//        const userStore = useUserStore();

//         const $route = {
//             name: "home"
//         }
//         render(MainNav, {

//             global: {
//                plugins: [pinia],
//                 mocks:{ 
//                     $route
//                 },
//                 stubs:{
//                   FontAwesomeIcon:true,
//                   RouterLink: RouterLinkStub, 
//                 }
//              },
//         })

//         let profileImageUrl = screen.queryByRole("img", {
//                  name: /userprofileimage/i                          
//         });
//         expect(profileImageUrl).not.toBeInTheDocument();

//         // btn
//         const isSignInBtn = screen.getByRole("button", {
//            name: /signin/i // ch!
//         })
      
//         userStore.isLoggedIn = true;

//         await userEvent.click(isSignInBtn)

//            profileImageUrl = screen.queryByRole("img", {
//             name: /userprofileimage/i
//         });
//         console.log(" xxxx this is the image link after await", profileImageUrl )

//         expect(profileImageUrl).toBeInTheDocument();

//     })

    
//  })


