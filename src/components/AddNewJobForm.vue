<template>
    <form 
        @submit.prevent="addNewJob"
        class="w-1/2 h-full  " 
    >
        <!-- title -->
        <div class="mb-3">
            <label class="inline-block mb-2">title</label>
            <input
            v-model="title"
            type="text"
            class="block text-xs w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
            placeholder="job title"
            />

        </div>
        <!-- organisation -->
        <div class="mb-3">
            <label class="inline-block mb-2">organisation</label>
            <input
            v-model="organisation"
            type="text"
            class="block text-xs w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
            placeholder="your organisation name"
            />
        </div>
        <!-- degree -->
        <div class="mb-3">
            <label class="inline-block mb-2">degree</label>
            <input
            v-model="degree"
            type="text"
            class="block text-xs w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
            placeholder="your qualification"
            />
        </div>
        <!-- job type -->
        <div class="mb-3">
            <label class="inline-block mb-2">job type</label>
            <input
            v-model="jobType"
            type="text"
            class="block text-xs w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
            placeholder="the job type"
            />
        </div>
         <!-- location -->
         <div class="mb-3">
            <label class="inline-block mb-2">location</label>
            <input
            v-model="countryLocation"
            type="text"
            class="block text-xs w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
            placeholder="your location"
            />
        </div>

        <!-- minimumQualification -->
        <div class="mb-3">
            <label class="inline-block mb-2">minimum qualification</label>
            <textarea
              v-model="minimumQualification"
              class="block text-xs w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
              placeholder="your minimumQualification"
            >
            </textarea>
        </div>
        <!-- preferredQualification -->
        <div class="mb-3">
            <label class="inline-block mb-2">prefered qualification</label>
            <textarea
              v-model="preferredQualification"
              class="block text-xs w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
              placeholder="your preferred qualification"
            >
            </textarea>
        </div>
        <!-- description -->
        <div class="mb-3">
            <label class="inline-block mb-2">job description</label>
            <textarea
              v-model="description"
              class="block text-xs w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
              placeholder="job description"
            >
            </textarea>
        </div>
        <button
            type="submit"
            class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
        >
            Submit
        </button>
    </form>

</template>
 
 <script>

 
import { mapActions, mapStores, mapState} from "pinia";
import {useJobsStore, ADD_NEW_JOB } from "@/stores/jobs"
import { Timestamp} from "firebase/firestore";


export default {
    name: "AddNewJobForm",
    data(){
        return {
            selectCountry:["Uganda", "Russia","Tanzania", "Germany", "China", "Brazil" ],
            title: "",
            organisation:"",
            degree:"",
            jobType:"",
            countryLocation:"",
            minimumQualification:"", 
            preferredQualification:"",
            description:"",
            dateCreated:"",
        }
   },
   
    methods:{
          ...mapActions(useJobsStore, [ADD_NEW_JOB]), 

        async addNewJob(){    
            try {                     
              
                const newJob = {
                    title: this.title,
                    organisation: this.organisation,
                    degree: this.degree,
                    jobType: this.jobType,
                    countryLocation: this.countryLocation,
                    minimumQualification: [this.minimumQualification], 
                    preferredQualification: [this.preferredQualification],
                    description: [this.description],
                    dateCreated: this.dateCreated = Timestamp.fromDate(new Date("December 10, 1815")),
                } 
                 
               await this.ADD_NEW_JOB(newJob)

            } catch (error) {
                  console.log(error.message)
            }
          
            window.location.reload();

        }
    }

};
  
 </script>
 
 