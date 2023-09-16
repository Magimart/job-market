import { defineStore } from "pinia";
import fetchJobs from "../api/fetchJobs";
import { useUserStore } from "./users";

export const FETCH_JOBS = "FETCH_JOBS" // THIS IS A CONTANT,'
export const GET_UNIQUE_ORG = "GET_UNIQUE_ORG";
export const GET_JOBS_BY_ORG = "GET_JOBS_BY_ORG"




export const useJobsStore = defineStore("jobs", {
    state: () => ({
      
       jobs: []
    }),

    actions:{
      async [FETCH_JOBS]() {
         const jobs = await fetchJobs();
          this.jobs = jobs; //just added return jobs
       }
    },
    getters:{ // in pinia getters are like computed data in via, updates each time the state updates
     [GET_UNIQUE_ORG](state){
       const uniqueDataString = new Set();
       state.jobs.forEach((el)=> uniqueDataString.add(el.organization))
       return uniqueDataString;
      },

      [GET_JOBS_BY_ORG](state){
         const userStore = useUserStore()
         // console.log("this a set method___", state.jobs)
         // console.log("this a set use user hook", userStore.selectedOrg.length)
         //  const isJob = state.jobs.filter((job)=> console.log(job, "in fileter"))
         // console.log("this a set is job inclues", isJob)

            return state.jobs.filter((job)=>{
                   if(userStore.selectedOrg.length === 0){
                    return job
                   }
                   return userStore.selectedOrg.includes(job.organization)
            } )
        }

    }

})
