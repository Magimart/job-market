import { defineStore } from "pinia";
export const ADD_SELECTED_USER_ITEMS = "ADD_SELECTED_USER_ITEMS";
export const ADD_SELECTED_USER_JOBTYPE = "ADD_SELECTED_USER_JOBTYPE";



export const useUserStore = defineStore("user", {
    state: () => ({
       isLoggedIn: false,
       selectedOrg:[],
       selectedJobTypes:[]  
    }),

    actions: {
        isLoggedUser(){
         this.isLoggedIn = true ;    
        },

        [ADD_SELECTED_USER_ITEMS] (items){
            this.selectedOrg = items
        },

        [ADD_SELECTED_USER_JOBTYPE] (jobTypes){
            this.selectedJobTypes = jobTypes
        },
    },
})


