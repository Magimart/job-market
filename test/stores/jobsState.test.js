import { createPinia, setActivePinia } from "pinia";
import { useJobsStore } from "../../src/stores/jobs";
import axios from "axios";


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
    
    describe("FETCH_JOBS", ()=>{ //_____section 273 failed
        it("executes fetch jobs action requests", async () =>{

            axios.get.mockResolvedValue({data:["vue", "sql"]});
            const store = useJobsStore()            
             await store.FETCH_JOBS();

               expect(store.jobs).toEqual(["vue", "sql"])
        });
    })
});

describe("getters for unique organisations", ()=>{
    beforeEach(()=>{
        setActivePinia(createPinia());
    });
    
    describe("gets unique data strings fo the organisation", ()=>{ //_____section 273 failed
        it("unique organisation", () =>{

            const store = useJobsStore()            

             store.jobs =[
                     {organisation: "twitter", },
                     {organisation: "Facebook", },
                     {organisation: "Telegram", }
                   ]
               const isUniqueStrings = store.GET_UNIQUE_ORG;

               expect(isUniqueStrings).toEqual(new Set(["twitter", "Facebook" ,"Telegram"]))
        });
    })
});






