import axios from "axios";
import  fetchJobs  from "../../../src/api/fetchJobs";
import { beforeEach, expect } from "vitest";

vi.mock("axios");
describe("fetch jobs", ()=>{
                              //before() runs once before each test
    beforeEach(()=>{ 
        axios.get.mockResolvedValue({
            data:[{
                id:1,
                title: "Vue Developer"  
            }]
       })
    })

    it("it fetches jobs from api", async()=>{
       await fetchJobs();
       expect(axios.get).toHaveBeenCalledWith("http://job-market.vercel.app");
    });
    it("it extracts each job object", async()=>{
       
      const isJobObj = await fetchJobs();
       expect(isJobObj).toEqual(
            [{
             id:1,
             title: "Vue Developer"  
            }]
       )
       
    })
} )









