import axios from "axios";
import  fetchJobs  from "../../../src/api/fetchJobs";
import { 
       Mock, beforeEach,
     } from "vitest";

vi.mock("axios");
const axiosGetMock = axios.get as Mock;

describe("fetch jobs", ()=>{
                              //before() runs once before each test
    beforeEach(()=>{ 
        axiosGetMock.mockResolvedValue({
            data:[{
                id:1,
                title: "Vue Developer"  
            }]
       })
    })

    it("it fetches jobs from api", async()=>{ 
       await fetchJobs();
    //    expect(axios.get).toHaveBeenCalledWith("http://job-market.vercel.app");
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");

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









