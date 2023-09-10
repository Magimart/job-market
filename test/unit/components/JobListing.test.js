import { screen, render } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import JobListing from "../../../src/components/JobListing.vue";
import axios from "axios";
import { RouterLinkStub } from "@vue/test-utils";



vi.mock("axios");

describe("test for job listing items", ()=>{
    it("tests the api calls", ()=>{
      
        axios.get.mockResolvedValue({data:[]});
        
        const $route = {query:{page:"5"}}
        render(JobListing, {
           global: {
               stubs:{
               RouterLink: RouterLinkStub,
               },
               mocks:{
                $route,
               }
           },
        });
        expect(axios.get).toHaveBeenCalledWith("http://fake-api.com/jobs");


   });
   it("displays total of 5 jobs", async()=>{
       axios.get.mockResolvedValue({data: Array(10).fill({})});
       
       const $route = {query:{page:"1"}}

       render(JobListing, {
           global: {
               stubs:{
                 RouterLink: RouterLinkStub,
               },
               mocks:{
                 $route,
               }
           },
       })

       const isJobListings = await screen.findAllByRole("heading");
       expect( isJobListings).toHaveLength(5)
   });

   describe("if page in is not in the params", ()=>{
     it("it shows page number 1", ()=>{
        const queryParam = {page: undefined};
        const $route = {query:queryParam}
        render(JobListing, {
           global: {
               stubs:{
               RouterLink: RouterLinkStub,
               },
               mocks:{
                $route,
               }
           },
        });
       expect(screen.getByText('page:1')).toBeInTheDocument()

     });
   }); 

   describe("when page or params exist", ()=>{
       it("it shows page number greater than 1", ()=>{
        const queryParam = {page: "3"};
        const $route = {query:queryParam}
            render(JobListing, {
            global: {
                stubs:{
                RouterLink: RouterLinkStub,
                },
                mocks:{
                    $route,
                }
            },
            });
       expect(screen.getByText('page:3')).toBeInTheDocument()

     });

   })

});






