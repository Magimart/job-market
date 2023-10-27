import { defineStore } from "pinia";
// import fetchJobs from "../api/fetchJobs";
import { useUserStore } from "./users";
import {jobsCollection} from "@/includes/firebase"; 
import {  doc, setDoc,Timestamp, updateDoc, getDocs   } from "firebase/firestore";

export const FETCH_JOBS = "FETCH_JOBS" 
export const GET_UNIQUE_ORG = "GET_UNIQUE_ORG";
export const GET_JOBS_BY_ORG = "GET_JOBS_BY_ORG";

export const GET_UNIQUE_JOB_TYPES = "GET_UNIQUE_JOB_TYPES";
export const FILTER_USER_JOBS_BY_TYPE = "FILTER_USER_JOBS_BY_TYPE"; 
export const ALL_FILTERED_JOBS ="ALL_FILTERED_JOBS";
export const ADD_NEW_JOB = "ADD_NEW_JOB";
// import type { Job } from "@/api/types";
// import { Job } from "../api/types";

interface Job { 
   id: string,
   title: string,
   organisation: string,
   degree:string,
   jobType:string,
   locations:string[],
   minimumQualification: string[],
   preferredQualification: string[],
   description: string[],
   dateCreated: string
 }


interface JobsState {
   jobs: Job[];
   success: Boolean;
}

interface JobsAction {
   id: string,
   title: string, organisation:string, 
   degree:string, jobType: string,
   locations:string, minimumQualification: string[], 
   preferredQualification:string[],
   description: string[], dateCreated:Date
}


export const useJobsStore = defineStore("jobs", {
    state: () : JobsState=> ({     
       jobs: [],
       success: false
    }),

   actions:{
      async [FETCH_JOBS]() {
      
         try {

            let temJob = []; // fix push() types
            let  querySnapshot = await getDocs<JobsAction>(jobsCollection);
            querySnapshot.forEach((doc) => {

               let id = doc.id;
               let  { 
                     title, organisation, degree, jobType,
                     locations, minimumQualification, preferredQualification,
                     description, dateCreated
                 } = doc.data()

               let isJobs = {
                  id, title, organisation, degree, jobType,
                  locations, minimumQualification, preferredQualification,
                  description, dateCreated
               }

               temJob.push(isJobs);
         
            });
        
            this.jobs = temJob ;
        
         } catch (error) {
              console.log(error)
         }
      },


      async [ADD_NEW_JOB](jobData: any) {

         try {
              await setDoc(doc(jobsCollection), jobData);
              this.success = true;
               
         } catch (error) {
             console.log(error)
             return; 
         }
     
       }, 
   },

   getters:{ 
      [GET_UNIQUE_ORG](state){
        const uniqueDataString = new Set<string>();
        state.jobs.forEach((el)=> uniqueDataString.add(el.organisation))
       return uniqueDataString;
      },

      [GET_UNIQUE_JOB_TYPES](state){
         const uniqueJobType = new Set<string>();
            state.jobs.forEach((el)=> uniqueJobType.add(el.jobType))
         return uniqueJobType
      },
   
      [ALL_FILTERED_JOBS](state): Job[]{

         const userStore = useUserStore()
         const isUserJobTypeEmpty = userStore.selectedJobTypes.length === 0;
         const isSelectedOrgEmpty = userStore.selectedOrg.length === 0;

         if(isSelectedOrgEmpty && isUserJobTypeEmpty) return state.jobs;
         console.group("this is all jobs in getters", state.jobs)
         return state.jobs
            .filter((el) =>{
               if(isUserJobTypeEmpty){
                  return true;
               };
               return userStore.selectedJobTypes.includes(el.jobType)
            })
            .filter((el) =>{
               if(isSelectedOrgEmpty)return true;
               return userStore.selectedOrg.includes(el.organisation)
            }
         )
        
      }

   }

})
