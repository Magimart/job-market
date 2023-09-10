import { screen, render } from "@testing-library/vue";
import MainNav from '@/components/MainNav.vue';
import { expect, it } from "vitest";
import { userEvent } from "@testing-library/user-event";
import { RouterLinkStub } from "@vue/test-utils";


describe("Main nav component", ()=>{
   it("this desplays company name", ()=> {
    const $route = {
        name: "home"
    }
        render(MainNav,   {                     
                global: {
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

    it("this displays company name is intended to fail", ()=> {
    
        const $route = {
            name: "home"
        }
        render(MainNav, {
                global: {
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
                 }
             }
     });
     //screen.getByText("job makts"); 
     let isCompanyName = screen.getByText("job search"); // is intended to fail
       expect(isCompanyName).toBeInTheDocument()
    });

    // this is test for nav items
    it("this displays nav items", ()=>{

        const $route = {
            name: "home"
        }

        render(MainNav,{
            global: {
                mocks:{ 
                    $route
                },
                stubs:{
                  FontAwesomeIcon:true,
                  RouterLink: RouterLinkStub, 
                }
            },
         } );
        let isListNames = screen.getAllByRole("listitem")
        let isArrayOfItems = isListNames.map((el)=>{
            return el.innerHTML;
        })

        // expect(isArrayOfItems).toEqual([ 'Teams', 'how we hire', 'students', 'life with us', 'jobs' ])
        expect(isArrayOfItems).toEqual( [
                {text:"Teams", url:"/"}, 
                {text: "how we hire", url:"/"}, 
                {text: "students", url: "/"},
                {text: "life with us", url: "jobs/results"},
                {text:"jobs", url:"jobs/results"}
              ])

    });

    it("this returns the profile image url", async()=> {
        
        const $route = {
            name: "home"
        }
        render(MainNav, {
            global: {
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
              name: /user-profile-image/i,
              
        });
        
        expect(profileImageUrl).not.toBeInTheDocument();

        // btn
        const isSignInBtn = screen.getByRole("button", {
           name: /signin/i // ch!
        })
       
        await userEvent.click(isSignInBtn)

        profileImageUrl = screen.getByRole("img", {
            name: /user-profile-image/i,            
        });

        expect(profileImageUrl).toBeInTheDocument();

    });

   
 });