import { screen, render } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import JobListing from "../../../src/components/JobListing.vue";
import axios from "axios";
import { RouterLinkStub } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import {useJobsStore, FETCH_JOBS } from "@/stores/jobs"



vi.mock("axios");


describe("test for job listing items", ()=>{
    const pinia = createTestingPinia();

   it("tests the api calls", async() => {
      
        axios.get.mockResolvedValue({data:[]});
        
        const $route = {query:{page:"5"}}
        render(JobListing, {
           global: {
               plugins: [pinia],
               stubs:{
               RouterLink: RouterLinkStub,
               },
               mocks:{
                $route,
               }
           },
        });
         const jobsStore = useJobsStore()
        expect(jobsStore.FETCH_JOBS).toHaveBeenCalled();

    });


   it("displays total of 5 jobs", async()=>{

    const $route = {query:{page:"1"}}

    
      const jobsStore= useJobsStore()
       jobsStore.jobs =  Array(10).fill({})

       render(JobListing, {
           global: {
               plugins: [pinia],
               stubs:{
                 RouterLink: RouterLinkStub,
               },
               mocks:{
                 $route,
               }
           },
       })
      
       const isJobListings = await screen.findAllByRole("heading");
       expect( isJobListings).toHaveLength(4)
   });

   describe("if page in is not in the params", ()=>{
     it("it shows page number 1", ()=>{
        const queryParam = {page: undefined};
        const $route = {query: queryParam}


        render(JobListing, {
           global: {
               plugins: [pinia],
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
    const pinia = createTestingPinia();

       it("it shows page number greater than 1", ()=>{
        const queryParam = {page: "3"};
        
        const $route = {query:queryParam}
            render(JobListing, {
            global: {
                plugins: [pinia],
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

