import { screen, render } from "@testing-library/vue";
import MainNav from '@/components/MainNav.vue';
import { expect, it } from "vitest";
import userEvent  from "@testing-library/user-event";
import { RouterLinkStub } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { useUserStore } from "../../../src/stores/users";

describe("Main nav component", ()=>{
   it("this desplays company name", ()=> {

      const pinia = createTestingPinia()

       const $route = {
            name: "home"
        }
        render(MainNav,   {                     
                global: {
                    plugins: [pinia],
                    mocks:{
                        $route
                    },
                    stubs:{
                    FontAwesomeIcon:true,
                    RouterLink: RouterLinkStub,
                    }
                }
        });
    screen.getByText("job makts");
    let isCompany = screen.getByText("job makts");

      expect(isCompany).toBeInTheDocument()
   })
})

describe("Main nav component data injected", ()=>{
    const pinia = createTestingPinia() 
    it("this displays company name is intended to fail", ()=> {

        const $route = {
            name: "home"
        }
        render(MainNav, {
                global: {
                plugins: [pinia],
                mocks:{ 
                        $route
                },
                stubs:{
                FontAwesomeIcon:true,
                RouterLink: RouterLinkStub,
                }
            },
             data(){
                 return{
                     company: "job makts"
                     // NOTE:: that you can inject any value on the campany key  
                 }
             }
       });
       let isCompanyName = screen.getByText("/job makts/i"); 
       expect(isCompanyName).toBeInTheDocument()
    });

    it("this displays nav items", ()=>{

        const $route = {
            name: "home"
        }

        render(MainNav,{
            global: {
                plugins: [pinia],
                mocks:{ 
                    $route
                },
                stubs:{
                  FontAwesomeIcon:true,
                  RouterLink: RouterLinkStub, 
                }
            },
         } );

        const isListNames = screen.getAllByRole("listitem")
        const isArrayOfItems = isListNames.map((el)=>{
             return el.textContent;
        })

        expect(isArrayOfItems).toEqual( [ 
            'Teams', 'how we hire', 'students', 'life with us', 'jobs' 
        ])

    });

    it("this returns the profile image url", async()=> {

       const userStore = useUserStore();

        const $route = {
            name: "home"
        }
        render(MainNav, {

            global: {
               plugins: [pinia],
                mocks:{ 
                    $route
                },
                stubs:{
                  FontAwesomeIcon:true,
                  RouterLink: RouterLinkStub, 
                }
             },
        })

        let profileImageUrl = screen.queryByRole("img", {
                 name: /userprofileimage/i                          
        });

        expect(profileImageUrl).not.toBeInTheDocument();

        // btn
        const isSignInBtn = screen.getByRole("button", {
           name: /signin/i // ch!
        })
      
        userStore.isLoggedIn = true;

          await userEvent.click(isSignInBtn)

           profileImageUrl = screen.queryByRole("img", {
            name: /userprofileimage/i
        });
        console.log(" xxxx this is the image link after await", profileImageUrl )

        expect(profileImageUrl).toBeInTheDocument();

    })
   
 })


