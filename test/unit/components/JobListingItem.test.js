import { screen, render } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import JobListItem from "../../../src/components/JobListItem.vue";
import { RouterLinkStub } from "@vue/test-utils";



describe("test job list item", ()=>{
     it("it check if the job list object title is correct", ()=>{

        const $route = {
            name: "/jobs/results"
        }

        render(JobListItem  , {
            global: {
                mocks:{ 
                 $route: $route
                },
                stubs:{
                RouterLink: RouterLinkStub,
                }
            },
            props:{ 
                el:{
                  title: "vue developer",
                }
            }
        });

       const isTitle = screen.getByText("vue developer");
       expect(isTitle).toBeInTheDocument()
        
       })
});












