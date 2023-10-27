<template>
    <header :class="['w-full', 'flex', 'flex-row', 'space-4', 'h-full', 'bg-slate-300', headerHeightClass] ">
        <div class="brandWrapper m-2 flex bg-stone-500 w-44 items-center justify-center">
            <RouterLink to="/">
                <span class="text-white flex font-bold px-5 ">
                    {{ company }}
                </span>
            </RouterLink>
        </div>
        <div class="h-1/2 w-full my-green-1 cursor-pointer flex flex-col">
            <div class="w-full flex h-full  items-center justify-center">
                    <a href="https://www.magima-store.com/">   
                        <h4 class="text-white"> home of painters</h4>
                    </a>
            </div>
           <div class="flex flex-row justify-center">
                <ul class="flex flex-row space-x-6 h-8 r ">
                    <li 
                        v-for="el,i in navItems" 
                        v-bind:key="el.text"
                        id="navListItems"
                        class="navListItemsWrapper 
                        text-xs sm:text-base md:text-base lg:text-base xl:text-base
                        w-max flex px-1
                            first:hover:bg-teal-500  bg-slate-10 hover:bg-amber-400  items-center"
                    >
                    <RouterLink :to="el.url">
                        {{el.text}}
                        </RouterLink>
                    </li>
                </ul>
           </div>
            <div class="flex flex-row space-x-2 justify-end bg-opacity-10 bg-yellow-400 p-5">
                <!-- <SearchBar/> -->
                <div>
                    <h5 class="bg-yellow-500 p-1 text-xs">saved jobs</h5>
                </div>
                <div>
                        <ProfileImage v-if="isLoggedIn"/>
                        <ActionBtn v-else 
                                text="signin"
                                type="primary"
                                @click="isLoggedUser"
                        />
                </div>
                
            </div>
            
        </div>
   </header>
</template>

<script lang="ts" setup>
import ActionBtn from '@/components/ActionBtn.vue';
import ProfileImage from './ProfileImage.vue';
import SearchBar from './SearchBar.vue';
 import SearchResultNav from './SearchResultNav.vue';
import { RouterLink } from 'vue-router';
// import {mapState, mapActions } from 'pinia';
import {useUserStore } from '@/stores/users.ts'
import { ref, computed}  from "vue";

const company =  ref("job makts");
const url = ref("https://www.magima-store.com");
const navItems = ref([
                  {text:"Teams", url:"/"}, 
                  {text: "how we hire", url:"/"}, 
                  {text: "students", url: "/"},
                  {text: "life with us", url: "jobs/results"},
                  {text:"jobs", url:"jobs/results"}
                ]);

const store = useUserStore();
const isLoggedIn = computed(()=> {
    const isLoggedIn = store.isLoggedIn;
    return isLoggedIn;
})
const headerHeightClass = computed(()=>{
    const isLoggedIn = store.isLoggedIn;
        return{
            "h-20": !isLoggedIn.value,
            "h-38": isLoggedIn.value   
        }
})
 const isLoggedUser = store.isLoggedUser



/**
 
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
        console.log("userstore at main nav",useUserStore)
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
 */
</script> 




