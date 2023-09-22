import { defineStore } from "pinia";
import fetchJobs from "../api/fetchJobs";
import { useUserStore } from "./users";

export const FETCH_JOBS = "FETCH_JOBS" 
export const GET_UNIQUE_ORG = "GET_UNIQUE_ORG";
export const GET_JOBS_BY_ORG = "GET_JOBS_BY_ORG";

export const GET_UNIQUE_JOB_TYPES = "GET_UNIQUE_JOB_TYPES";
export const FILTER_USER_JOBS_BY_TYPE = "FILTER_USER_JOBS_BY_TYPE"; 
export const ALL_FILTERED_JOBS ="ALL_FILTERED_JOBS";


export const useJobsStore = defineStore("jobs", {
    state: () => ({     
       jobs: []
    }),

    actions:{
      async [FETCH_JOBS]() {
         const jobs = await fetchJobs();
         this.jobs = jobs; 
      }
    },

    getters:{ 
      [GET_UNIQUE_ORG](state){
        const uniqueDataString = new Set();
        state.jobs.forEach((el)=> uniqueDataString.add(el.organization))
       return uniqueDataString;
      },

      [GET_UNIQUE_JOB_TYPES](state){
         const uniqueJobType = new Set();
            state.jobs.forEach((el)=> uniqueJobType.add(el.jobType))
         return uniqueJobType
      },
   
      [ALL_FILTERED_JOBS](state){

         const userStore = useUserStore()
         const isUserJobTypeEmpty = userStore.selectedJobTypes.length === 0;
         const isSelectedOrgEmpty = userStore.selectedOrg.length === 0;

         if(isSelectedOrgEmpty && isUserJobTypeEmpty) return state.jobs;

         return state.jobs
            .filter((el) =>{
               if(isUserJobTypeEmpty){
                  return true;
               };
               return userStore.selectedJobTypes.includes(el.jobType)
            })
            .filter((el) =>{
               if(isSelectedOrgEmpty)return true;
               return userStore.selectedOrg.includes(el.organization)
            }
         )
        
      }

    }

})
