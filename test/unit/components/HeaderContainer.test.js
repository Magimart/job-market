
import { screen, render } from "@testing-library/vue";
import HeaderContainer from '@/components/HeaderContainer.vue';


describe("header container", ()=> {

    it("it allows child slot to display default title", ()=>{
         
            render(HeaderContainer, {
                slots:{
                    default: "<h2>parent title</h2>",
                } 
            });

         const isTitle= screen.queryByText("parent title");       
         expect(isTitle).toBeInTheDocument()

    });

    it("it allows parrent to provide sub title to the child slot", ()=>{
         
            render(HeaderContainer, {
            slots:{
                subTitle: "<h2>other title</h2>",
            } 
            });

         const subTitle= screen.queryByText("other title");
       
         expect(subTitle).toBeInTheDocument()

    })
});



















