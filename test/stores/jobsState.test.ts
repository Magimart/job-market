import { createPinia, setActivePinia } from "pinia";
import { useJobsStore } from "../../src/stores/jobs";
import axios from "axios";
import { Mock } from "vitest";

interface Job {
    id: string,
    title: string,
    organization: string,
    degree:string,
    jobType:string,
    locations:string[],
    minimumQualification: string[],
    preferredQualification: string[],
    description: string[],
    dateCreated: string
  }

vi.mock("axios");
const axiosGetMock = axios.get as Mock; //telling ts to create get as somethi g else


describe("the initial jobs state", ()=>{
    beforeEach(()=>{
        setActivePinia(createPinia());
    });

    it("tests job listings", ()=>{
        const isStore = useJobsStore()
        expect(isStore.jobs).toEqual([])
    });
});

describe("jobs action", ()=>{
    beforeEach(()=>{
        setActivePinia(createPinia());
    });
    
    describe("FETCH_JOBS", ()=>{ 
        it("executes fetch jobs action requests", async () =>{

            axiosGetMock.mockResolvedValue({data:["vue", "sql"]});
            const store = useJobsStore()            
             await store.FETCH_JOBS();

               expect(store.jobs).toEqual(["vue", "sql"])
        });
    })
});

describe("getters for unique organisations", ()=>{
    describe("gets unique data strings fo the organisation", ()=>{ //_____intended sec 273 failed
        it("unique organisation", () =>{

            const store = useJobsStore()            

             store.jobs =[
                     {organization: "twitter", },
                     {organization: "Facebook", },
                     {organization: "Telegram", }
                   ] as Job[];
               const isUniqueStrings = store.GET_UNIQUE_ORG;

               expect(isUniqueStrings).toEqual(new Set(["twitter", "Facebook" ,"Telegram"]))
        });
    })
});






