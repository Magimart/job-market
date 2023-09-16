import { defineStore } from "pinia";
export const ADD_SELECTED_USER_ITEMS = "ADD_SELECTED_USER_ITEMS";

export const useUserStore = defineStore("user", {
    state: () => ({
       isLoggedIn: false,
       selectedOrg:[]
    }),

    actions: {
        isLoggedUser(){
         this.isLoggedIn = true ;    
        },

        [ADD_SELECTED_USER_ITEMS] (items){
            this.selectedOrg = items
        },
    }
})


