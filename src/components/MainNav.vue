<template>
    <header :class="['w-full', 'flex', 'flex-row', 'space-4', 'h-full', 'bg-slate-300', headerHeightClass] ">
    <div class="brandWrapper flex bg-stone-500 h-24 w-44 items-center justify-center">
        <RouterLink to="/">
            <span class="text-white font-bold">
                {{ company }}
            </span>
        </RouterLink>
    </div>
     <nav class="h-1/2 w-full my-green-1 cursor-pointer flex flex-col">
        <div class="w-full flex h-full  items-center justify-center">
                <a href="https://www.magima-store.com/">   
                       <h4 class="text-white"> home of painters</h4>
                </a>
        </div>
         <ul class="flex flex-row space-x-6 h-8 r ">
            <li 
                v-for="el,i in navItems" 
                v-bind:key="el.text"
                id="navListItems"
                class="navListItemsWrapper w-full first:hover:bg-teal-500 bg-slate-100 hover:bg-amber-400 px-3 items-center"
            >
                <RouterLink :to="el.url">
                  {{el.text}}
                </RouterLink>
            </li>
         </ul>
          <div class="flex flex-row justify-between">
             <SearchBar/>
             <ProfileImage v-if="isLoggedIn"/>
             <ActionBtn v-else 
                        text="signin"
                        type="primary"
                        @click="isLoggedUser"
              />
          </div>
          <div>
             <SearchResultNav/>
          </div>
          <div>
          </div>
   
     </nav>
</header>
</template>

<script>
import ActionBtn from './ActionBtn.vue';
import ProfileImage from './ProfileImage.vue';
import SearchBar from './SearchBar.vue';
 import SearchResultNav from './SearchResultNav.vue';
import { RouterLink } from 'vue-router';
import {mapState, mapActions } from 'pinia';
import {useUserStore } from '@/stores/users.js'



export default {
components: { ActionBtn, ProfileImage,
SearchBar,
 SearchResultNav,
 RouterLink },
name: 'MainNav',
data() {
    return {
        company: "job makts",
        url: "https://www.magima-store.com",
        navItems: [
                  {text:"Teams", url:"/"}, 
                  {text: "how we hire", url:"/"}, 
                  {text: "students", url: "/"},
                  {text: "life with us", url: "jobs/results"},
                  {text:"jobs", url:"jobs/results"}
                ],
    };
},
computed:{
    ...mapState(useUserStore, ["isLoggedIn"]),     
    headerHeightClass(){
        return{
            "h-20": !this.isLoggedIn,
            "h-38": this.isLoggedIn   
        }
    },
    
}, 
methods:{
    ...mapActions(useUserStore, ["isLoggedUser"])
}
};
</script> 




