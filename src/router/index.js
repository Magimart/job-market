import { createRouter, createWebHashHistory  } from "vue-router";
import HomePage from "../views/HomePage.vue";
import JobSearchResultPage from "../views/JobSearchResultPage.vue";
import SingleJobPage from "../views/SingleJobPage.vue";


const routes =[

    {
        path: "/",
        name:"home",
        component: HomePage
    },
    
    {
        path: "/jobs/results",
        name:"searchResults",
        component: JobSearchResultPage
    },
    {
        path: "/jobs/results/:id", // this is a wildcard route
        name: "SingleJobPage",
        component:SingleJobPage
    }
]

const router = createRouter({
     history:createWebHashHistory(),
     routes,
     scrollBehavior(){
        return { top:0, left:0, behavior: "smooth"}
     }
})


export default router;






