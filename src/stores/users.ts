import { defineStore } from "pinia";
export const ADD_SELECTED_USER_ITEMS = "ADD_SELECTED_USER_ITEMS";
export const ADD_SELECTED_USER_JOBTYPE = "ADD_SELECTED_USER_JOBTYPE";


interface UserItemState{    
        isLoggedIn: boolean,
        selectedOrg:string[],
        selectedJobTypes:string[]   
}


export const useUserStore = defineStore("user", {
    
    state: () : UserItemState  => ({
       isLoggedIn: false,
       selectedOrg:[],
       selectedJobTypes:[]  
    }),

    actions: {
        isLoggedUser(){
         this.isLoggedIn = true ;    
        },

        [ADD_SELECTED_USER_ITEMS] (items: string){
            this.selectedOrg = items
        },

        [ADD_SELECTED_USER_JOBTYPE] (jobTypes: string){
            this.selectedJobTypes = jobTypes
        },
    },
})


